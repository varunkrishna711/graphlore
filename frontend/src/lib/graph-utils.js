export function filterGraph(graph, query, category) {
  const normalizedQuery = query.trim().toLowerCase();
  const filteredNodes = graph.nodes.filter((node) => {
    const matchesCategory = category === "All" || node.category === category;
    const matchesQuery =
      normalizedQuery.length === 0 ||
      node.title.toLowerCase().includes(normalizedQuery) ||
      node.subtitle.toLowerCase().includes(normalizedQuery) ||
      node.description.toLowerCase().includes(normalizedQuery);

    return matchesCategory && matchesQuery;
  });

  const validIds = new Set(filteredNodes.map((node) => node.id));
  const filteredEdges = graph.edges.filter(
    (edge) => validIds.has(edge.source) && validIds.has(edge.target)
  );

  return {
    nodes: filteredNodes,
    edges: filteredEdges,
  };
}

export function getNeighbors(graph, nodeId) {
  return graph.edges.filter(
    (edge) => edge.source === nodeId || edge.target === nodeId
  );
}

export function resolveNode(graph, nodeId) {
  return graph.nodes.find((node) => node.id === nodeId) || null;
}
