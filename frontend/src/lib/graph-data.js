export const categories = ["All", "Search", "Story", "Knowledge", "Infrastructure"];

export const initialGraph = {
  nodes: [
    {
      id: "query",
      title: "Query Composer",
      category: "Search",
      subtitle: "Build context-aware graph queries",
      description:
        "Compose, preview, and refine search prompts that map user intent into GraphLore’s narrative pipeline.",
      metrics: {
        queries: 38,
        relevance: "94%",
      },
    },
    {
      id: "entity",
      title: "Entity Mapper",
      category: "Knowledge",
      subtitle: "Connect characters, objects, and facts",
      description:
        "Visualize core entities and their relationships to convert raw ideas into structured narrative assets.",
      metrics: {
        nodes: 12,
        edges: 28,
      },
    },
    {
      id: "story",
      title: "Story Flow",
      category: "Story",
      subtitle: "Track narrative progression",
      description:
        "Inspect story beats, branching outcomes, and storyboard-ready sequences for fast creative iteration.",
      metrics: {
        chapters: 5,
        beats: 14,
      },
    },
    {
      id: "background",
      title: "Media Pipeline",
      category: "Infrastructure",
      subtitle: "Generate storyboards & assets",
      description:
        "Manage background tasks, asset generation, and preview media workflows from within GraphLore.",
      metrics: {
        queued: 2,
        completed: 17,
      },
    },
    {
      id: "insight",
      title: "Insight Engine",
      category: "Knowledge",
      subtitle: "Surface narrative opportunities",
      description:
        "Spot emerging themes, plot hooks, and strategic improvements across your project in real time.",
      metrics: {
        signals: 4,
        ideas: 21,
      },
    },
  ],
  edges: [
    { source: "query", target: "entity", label: "extracts" },
    { source: "entity", target: "story", label: "guides" },
    { source: "story", target: "background", label: "supports" },
    { source: "query", target: "insight", label: "enables" },
    { source: "insight", target: "story", label: "improves" },
  ],
};
