import os
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate
from app.core.schemas import NarrativeOutput

from dotenv import load_dotenv
load_dotenv()  # Load environment variables from .env file

# Initialize Gemini Model (Using native json_schema constraints)
llm = ChatGoogleGenerativeAI(model="gemini-2.5-flash", temperature=0.7)
structured_llm = llm.with_structured_output(NarrativeOutput, method="json_schema")

def compliance_node(state: dict) -> dict:
    """Node 1: Scans the input text for trademark conflicts using Gemini."""
    raw = state["raw_text"]
    
    compliance_prompt = ChatPromptTemplate.from_messages([
        ("system", "You are a legal and safety IP scanner for a creative platform. "
                   "Identify any major corporate trademarks (like Pokemon, Disney, Marvel) "
                   "in the text and abstract them into generic, safe descriptions (e.g., 'Pocket Monsters'). "
                   "Provide a short note of what you changed."),
        ("user", "{input_text}")
    ])
    
    chain = compliance_prompt | llm
    response = chain.invoke({"input_text": raw})
    
    return {"clean_text": response.content, "compliance_logs": "IP scan complete by Gemini. Cleaned copyrighted terms."}

def architect_node(state: dict) -> dict:
    """Node 2: Compiles text into strict Pydantic layouts."""
    clean_input = state["clean_text"]
    logs = state["compliance_logs"]
    
    architect_prompt = ChatPromptTemplate.from_messages([
        ("system", "You are an elite narrative designer. Take the incoming chaotic elements "
                   "and map them perfectly into the required structured database schema.\n\n"
                   "CRITICAL INSTRUCTIONS:\n"
                   "1. Do NOT return default placeholders, 'Undefined', empty lists, or generic templates.\n"
                   "2. Even if the input text contains only a few disjointed or random words, you MUST weave them "
                   "together into a highly imaginative, cinematic, and cohesive story concept.\n"
                   "3. Fill out every single Pydantic field fully with rich, high-quality world-building data."),
        ("user", "Cleaned Concepts to synthesize into a story: {clean_input}")
    ])
    
    chain = architect_prompt | structured_llm
    structured_response = chain.invoke({"clean_input": clean_input})
    
    structured_response.compliance_logs = logs
    return {"final_payload": structured_response}
