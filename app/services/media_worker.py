import os
import time 
import requests
from google import genai
from google.genai import types
import urllib


def generate_trailer_storyboard_background(story_payload: dict, output_dir: str) -> str:
    """
    Background worker task called asynchronously by FastAPI.
    Iterates through exactly 3 scene camera prompts and saves the artwork to disk.
    """

    api_key = os.getenv("GOOGLE_API_KEY")
    if not api_key:
        raise ValueError("GOOGLE_API_KEY environment variable is not set.")
    
    client = genai.Client(api_key=api_key)
    
    os.makedirs(output_dir, exist_ok=True)

    specs = story_payload.get("cinema_trailer_specs", {})
    scenes = specs.get("scenes", [])

    print(f"\n[🎬 WORKER INITIATED] Processing {len(scenes)} visual scene assets...")

    for scene in scenes:
        scene_num = scene.get("scene_number")
        prompt_text = scene.get("visual_description")

        if scene_num > 1:
            print("[⏳ THROTTLING] Sleeping for 30 seconds")
            time.sleep(30)
        
        print(f"\n[🎨 SCENE {scene_num}] Generating artwork for scene: {scene_num}")

        try:
            full_prompt = f"High quality cinmatic film frame, 8k resolution, ultra-realistic:{prompt_text}"
            encoded_prompt = urllib.parse.quote(full_prompt)
            unique_seed = int(time.time()) + scene_num
            pollinations_url = f"https://image.pollinations.ai/prompt/{encoded_prompt}?width=1280&height=720&seed={unique_seed}&style=cinematic"

            response = requests.get(pollinations_url, timeout=30)

            if response.status_code == 200:
                image_path = os.path.join(output_dir, f"scene_{scene_num}_{int(time.time())}.jpg")
                with open(image_path, "wb") as f:
                    f.write(response.content)
                print(f"[✅ SCENE {scene_num}] Artwork saved to: {image_path}")
            else:
                print(f"[❌ SCENE {scene_num}] Failed to generate artwork. Status code: {response.status_code}")

        except Exception as e:
            print(f"❌ [WORKER CRASH] Scene #{scene_num} failed inference pass: {str(e)}")
    

    print("[🎉 WORKER COMPLETE] Master multi-scene storyboard render flow complete.\n")
