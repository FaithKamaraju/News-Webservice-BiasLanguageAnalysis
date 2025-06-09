# from datetime import datetime
# import aiohttp
from aiohttp.web import HTTPError
from together import AsyncTogether
from pydantic import TypeAdapter
import os, asyncio

# from core.schemas import InferenceResultsRespSchema



async def async_together_inference(uuids : list[str],article_contents: list[str]):
    inference_results = []
    async_client = AsyncTogether(api_key=os.environ.get("TOGETHER_API_KEY"))
    tasks = [
        async_client.chat.completions.create(
            model="meta-llama/Llama-3.3-70B-Instruct-Turbo-Free",
            messages=[{
                "role": "system",
                "content": "The following is a news article in markdown form. Analyze the content and provide atleast 4 bullet points about the biased language found in the article. Format the output as a markdown list. Do not include any other information in the response.",
            },
            {
                "role": "user",
                "content": article,
            },],
        )
        for article in article_contents
    ]
    responses = await asyncio.gather(*tasks)

    for i in range(len(responses)):
        inference_results.append({"uuid":uuids[i],"bias_analysis":responses[i].choices[0].message.content})
    
    return inference_results

# def infer_together(article_content : str) -> str:
#     bias = client.chat.completions.create(
#         messages=[
#             {
#                 "role": "system",
#                 "content": "The following is a news article in markdown form. Analyze the content and provide atleast 4 bullet points about the biased language found in the article. Format the output as a markdown list. Do not include any other information in the response.",
#             },
#             {
#                 "role": "user",
#                 "content": article_content,
#             },
#         ],
#         model="meta-llama/Llama-3.3-70B-Instruct-Turbo-Free",
#     )

#     output = bias.choices[0].message.content
#     return output

# async def infer_batch(uuids : list[str], scrapped_contents : list[str]):
#     async with aiohttp.ClientSession(trust_env=True) as session:
#         async with session.get(f"http://inference_endpoint/inference/batch",json={"uuid":uuids,"scrapped_content":scrapped_contents}) as resp:
#             try:
#                 resp.raise_for_status()
#                 inference_results = await resp.json()
#                 InfRes_list_adapter = TypeAdapter(list[InferenceResultsRespSchema])
#                 inference_results_valid = InfRes_list_adapter.validate_python(inference_results)
#                 return inference_results_valid
#             except HTTPError as e:
#                 raise HTTPError(detail="Inference results could not be fetched. Please try again later.")
            
            
# async def infer(uuid : str, scrapped_content : str):
#     async with aiohttp.ClientSession(trust_env=True) as session:
#         async with session.get(f"http://inference_endpoint/inference/single",json={"uuid":uuid,"scrapped_content":scrapped_content}) as resp:
#             try:
#                 resp.raise_for_status()
#                 inference_result = await resp.json()
#                 return inference_result
#             except HTTPError as e:
#                 raise HTTPError(detail="Inference result could not be fetched. Please try again later.")