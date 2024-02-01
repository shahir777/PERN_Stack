# PERN STACK

**Date** : 29-01-2024
Pulled react with vite using command - npm create vite@latest
Project name - frontend
Frame work - react
Variant - Typescript

Initialized git by giving command 'git init' in vs terminal
then committed,so 'PERN_Stack' repository have been added to my github account

Created docker file for front end. 

**Date** : 30-01-2024

-Created `docker-compose.yml` file

    Added services 'db' and 'pgadmin4' in `docker-compose.yml` file
        - PG Admin login email - admin@gmail.com
        - PG Admin login password - root
    Created server in PGAdmin
        - Registered server in pgsql by giving localhost:8080 in chrome(server name:PERNStack,host name:db)
    Added service 'frontend' in `docker-compose.yml` file

-Created file 'Dockerfile' inside frontend folder
 then added necessary commands inside 'Dockerfile'
 now am able to run the app by giving npm run dev

-Tailwind css installation

-Added -dockerignore file

**Date** : 01-02-2024

    -Added service 'backend' in 'docker-compose.yml' file
    -then created a project named 'backend' using vite,which is seperate from frontend
    -then copy pasted 'Dockerfile' and '.dockerignore' from frontend to backend
    -then edited some things in 'Dockerfile' of backend
    -then set up the installation of remult in backend   


**Reference** : https://www.youtube.com/watch?v=bu6IURMFZwQ&t=365s&ab_channel=Abstractprogrammer
```