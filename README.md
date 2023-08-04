# Rick & Morty Nuxt App

This is a Rick & Morty site project built with Nuxt.js framework with most of the information from [The Rick and Morty API](https://rickandmortyapi.com/)

The tecnologies used in this project are:
  
+ Vue.js with Nuxt
+ Typescript
+ Tailwind CSS
+ Naive UI
+ SQLite
+ Prisma ORM
+ Bcrypt

The app is fully responsive and is composed by the pages:

1. The Home page with a carousel (created with naive ui) showing some random episodes episodes and random characters cards:
  
|Desktop            |  Mobile |
:-------------------------:|:-------------------------:
|<img alt="Desktop Homepage" src="https://github.com/KaduViana1/nuxt-rick-morty/assets/119880481/39b7f50c-0950-4383-90fe-bbbee0402687" width="600px" /> |  <img alt="Mobile Homepage" src="https://github.com/KaduViana1/nuxt-rick-morty/assets/119880481/ec7d0460-2ab0-4d55-b36d-1d788d10d9e3" width="200px" /> | 

2. The characters page with search input to search for specific characters:
 
|Desktop             |  Mobile |
:-------------------------:|:-------------------------:
|<img alt="Desktop Characters Page" src="https://github.com/KaduViana1/nuxt-rick-morty/assets/119880481/1763e615-94cd-45ed-bc31-a80902d8bd7d" width="600px" /> |  <img alt="Mobile Characters page" src="https://github.com/KaduViana1/nuxt-rick-morty/assets/119880481/7386e569-8c50-4546-b556-d9d0f9efba0d" width="200px" /> | 


3. The episodes page:

|Desktop             |  Mobile |
:-------------------------:|:-------------------------:
|<img alt="Desktop Characters Page" src="https://github.com/KaduViana1/nuxt-rick-morty/assets/119880481/ef2810ce-a22e-460a-a1a6-8a1756d376c8" width="600px" /> |  <img alt="Mobile Characters page" src="https://github.com/KaduViana1/nuxt-rick-morty/assets/119880481/b78b1251-a8a0-434f-93a4-90fbcd4524a4" width="200px" /> | 


4. Character page with infos about the character and a list of all episodes that character apears:

|Desktop             |  Mobile |
:-------------------------:|:-------------------------:
|<img alt="Desktop Characters Page" src="https://github.com/KaduViana1/nuxt-rick-morty/assets/119880481/68322c45-dcc6-43be-8b36-fe90f6347151" width="600px" /> |  <img alt="Mobile Characters page" src="https://github.com/KaduViana1/nuxt-rick-morty/assets/119880481/52c7a8f8-65a2-4f1c-937a-d0826432b8f1" width="200px" /> |   
 
5. Episode page with infos about the episode,list of characters that apears in the episode and a comment section where you can make and like comments:

|Desktop             |  Mobile |
:-------------------------:|:-------------------------:
|<img alt="Desktop Characters Page" src="https://github.com/KaduViana1/nuxt-rick-morty/assets/119880481/4df1c063-00e5-41ca-b3bf-89729518a94f" width="600px" /> |  <img alt="Mobile Characters page" src="https://github.com/KaduViana1/nuxt-rick-morty/assets/119880481/be202f1a-9233-4f45-a4f4-52f9161aac24" width="200px" /> |  
 
6. Wallpapers page with mobile and desktop wallpapers:

|Desktop             |  Mobile |
:-------------------------:|:-------------------------:
|<img alt="Desktop Characters Page" src="https://github.com/KaduViana1/nuxt-rick-morty/assets/119880481/321a085e-ec37-4ee5-a68d-ecb5feee496b" width="600px" /> |  <img alt="Mobile Characters page" src="https://github.com/KaduViana1/nuxt-rick-morty/assets/119880481/2ce4e931-de77-4e91-8b54-831220fa85dc" width="200px" /> |  

You must be logged in to make/like comments and access wallpapers page. I used SQLite database with prisma to save user data, comments and likes.

You can pull a Docker image off the project from Docker Hub [here](https://hub.docker.com/r/kaduviana/nuxt-rick-morty)










