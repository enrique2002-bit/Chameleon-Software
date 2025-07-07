from fastapi import FastAPI

app = FastAPI()

@app.post('/analyze')
def analyze(file_path: str):
    return {"summary": f"Analysis for {file_path}"}