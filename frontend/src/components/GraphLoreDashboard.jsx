"use client";

import { useMemo, useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import GraphControls from "@/components/GraphControls";
import GraphCanvas from "@/components/GraphCanvas";
import GraphInfoPanel from "@/components/GraphInfoPanel";
import { categories, initialGraph } from "@/lib/graph-data";
import { filterGraph, getNeighbors, resolveNode } from "@/lib/graph-utils";

export default function GraphLoreDashboard() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedNodeId, setSelectedNodeId] = useState(
    initialGraph.nodes[0].id,
  );
  const [viewMode, setViewMode] = useState("graph");
  const [activityLog, setActivityLog] = useState([
    { label: "Dashboard initialized", time: "Just now" },
  ]);

  const graph = useMemo(
    () => filterGraph(initialGraph, query, activeCategory),
    [query, activeCategory],
  );

  const activeId = useMemo(() => {
    const match = graph.nodes.find((node) => node.id === selectedNodeId);
    return match
      ? selectedNodeId
      : graph.nodes[0]?.id || initialGraph.nodes[0].id;
  }, [graph.nodes, selectedNodeId]);

  const selectedNode = useMemo(
    () => resolveNode(graph, activeId) || initialGraph.nodes[0],
    [graph, activeId],
  );

  const neighbors = useMemo(
    () => getNeighbors(graph, selectedNode.id),
    [graph, selectedNode.id],
  );

  const handleSelectNode = (nodeId) => {
    setSelectedNodeId(nodeId);
    setActivityLog((current) =>
      [
        { label: `Selected ${nodeId} for deeper inspection`, time: "Now" },
        ...current,
      ].slice(0, 5),
    );
  };

  const handleQueryChange = (value) => {
    setQuery(value);
    setActivityLog((current) =>
      [
        { label: `Filtered graph by "${value}"`, time: "Now" },
        ...current,
      ].slice(0, 5),
    );
  };

  const handleCategoryChange = (value) => {
    setActiveCategory(value);
    setActivityLog((current) =>
      [{ label: `Switched filter to ${value}`, time: "Now" }, ...current].slice(
        0,
        5,
      ),
    );
  };

  const handleToggleView = (mode) => {
    setViewMode(mode);
    setActivityLog((current) =>
      [
        { label: `Changed workspace to ${mode} view`, time: "Now" },
        ...current,
      ].slice(0, 5),
    );
  };

  return (
    <div className="flex min-h-screen flex-col gap-8 bg-zinc-50 px-6 py-10 text-zinc-950 dark:bg-black dark:text-zinc-100 sm:px-10 lg:px-14">
      <DashboardHeader />

      <GraphControls
        query={query}
        onQueryChange={handleQueryChange}
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        viewMode={viewMode}
        onToggleView={handleToggleView}
        resultCount={graph.nodes.length}
      />

      <div className="grid gap-8 xl:grid-cols-[2fr_1fr]">
        <GraphCanvas
          nodes={graph.nodes}
          edges={graph.edges}
          selectedNodeId={activeId}
          onSelectNode={handleSelectNode}
          mode={viewMode}
        />

        <div className="space-y-6">
          <GraphInfoPanel
            selectedNode={selectedNode}
            neighbors={neighbors}
            graph={graph}
          />

          <section className="rounded-4xl border border-zinc-200 bg-white/95 p-6 shadow-sm shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-950/95 dark:shadow-black/10">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
                  Activity log
                </p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                  Recent workspace interactions for transparent collaboration.
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {activityLog.map((entry, index) => (
                <div
                  key={`${entry.label}-${index}`}
                  className="rounded-3xl bg-zinc-50 p-4 text-sm text-zinc-700 shadow-sm dark:bg-zinc-900 dark:text-zinc-300"
                >
                  <p>{entry.label}</p>
                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-500">
                    {entry.time}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
