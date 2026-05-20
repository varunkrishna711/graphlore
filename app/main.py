from fastapi import FastAPI
from app.core.config import settings
from app.api.v1.structure import router as v1_structure_router

# Initialize the global application gateway instance
app = FastAPI(
    title=settings.PROJECT_NAME,
    description="Enterprise-grade B2B narrative ingestion and structuring infrastructure engine.",
    version="1.0.0"
)

# Mount the v1 API routes onto the router root prefixes
app.include_router(v1_structure_router, prefix="/api/v1", tags=["Creative Ingestion Engine"])

@app.get("/health", tags=["Infrastructure System Diagnostics"])
def system_health_check():
    """Lightweight endpoint for container health probes and status assertions."""
    return {
        "status": "active", 
        "engine_environment": settings.ENV, 
        "platform": "GraphLore Infrastructure Layer"
    }
