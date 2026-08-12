from datetime import datetime

from sqlalchemy import BOOLEAN, Column, DateTime, Integer, String

from app.core.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(150), unique=True, index=True, nullable=False)
    full_name = Column(String(200), nullable=True)
    email = Column(String(200), nullable=True)
    disabled = Column(BOOLEAN, default=False, nullable=False)
    hashed_password = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
