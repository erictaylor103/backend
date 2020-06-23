## 3️⃣ Endpoints OVERVIEW


### [Auth Route](https://bw-savor-backend.herokuapp.com)

| Method | Endpoint                | Access Control      | Description                                        |
| ------ | ----------------------- | ------------------- | -------------------------------------------------- |
| POST   | `/auth/register`        | none                | Registers a user & logs them in.                   |
| POST   | `/auth/login`           | none                | Logs the user in and returns a token.              |


### POST '/api/auth/register'
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
```javascript
{
    "message": "user created successfully",
    "user": 7,
    "username": "rafe",
    "firstname": "rafe",
    "lastname": "rafe",
    "email": "rafe@rafe.com",
    "token": "XXXXXXXX"
}
```



### POST '/api/auth/user/login'
---------------------------------

#### Body

| Name                    | Type          | Required | Description                               | Unique |
| ------------------------| ------------- | -------- | ------------------------------------------| ------ |
| username                | string        | Y        | User's username                           | Y      |
| password                | string        | Y        | User's password                           | Y      |


#### Response (login)
```javascript
{
    {
    "message": "Welcome rafe",
    "user": {
        "id": 7,
        "firstname": "rafe",
        "lastname": "rafe",
        "username": "rafe",
        "email": "rafe@rafe.com"
    },
    "token": "XXXXXXXXXX"
   }
}
```



### ADD a recipe - POST 'api/recipes'
---------------------------------
 
 #### Body

| Name                    | Type          | Required | Description                               | Unique |
| ------------------------| ------------- | -------- | ------------------------------------------| ------ |
| recipe_image            | string        | N        | Image for the recipe                      | N      |
| title                   | string        | Y        | Recipe title                              | N      |
| categories              | string        | N        | Recipe category                           | N      |
| prepTime                | string        | N        | Prep time                                 | N      |
| cookTime                | string        | N        | cookTime                                  | N      |
| calories                | string        | N        | calories                                  | N      |
| servings                | string        | N        | servings                                  | N      |
| description             | string        | Y        | cookTime                                  | N      |
| ingredients             | string        | Y        | ingredients                               | N      |
| directions              | string        | Y        | directions                                | N      |
| Notes                   | string        | N        | Notes                                     | N      |
| source                  | string        | N        | source                                    | N      |
| bio                     | string        | N        | bio                                       | N      |
| source_image            | string        | N        | link to image                             | N      |


#### Response (add recipe)
```javascript
{
    "message": "recipe created successfully",
    "recipe": 5
}
```



### EDIT a recipe - PUT 'api/recipes/:id'
---------------------------------
 
 #### Body

| Name                    | Type          | Required | Description                               | Unique |
| ------------------------| ------------- | -------- | ------------------------------------------| ------ |
| recipe_image            | string        | N        | Image for the recipe                      | N      |
| title                   | string        | Y        | Recipe title                              | N      |
| categories              | string        | N        | Recipe category                           | N      |
| prepTime                | string        | N        | Prep time                                 | N      |
| cookTime                | string        | N        | cookTime                                  | N      |
| calories                | string        | N        | calories                                  | N      |
| servings                | string        | N        | servings                                  | N      |
| description             | string        | Y        | cookTime                                  | N      |
| ingredients             | string        | Y        | ingredients                               | N      |
| directions              | string        | Y        | directions                                | N      |
| Notes                   | string        | N        | Notes                                     | N      |
| source                  | string        | N        | source                                    | N      |
| bio                     | string        | N        | bio                                       | N      |
| source_image            | string        | N        | link to image                             | N      |


#### Response (edit)
```javascript
{
    "message": "recipe has been updated",
    "data": {
        "id": 5,
        "recipe_image": null,
        "title": "SUSHI STICKS BABY",
        "categories": null,
        "prepTime": null,
        "cookTime": null,
        "calories": null,
        "servings": null,
        "description": "chicken nuggets are not only for kids",
        "ingredients": "chicken breasts, barbecue sauce, breading",
        "directions": "wash the chicken breasts",
        "Notes": null,
        "source": null,
        "bio": null,
        "source_image": null,
        "user_id": 7
    }
}
```



### DELETE a recipe - 'api/recipes/:id'
---------------------------------
 
 #### Body

| Name                    | Type          | Required | Description                               | Unique |
| ------------------------| ------------- | -------- | ------------------------------------------| ------ |
| recipe_image            | string        | N        | Image for the recipe                      | N      |
| title                   | string        | Y        | Recipe title                              | N      |
| categories              | string        | N        | Recipe category                           | N      |
| prepTime                | string        | N        | Prep time                                 | N      |
| cookTime                | string        | N        | cookTime                                  | N      |
| calories                | string        | N        | calories                                  | N      |
| servings                | string        | N        | servings                                  | N      |
| description             | string        | Y        | cookTime                                  | N      |
| ingredients             | string        | Y        | ingredients                               | N      |
| directions              | string        | Y        | directions                                | N      |
| Notes                   | string        | N        | Notes                                     | N      |
| source                  | string        | N        | source                                    | N      |
| bio                     | string        | N        | bio                                       | N      |
| source_image            | string        | N        | link to image                             | N      |


#### Response (delete)
```javascript
{
    "message": "recipe has been deleted",
    "data": 1
}
```


