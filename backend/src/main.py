import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from data_types import InputData
from prediction_model import prediction_model

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


# REST endpoint
@app.post("/predict")
def predict(*, data: InputData):
    # TODO Add implementation. Do prediction and return result.


    return 


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=80)
