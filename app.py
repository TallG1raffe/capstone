import pickle
import pandas as pd
import json
from flask import Flask, request, jsonify

app = Flask(__name__)

# curl -X POST http://localhost:5000/api/predict -H "Content-Type: application/json" -d "[[100,50],[78,67]]"
@app.route('/predict/feedback', methods=['POST'])
def predict():
    with open('model.pkl', 'rb') as file:
        model = pickle.load(file)
    with open('vect.pkl', 'rb') as file:
        vect = pickle.load(file)

    data = request.get_json()
    json_data = json.dumps(data, indent = 4) 
    df_test = pd.json_normalize(json.loads(json_data))
    test = vect.transform(df_test['feedback'].tolist())
    prediction = model.predict(test)
    return jsonify({'sentiment': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)