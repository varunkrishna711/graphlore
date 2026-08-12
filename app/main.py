import os
from pathlib import Path
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from app.core.config import settings
from app.api.v1.structure import router as v1_structure_router
from app.api.v1.auth import router as v1_auth_router

# Initialize the global application gateway instance
app = FastAPI(
    title=settings.PROJECT_NAME,
    description="Enterprise-grade B2B narrative ingestion and structuring infrastructure engine.",
    version="1.0.0"
)

# Mount the v1 API routes onto the router root prefixes
app.include_router(v1_structure_router, prefix="/api/v1", tags=["Creative Ingestion Engine"])
app.include_router(v1_auth_router, prefix="/api/v1", tags=["Authorization & User Management"])

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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
                                                                        
@app.get("/api/v1/storyboards", tags=["Storyboard Asset Delivery"])
def list_storyboards():
    """Return generated storyboard images that the frontend can render."""
    storyboard_dir = Path("static/storyboards")
    if not storyboard_dir.exists():
        return {"images": []}

    image_files = sorted(
        [
            {
                "filename": path.name,
                "url": f"/static/storyboards/{path.name}",
            }
            for path in storyboard_dir.iterdir()
            if path.is_file() and path.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp"}
        ],
        key=lambda entry: entry["filename"],
    )
    return {"images": image_files}

@app.get("/health", tags=["Infrastructure System Diagnostics"])
def system_health_check():
    """Lightweight endpoint for container health probes and status assertions."""
    return {
        "status": "active", 
        "engine_environment": settings.ENV, 
        "platform": "GraphLore Infrastructure Layer"
    }
