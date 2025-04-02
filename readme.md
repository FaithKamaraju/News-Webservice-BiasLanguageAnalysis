# News Webservice with AI powered Political Bias scores


This is a multi-service architecture that includes the folowing components -

    1. NextJs front-end
    2. FastAPI backend
    3. PostgreSQL database
    4. An external Aphrodite LLM inferencing engine serving DeepSeek R1 Distill Llama 8B model.

The architecture of this web service looks like this -
![architecture diagram](<misc_assets/Webapp architecture mockup.png>)

## What is this?

 - This is a "small" webservice that I built to replace my daily news feeds of google news. I tried ground news but I just found the whole UX extremely noisy and I didn't enjoy reading news there.

 - Also Ground News didn't give me any analysis of bias language used in the articles and I was curious about how much biased language I was reading without realising it.

 - I took this as a personal project to actually learn docker and docker compose properly this time and then tried to self host the app on my homelab k3s cluster.


## Module workings -- Outdated, will update with new ones soon

1. The NextJs frontend interacts with the FastAPI web server to fetch and display data.
2. The FastAPI web server:
   - Pulls data from an external API. Data is of two types - 
     - Article Metadata - title, image, url, snippet etc. Can use this data for displaying initial results on the news page. When the user clicks the specific article, the full article data is fetched.
     - Article content - article content is scraped using newspaper3k library.
   - Send the new scraped data to the model inference engine for getting biased language analysis back.
   - Updates the PostgreSQL database with the new data.
   - Provides endpoints for the frontend to get article data.
3. The aphrodite inferencing engine is hosted on another node in the same k3s cluster. I have a single instance of aphrodite running to provide Deepseek R1 Distill Llama 8B (AWQ Int 8 Quants) that actually services another one of my self hosted webapps.

