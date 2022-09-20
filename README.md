
# Aims
Create a demo application that allows users to choose a plan.
 
### Background

> Select either Standard Plan or Premium Plan in UI 
Call API to render plan information 
Add loading screen before calling API 
Handle all errors occur 
Deploy your code in GitHub/GitLab 
Avoid words like "Make It Fun", "MIF” and “code test” in your repository. 
Add instruction on starting your project in ReadMe.md 
Support Latest Chrome, Safari and Firefox browser
 
Using NodeJs and MySQL and run in Docker.




### Getting Started (docker-compose)
```#bash
. start.sh

#or
docker-compose up

```

After start, insert the sample data if the sample.sql cannot insert
#### Insert Standard Plan
```#bash
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"planName": "Standard Plan","features":"{\"General\":true,\"Specialist\":false,\"Physiotherapy\":false}","price": 0
}' \
  http://localhost:3000/plans 
```
#### Insert Premium Plan
```
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"planName": "Premium Plan","features":"{\"General\":true,\"Specialist\":true,\"Physiotherapy\":true}","price": 388
}' \
  http://localhost:3000/plans 
```

### Frontend
http://localhost:8080

### API
Read swagger.yaml
