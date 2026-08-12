from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    PROJECT_NAME: str = "GraphLore Engine"
    ENV: str = "development"
    GOOGLE_API_KEY: str  # Automatically mapped to LangChain's internal expectations
    B2B_SECRET_TOKEN: str
    SECRET_KEY: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # Default to 7 days

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

settings = Settings()