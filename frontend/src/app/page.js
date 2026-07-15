"use client";

import { useState } from "react";
import LandingPage from "@/components/LandingPage";
import GraphLoreDashboard from "@/components/GraphLoreDashboard";

export default function Home() {
  const [view, setView] = useState("landing"); // "landing" | "dashboard"

  return (
    <div className="min-h-screen bg-zinc-950 transition-all duration-500">
      {view === "landing" ? (
        <div className="animate-fade-in">
          <LandingPage onEnterSandbox={() => setView("dashboard")} />
        </div>
      ) : (
        <div className="animate-fade-in">
          <GraphLoreDashboard onBackToLanding={() => setView("landing")} />
        </div>
      )}
    </div>
  );
}

