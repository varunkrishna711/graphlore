from datetime import timedelta
from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel
from sqlalchemy.orm import Session

from app.core.auth import (
    User,
    authenticate_user,
    create_access_token,
    create_user,
    get_current_active_user,
    get_user,
)
from app.core.database import get_db
from app.core.config import settings


class LoginRequest(BaseModel):
    username: str
    password: str


class RegisterRequest(BaseModel):
    username: str
    password: str
    full_name: Optional[str] = None
    email: Optional[str] = None

router = APIRouter()


@router.post("/register", summary="Create a new user account")
async def register_user(form_data: RegisterRequest, db: Session = Depends(get_db)):
    existing = get_user(db, form_data.username)
    if existing:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username already exists",
        )

    user_model = create_user(
        db,
        username=form_data.username,
        password=form_data.password,
        full_name=form_data.full_name,
        email=form_data.email,
    )

    return {
        "username": user_model.username,
        "email": user_model.email,
        "full_name": user_model.full_name,
    }


@router.post("/login", summary="Authenticate user and return a JWT token")
async def login_for_access_token(form_data: LoginRequest, db: Session = Depends(get_db)):
    user = authenticate_user(db, form_data.username, form_data.password)

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username},
        expires_delta=access_token_expires,
    )

    return {
        "access_token": access_token,
        "token_type": "bearer",
    }


@router.get("/users/me", summary="Get current authenticated user")
async def read_users_me(current_user: User = Depends(get_current_active_user)):
    return current_user