from typing import TypedDict, Any
from langgraph.graph import StateGraph, START, END

# 1. Define the Global Memory State of the Graph Engine
class GraphState(TypedDict):
    """
    Shared data dictionary flowing sequentially through our service nodes.
    Each sub-agent appends its operational data directly to this payload.
    """
    raw_text: str          # Input: Messy text string passed by the user
    clean_text: str        # Mid-state: Stripped text after trademark/compliance scrub
    compliance_logs: str   # Mid-state: Audit logs tracking what changed
    final_payload: Any     # Output: Strict validated NarrativeOutput Pydantic model

# 2. Instantiate the State Graph Construction Engine
workflow = StateGraph(GraphState)

# 3. Import Your Google Gemini Node Processors
from app.services.nodes import compliance_node, architect_node

# 4. Mount the Custom Sub-Agents onto the Workflow Canvas
workflow.add_node("compliance_filter", compliance_node)
workflow.add_node("narrative_architect", architect_node)

# 5. Define the Execution Vectors (Connect the Nodes Sequentially)
# Start the machine -> Run safety checks first
workflow.add_edge(START, "compliance_filter")

# Move clean data to the narrative design engine
workflow.add_edge("compliance_filter", "narrative_architect")

# Finish execution after packaging structural JSON elements
workflow.add_edge("narrative_architect", END)

# 6. Compile the Graph Architecture into a Runnable Binary Interface
# This instantiates the missing 'compiled_engine' object imported by your FastAPI router.
compiled_engine = workflow.compile()
