# News Webservice with AI powered Political Bias scores


This is a multi-service architecture that includes the folowing components -

    1. NextJs front-end
    2. FastAPI backend
    3. PostgreSQL database
    4. One of the free model endpoints hosted on together.ai

The architecture of this web service looks like this -
![architecture diagram](<misc_assets/Webapp architecture mockup_new.png>)

## What is this?

 - This is a "small" webservice that I built to replace my daily news feeds of google news. I tried ground news but I just found the whole UX extremely noisy and I didn't enjoy reading news there.

 - Also Ground News didn't give me any analysis of bias language used in the articles and I was curious about how much biased language I was reading without realising it.

## Module workings

1. The NextJs frontend interacts with the FastAPI web server to fetch and display data.
2. The FastAPI web server:
   - Pulls data from an external API. Data is of two types - 
     - Article Metadata - title, image, url, snippet etc. Can use this data for displaying initial results on the news page.
     - Article content - article content is scraped using newspaper3k library and rendered into markdown using html-to-markdown library
     - Final Article data -  The markdown content is stored in the PostgreSQL database along with the inference engine's bias analysis.

   - Provides endpoints for the frontend to get article data.
3. The free model endpoint hosted on together.ai is invoked by the FastAPI server to get the bias analysis for the articles.

