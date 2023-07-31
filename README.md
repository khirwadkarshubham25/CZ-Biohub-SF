# CZ-Biohub-SF

## Tech Stack Used

### Backend
Python 3.8

Django Framework

PostgreSQL

### Frontend
Reactjs

## Setup steps

### Backend Setup Steps

1. Open terminal/Command Prompt and navigate to backend/fibonacci_series folder
2. Run following command to install requirements required for backend
    
        pip install -r requirements.txt
3. Go to backend/fibonacci_series/fibonacci_series/settings.py file and change database connection details.
4. Run following command to migrate database

        python manage.py makemigrations
        python manage.py migrate
5. Run following command to start backend server

        python manage.py runserver

### Frontend Setup Steps

1. Open terminal/Command Prompt and navigate to frontend/fibonacci_series folder
2. Run following command to install frontend packages

        npm install
3. Run following command to start application

        npm start
	
## NOTES:
1. I have 3 years of experience designing backend using Python Django Framework. I have used the skills I gained during that time to design backend application
2. To design frontend I have used ChatGPT, StackOverflow and other resources.
3. To further reduce computation time for series generation, another logic that we can use is to use a series that has already been generated and stored in the database nearest to the input number given.