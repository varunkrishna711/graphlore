from fastapi import APIRouter, HTTPException, Depends, Security
from fastapi.security import APIKeyHeader
from app.core.schemas import NarrativeInput, NarrativeOutput
from app.core.config import settings
from app.services.graph import compiled_engine

router = APIRouter()

# Declare headers for private API key checking
API_KEY_HEADER = APIKeyHeader(name="X-GraphLore-Token", auto_error=True)

def validate_b2b_client(api_key: str = Security(API_KEY_HEADER)) -> str:
    """Security dependency to ensure only authorized enterprise platforms can hit your pipeline."""
    if api_key != settings.B2B_SECRET_TOKEN:
        raise HTTPException(
            status_code=403, 
            detail="Access Denied: Invalid enterprise token payload."
        )
    return api_key

@router.post(
    "/structure", 
    response_model=NarrativeOutput, 
    summary="Parse chaotic human text into database-ready narrative infrastructure assets."
)
async def process_raw_narrative(
    payload: NarrativeInput, 
    _auth: str = Depends(validate_b2b_client)
):
    try:
        # Prepare the initial memory state dictating graph input variables
        initial_state = {"raw_text": payload.raw_text}
        
        # Invoke the multi-agent graph asynchronously
        execution_result = await compiled_engine.ainvoke(initial_state)
        
        # Extract and return the strictly validated Pydantic model payload
        return execution_result["final_payload"]
        
    except KeyError as ke:
        raise HTTPException(
            status_code=500, 
            detail=f"Engine State Error: Missing payload structure. Details: {str(ke)}"
        )
    except Exception as e:
        raise HTTPException(
            status_code=500, 
            detail=f"Critical Pipeline Execution Failure: {str(e)}"
        )
