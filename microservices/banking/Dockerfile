FROM python:3.10-slim
WORKDIR /app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 5002
ENV FLASK_APP=app.py
CMD ["python3", "app.py"]