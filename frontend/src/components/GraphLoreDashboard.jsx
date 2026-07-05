"use client";

import { useState } from "react";
import DashboardHeader from "@/components/DashboardHeader";
import StoryComposer from "@/components/StoryComposer";
import StoryInsightPanel from "@/components/StoryInsightPanel";
import StoryboardGallery from "@/components/StoryboardGallery";
import { fetchStoryboards, submitStoryRequest } from "@/lib/api";

const initialFormValues = {
  rawText: "",
  clientId: "demo-client",
  token: "",
};

export default function GraphLoreDashboard() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [story, setStory] = useState(null);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [statusMessage, setStatusMessage] = useState(
    "Ready to send a new narrative idea to the backend.",
  );

  const handleFieldChange = (field, value) => {
    setFormValues((current) => ({ ...current, [field]: value }));
  };

  const pollForStoryboards = async (attempt = 0) => {
    if (attempt >= 4) {
      return;
    }

    try {
      const payload = await fetchStoryboards();
      const nextImages = payload.images || [];
      setImages(nextImages);
      if (nextImages.length > 0) {
        return;
      }
    } catch {
      // Ignore polling errors and retry briefly.
    }

    await new Promise((resolve) => setTimeout(resolve, 2500));
    await pollForStoryboards(attempt + 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setStory(null);
    setImages([]);
    setIsLoading(true);
    setStatusMessage("Submitting your narrative request to GraphLore...");

    try {
      const result = await submitStoryRequest({
        rawText: formValues.rawText,
        clientId: formValues.clientId,
        token: formValues.token,
      });

      setStory(result);
      setStatusMessage(
        "Story structure received. Pulling storyboard frames...",
      );
      await pollForStoryboards();
      setStatusMessage("The story and its visual scenes are ready to review.");
    } catch (err) {
      setError(err.message || "The request could not be completed.");
      setStatusMessage("The request could not be completed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col gap-8 bg-zinc-50 px-6 py-10 text-zinc-950 dark:bg-black dark:text-zinc-100 sm:px-10 lg:px-14">
      <DashboardHeader />

      <StoryComposer
        formValues={formValues}
        onFieldChange={handleFieldChange}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
        status={statusMessage}
      />

      <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
        <StoryInsightPanel story={story} />
        <StoryboardGallery
          images={images}
          isLoading={isLoading && images.length === 0}
        />
      </div>
    </div>
  );
}
