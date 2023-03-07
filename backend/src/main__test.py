import os
import json
from fastapi.testclient import TestClient
import main

client = TestClient(main.app)
path = os.path.dirname(__file__)

def test_result_is_in_range():

    # GIVEN
    f = open(os.path.join(path, './../test_data/input.json'))
    input = json.load(f)
    f.close()

    # WHEN
    actual = client.post(
        "/predict",
        json=input
    ).json()

    # THEN
    assert actual > 10000, f"expected result to be greater than 10,000$, got {actual}"
    assert actual < 600000, f"expected result to be less than 600,000$, got {actual}"