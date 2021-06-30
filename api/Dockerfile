FROM python:3.6-slim

ENV PYTHONUNBUFFERED 1

RUN mkdir /clientes-api

WORKDIR /clientes-api

ADD . /clientes-api/

RUN pip install -r requirements.txt