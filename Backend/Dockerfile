FROM python:3.7.7-slim-buster

WORKDIR /app

COPY app/requirements.txt ./

RUN pip install -r requirements.txt

COPY app /app

CMD [ "python", "main.py" ]
