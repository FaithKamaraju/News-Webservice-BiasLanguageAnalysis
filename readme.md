# News Webservice with LLM powered Bias Analysis


The architecture includes the folowing components -

    1. NextJs front-end
    2. FastAPI backend
    3. PostgreSQL database
    4. One of the free model endpoints hosted on together.ai

Architecture Diagram -
![architecture diagram](<misc_assets/Webapp architecture mockup_new.png>)

## What is this?

 - This is a "small" webservice that I built to replace my daily news feed of google news. I tried ground news but I just found the whole UX extremely noisy which made me not enjoy reading news there.

 - Moreover, Ground News didn't have any analysis of bias language used in the articles and I was curious if LLM's could provide some insights into the bias of the articles.
  - I understand that this is a very subjective topic and the bias analysis provided by the LLM's is not perfect, but I think it is a good starting point to understand how LLM's can be used to analyze text data.

## Module workings

1. The NextJs frontend interacts with the FastAPI web server to fetch and display data.
2. The FastAPI web server:
   - Pulls data from an external API. Data is of two types - 
     - Article Metadata - title, image, url, snippet etc. Can use this data for displaying initial results on the news page.
     - Article content - article content is scraped using newspaper3k library and rendered into markdown using html-to-markdown library
     - Final Article data -  The markdown content is stored in the PostgreSQL database along with the inference engine's bias analysis.

   - Provides endpoints for the frontend to get article data.
3. The free model endpoint hosted on together.ai is invoked by the FastAPI server to get the bias analysis for the articles.

