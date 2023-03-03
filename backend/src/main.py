from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from data_types import InputData
from prediction_model import prediction_model

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# REST request: Post data and get prediction result returned
@app.post("/predict")
def predict(*, data: InputData):
    result = prediction_model.predict(data)
    return result[0]

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=80)
