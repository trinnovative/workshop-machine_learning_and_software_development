from pydantic import BaseModel
import numpy as np

class InputData(BaseModel):
    MedInc: float
    Latitude: float
    Longitude: float

    def convert_to_feature_vector(self):
        return np.array([self.MedInc, self.Latitude, self.Longitude]).reshape(1,-1)