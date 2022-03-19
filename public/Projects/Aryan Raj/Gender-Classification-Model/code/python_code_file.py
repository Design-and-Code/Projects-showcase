import pandas as pd
import sklearn
import numpy as np
from sklearn.model_selection import train_test_split,GridSearchCV
from sklearn.ensemble import VotingClassifier,RandomForestClassifier
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import confusion_matrix

data = pd.read_csv("L:\Gender classification\gender_classification_v7.csv")

#encoding data
twogender = {'Female':0, 'Male':1}
data['gender'] = data['gender'].map(twogender)

X = data.drop('gender', axis=1)
y = data['gender']

#splitting data for testing and traing process
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.metrics import accuracy_score, plot_confusion_matrix


X_train, X_val, y_train, y_val = train_test_split(X, y, test_size=0.3)

from sklearn.ensemble import RandomForestClassifier
#randomforestClassifier 
rf = RandomForestClassifier(random_state=0)

rf.fit(X_train, y_train)
rf_pred = rf.predict(X_val)
rf_acc = accuracy_score(y_val, rf_pred)
print('Accuracy of Random Forest is: {:.2f}%'.format(rf_acc*100))

#pickeling model
import pickle
pickle.dump(rf,open("model.pkl","wb"))

model =pickle.load(open("model.pkl","rb"))



