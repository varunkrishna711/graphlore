from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

from app.core.config import settings
from dotenv import load_dotenv

load_dotenv() 

engine = create_engine(settings.DATABASE_URL, echo=settings.DB_ECHO, future=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine, future=True)
Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def create_db_and_tables():
    Base.metadata.create_all(bind=engine)
