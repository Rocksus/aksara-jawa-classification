import sys
from keras.models import load_model
import logging
import numpy as np

this = sys.modules[__name__]
model_path = 'model.h5'

this.classifier = None

def init():
    if this.classifier is None:
        logging.info("Initializing keras model..")
        this.classifier = load_model(model_path)
        logging.info("Successfully initialized keras model")
        this.classifier.summary()
    else:
        raise RuntimeError('Classifier already initialized.')

def classify(input):
    if this.classifier is None:
        raise RuntimeError('Classifier not yet initialized.')
    else:
        prediction = this.classifier.predict(input)
        return {'classID': np.argmax(prediction), 'confidence':prediction[0][np.argmax(prediction)]}