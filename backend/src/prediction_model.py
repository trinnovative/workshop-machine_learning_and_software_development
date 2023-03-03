import os
import joblib
from data_types import InputData


class PredictionModel:
    
    def __init__(self): # The __init__ function is called every time an object is created from a class
        # Load model.joblib and store it in class variable 'model'
        path_to_model = os.path.join(os.path.dirname(__file__), '../artifacts/model.joblib')
        self.model = joblib.load(path_to_model)

    def predict(self, data: InputData):
        # Convert InputData into feature vector and make prediction
        feature_vector = data.convert_to_feature_vector()
        prediction = self.model.predict(feature_vector)
        return prediction


# Create instance of class PredictionModel    
prediction_model = PredictionModel()