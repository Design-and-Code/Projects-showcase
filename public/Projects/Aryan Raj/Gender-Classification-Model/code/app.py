from typing import List
from flask import Flask,request, url_for, redirect, render_template
import pickle
import numpy as np

app = Flask(__name__)

model=pickle.load(open('model.pkl','rb'))

@app.route('/')
def input():
    return render_template("index/home.html")

@app.route('/predict',methods=['POST','GET'])
def result():
    List=[int(x) for x in request.form.values()]
    final=[np.array(List)]
    print(List)
    print(final)
    prediction=model.predict_proba(final)
    output = '{0:.{1}f}'.format(prediction[0][1], 2)

result()
print(output)

if __name__ == '__main__':
    app.run(debug=True)