from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    PROJECT_NAME: str = "GraphLore Engine"
    ENV: str = "development"
    GOOGLE_API_KEY: str = "dev-google-api-key"  # Automatically mapped to LangChain's internal expectations
    B2B_SECRET_TOKEN: str = "change me in production"
    SECRET_KEY: str = "change-me-in-production"
    DATABASE_URL: str
    DB_ECHO: bool = False
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # Default to 7 days

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

settings = Settings()