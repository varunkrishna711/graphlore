# GraphLore Engine 🌌

> **Enterprise-Grade B2B Infrastructure for Stateful Narrative Ingestion & Structural IP Automation**

GraphLore is a high-performance, headless asynchronous API gateway designed to eliminate "Blank Page Syndrome" and user drop-off on creative platforms (e.g., web-novel sites, game development suites, and branding agencies).

Instead of generating unstructured text blocks, GraphLore acts as a **narrative data factory**. It ingests chaotic, high-entropy human thoughts (brain dumps, stream-of-consciousness, or dream fragments) and processes them through a deterministic multi-agent state machine. The engine outputs **strictly validated, database-ready JSON schemas** featuring industry-standard 3-Act plots, isolated character profiles, and built-in IP compliance filters.

---

## 🏗️ Architectural Overview

GraphLore separates the API gateway from cognitive orchestration to guarantee low-latency runtime execution and strict data handling.

### High-Level System Design (HLD)

### Key Technical Achievements

- **Stateful Orchestration (LangGraph):** Replaced unpredictable single-prompt LLM calls with a multi-node workflow graph managing internal memory mutations sequentially.
- **Database-Ready Schemas (Pydantic):** Enforced native `json_schema` constraints on **Google Gemini 2.5 Flash** to guarantee deterministic array shapes that mount directly to relational tables.
- **Automated IP & Compliance Guard:** Built logical nodes to intercept, clean, and abstract copyrighted characters or corporate trademarks (e.g., transforming "Pokemon" references into safe, generic story assets) protecting client platforms from legal risk.
- **Enterprise Security Inceptors:** Wrapped endpoints in asynchronous FastAPI dependencies enforcing secure `X-GraphLore-Token` authentication routing.

---

## 📁 Directory Architecture

The repository enforces a clean, modular separation of concerns following standard software engineering patterns:

```text
graphlore_engine/
├── app/
│   ├── __init__.py
│   ├── main.py                 # FastAPI system entry point & asset routing
│   ├── api/
│   │   ├── __init__.py
│   │   └── v1/
│   │       ├── __init__.py
│   │       └── structure.py    # Authenticated POST route for text ingestion
│   ├── core/
│   │   ├── __init__.py
│   │   ├── config.py           # Environment credential loading (Pydantic Settings)
│   │   └── schemas.py          # Input/Output schema rules mapping narrative IP
│   └── services/
│       ├── __init__.py
│       ├── graph.py            # LangGraph pipeline topology configuration
│       └── nodes.py            # Async LangChain processing blocks utilizing Gemini
├── templates/
│   └── index.html              # B2B Interactive Sandbox Panel Interface
├── .env                        # Local infrastructure access tokens (Git ignored)
├── .gitignore                  # File layout asset protection rules
└── requirements.txt            # Version-locked package ecosystem list
```

---

## 🚀 Quickstart & Local Installation

### 1. Prerequisites

Ensure you have `Python 3.10+` and a valid Google Gemini API Key generated via Google AI Studio.

### 2. Environment Setup

Clone the repository and initialize an isolated virtual environment:

```bash
git clone https://github.com
cd graphlore_engine

python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```

Upgrade the local package manager and install dependencies:

```bash
python -m pip install --upgrade pip
pip install -r requirements.txt
```

### 3. Environment Variables Config

Create a `.env` file at the root level:

```ini
PROJECT_NAME="GraphLore Engine"
ENV="development"
GOOGLE_API_KEY="The API Key Here"
B2B_SECRET_TOKEN="Secret Token"
```

### 4. Run the Development Server
Launch the application infrastructure using Uvicorn:
```bash
uvicorn app.main:app --reload --port 8000
```

* **Interactive Sandbox UI Dashboard:** Navigate to `http://127.0.0`
* **Automated Swagger API Docs:** Navigate to `http://127.0.0docs`

---

## ⚡ API Contract Specifications

### POST `/api/v1/structure`

#### Required Headers
```http
X-GraphLore-Token: 4a7e93b129cf9017e826bfa87201c109dfb08f521b4a11c8d0e52bca7119e34c
Content-Type: application/json
```

#### Request Body Schema
```json
{
  "raw_text": "ice-cream, school, exhibition, pokemon, danger",
  "client_id": "production_channel_01"
}
```

#### Response Payloads (Strict JSON Database Schema)
```json
{
  "primary_genre": "Urban Fantasy / Supernatural Suspense",
  "world_description": "St. Jude’s Academy Exhibition Grounds. A bustling school science exhibition that transforms into an infinite spatial loop arena...",
  "entities": [
    {
      "name": "The Confectioner",
      "type": "Spatial Trap NPC",
      "description": "An anomalous figure serving neon-colored ice cream that lowers psychological defense traits.",
      "narrative_function": "Induces the baseline environmental danger trigger."
    },
    {
      "name": "Subconscious Manifestations",
      "type": "Creature Vector",
      "description": "Warped creature entities resembling pocket monsters that become hostile when illumination dims.",
      "narrative_function": "Serves as the core physical conflict asset."
    }
  ],
  "narrative_architecture": {
    "inciting_incident": "Consuming anomalous ice cream traps the protagonist inside the school loop.",
    "three_act_structure": {
    "act_1_setup": "Exploring the science fair exhibits...",
    "act_2_confrontation": "Exhibits shift hostile; encountering the creature loop structures...",
    "act_3_resolution": "Using thermal properties of the freezer mechanism to collapse the loop core."
    }
  },
  "compliance_logs": "IP scan complete by Gemini. Abstracted trademarked entity strings securely."
}
```

## 💼 Business Metrics & Monetization Use-Cases
* **B2B User Churn Protection:** Integrating the endpoint directly into writer onboarding workflows bypasses cognitive friction, increasing script completion rates.
* **Game Lore Assets Generation:** Automatically turns messy developer world-building logs into system-ready tables for instant asset instantiation inside Unity or Unreal engines.
* **Enterprise Licensing Model:** Perfect for SaaS deployment utilizing credit token limits or metered billing models per API call block.
