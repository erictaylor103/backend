## 3️⃣ Endpoints OVERVIEW


### [Auth Route](https://bw-savor-backend.herokuapp.com)

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| POST   | `/auth/register`        | none                | Registers a user & logs them in.                   |
| POST   | `/auth/login`           | none                | Logs the user in and returns a token.              |


### POST '/auth/register'
---------------------------------
 
 #### Body

| Name                    | Type          | Required | Description                               | Unique |
| ------------------------| ------------- | -------- | ------------------------------------------| ------ |
| firstname               | string        | Y        | User's first name                         | N      |
| lastname                | string        | Y        | User's first name                         | N      |
| email                   | string        | Y        | User's email address                      | Y      |
| username                | string        | Y        | User's prefered username                  | Y      |
| password                | string        | N        | User's password                           | Y      |


#### Register Response

{
    "message": "user created successfully",
    "user": 7,
    "username": "rafe",
    "firstname": "rafe",
    "lastname": "rafe",
    "email": "rafe@rafe.com",
    "token": "XXXXXXXX"
}


### POST 'auth/user/login'
---------------------------------

#### Body

| Name                    | Type          | Required | Description                               | Unique |
| ------------------------| ------------- | -------- | ------------------------------------------| ------ |
| username                | string        | Y        | User's username                           | Y      |
| password                | string        | Y        | User's password                           | N      |
