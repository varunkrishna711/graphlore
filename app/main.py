from fastapi import FastAPI

app = FastAPI(title="GraphLore Verification")

@app.get("/health")
def health_check():
    return {"status": "operational", "engine": "GraphLore B2B Gateway"}