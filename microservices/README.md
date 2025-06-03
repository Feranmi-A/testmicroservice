# Microservice Portfolio Monorepo

This repository contains four main components:

1. **Student Portfolio (Root Gateway)**
   - Static React front-end under `portfolio/public`.

2. **Module 5 Full-Stack Service**
   - Node.js/Express under `module5-service`.

3. **Transaction Processing Service**
   - Python Flask under `transaction-service`.

4. **Banking App Service**
   - Python Flask under `banking-service`.

## Prerequisites
- Docker & Docker Compose installed.

## Setup
1. Clone this repository.
2. Create a `.env` file in the root of `microservices/` with:
   ```
   MONGO_URI=mongodb://mongo:27017/bank_app
   SECRET_KEY=your_secret_key
   ```
3. From the `compose/` directory, run:
   ```
   docker-compose --env-file ../microservices/.env up --build -d
   ```

## Accessing Services
- **Portfolio:** http://localhost:8080/
- **Module 5 Service:** http://localhost:3000/module5/api/v1/info
- **Transaction Service:** http://localhost:5001/transactions/status
- **Banking App:** http://localhost:5002/banking/register
