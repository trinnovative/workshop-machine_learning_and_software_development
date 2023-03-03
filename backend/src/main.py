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

# TODO Implement a REST endpoint. Receive input data and return the prediction result. 
# You can use fastapi for implementation. Find more information here: https://fastapi.tiangolo.com/tutorial/body/.  







if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=80)
