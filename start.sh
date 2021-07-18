#!/bin/bash
cd frontend
npm install
cd ..
cd backend
npm install
cd ..

docker-compose down
docker-compose up

