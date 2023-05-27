## Weather-GPT

# Introduction

Weather-GPT is a Weather Application built using the openWeatherMap API, which integrates the functionality
of Chat-GPT, using the Open-AI API, to suggest the best clothes to wear, and things to do, in a given location
based on the weather for that day.

The App allows searching of local weather based on City names for over 200,000 cities, and provides current weather
as well as both an 8 hour, and 5 day forecast. 

## Getting Started

1. Clone this repo to your local device

2. Use 'npm install' to install all dependencies for this project

3. You will need to set up a .ENV file for this project to store your own Open AI, and openWeatherMap API keys.
 Use the environment names REACT_APP_WEATHER_API_KEY and REACT_APP_OPENAI_KEY to store these environment variables
(keys for these APIs can be obtained from https://home.openweathermap.org/ and https://platform.openai.com/overview respectively)

4. Once you have your dependencies installed and environment variables set up, use 'npm start' to run the project locally on your device.

## Dev Notes

# To-Do

1. Refactor Code to make it more readable and maintainable

2. add unit tests and integration tests for the application

3. impliment the Recharts react library to display temperature information in graph format

4. add a map to the dashboard to display the location of the city searched for

5. add a search history to the dashboard to allow users to quickly search for previously searched cities

6. add a favourites list to the dashboard to allow users to save their favourite cities

7. add a settings page to the dashboard to allow users to change the theme of the application and units of measurement


# Completed

1. build the basic dashboard for the application

2. build the basic search functionality for the application

3. build the basic weather display functionality for the application

4. build the basic 8 hour forecast functionality for the application

5. build the basic 5 day forecast functionality for the application

6. impliment the Open AI api and feed information about the current location from the weather api to suggest activities

7. build display components for the Open AI elements to be displayed on the dashboard

# Known Bugs

1. The search function does not work if the user presses enter, and the user must click the search button to make a search

2. Very little error catching for incorrect user input is implemented so far, and the application will crash if the user enters incorrect input

3. The application is not responsive, and will not display correctly on mobile devices

4. The AI responses are sometimes vague or do not take into account the weather. For example, if the weather is cold, the AI may suggest going to the beach.







