from fastapi import FastAPI
from pydantic import BaseModel
import openai
import os

app = FastAPI()

@app.post('/analyze')
def analyze(file_path: str):
    return {"summary": f"Analysis for {file_path}"}


openai.api_key = os.getenv("OPENAI_API_KEY")


class GPTQuery(BaseModel):
    prompt: str


@app.post('/api/gpt/query')
async def gpt_query(query: GPTQuery):
    completion = await openai.ChatCompletion.acreate(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": query.prompt}]
    )
    return {"response": completion.choices[0].message.content}