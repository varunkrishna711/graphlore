const DEFAULT_API_BASE_URL =
  process.env.NEXT_PUBLIC_GRAPHLORE_API_URL || "http://127.0.0.1:8000";

function getApiBaseUrl() {
  return DEFAULT_API_BASE_URL.replace(/\/$/, "");
}

export async function submitStoryRequest({ rawText, clientId, token }) {
  const response = await fetch(`${getApiBaseUrl()}/api/v1/structure`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-GraphLore-Token": token,
    },
    body: JSON.stringify({
      raw_text: rawText,
      client_id: clientId,
    }),
  });

  const payload = await response.json().catch(() => null);

  if (!response.ok) {
    const message = payload?.detail || "The backend rejected the request.";
    throw new Error(message);
  }

  return payload;
}

export async function fetchStoryboards(limit = null) {
  const url = new URL(`${getApiBaseUrl()}/api/v1/storyboards`);
  if (limit !== null && limit !== undefined && limit > 0) {
    url.searchParams.set("limit", String(limit));
  }

  const response = await fetch(url.toString());
  const payload = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(payload?.detail || "Unable to load storyboard images.");
  }

  return {
    images: (payload?.images || []).map((image) => ({
      ...image,
      url: image.url.startsWith("http")
        ? image.url
        : `${getApiBaseUrl()}${image.url}`,
    })),
  };
}
