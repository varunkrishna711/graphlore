import os
from fastapi import FastAPI, HTTPException
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
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

os.makedirs("static/storyboards", exist_ok=True)
app.mount("/static", StaticFiles(directory="static"), name="static")

# Resolve the absolute path to your index.html file
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HTML_FILE_PATH = os.path.join(BASE_DIR, "templates", "index.html")

@app.get("/", response_class=HTMLResponse, tags=["Sandbox Interface Module"])
def sandbox_interface():
    """Reads the static index.html dashboard file directly to bypass library rendering bugs."""
    try:
        with open(HTML_FILE_PATH, "r", encoding="utf-8") as file:
            html_content = file.read()
        return HTMLResponse(content=html_content, status_code=200)
    except FileNotFoundError:
        raise HTTPException(
            status_code=404, 
            detail=f"Sandbox UI file not found. Checked absolute path location: {HTML_FILE_PATH}"
        )
                                                                        
@app.get("/health", tags=["Infrastructure System Diagnostics"])
def system_health_check():
    """Lightweight endpoint for container health probes and status assertions."""
    return {
        "status": "active", 
        "engine_environment": settings.ENV, 
        "platform": "GraphLore Infrastructure Layer"
    }
