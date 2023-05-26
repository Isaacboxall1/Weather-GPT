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

1. impliment the Open AI api and feed information about the current location from the weather api to suggest activities

2. build display components for the Open AI elements to be displayed on the dashboard

3. add unit tests and integration tests for the application

4. impliment the Recharts react library to display temperature information in graph format

5. add a map to the dashboard to display the location of the city searched for

6. add a search history to the dashboard to allow users to quickly search for previously searched cities

7. add a favourites list to the dashboard to allow users to save their favourite cities

8. add a settings page to the dashboard to allow users to change the theme of the application and units of measurement

# Completed

1. build the basic dashboard for the application

2. build the basic search functionality for the application

3. build the basic weather display functionality for the application

4. build the basic 8 hour forecast functionality for the application

5. build the basic 5 day forecast functionality for the application

# Known Bugs

1. The search bar does not clear after a search is made, and the user must manually clear the search bar to make another search

2. The search function does not work if the user presses enter, and the user must click the search button to make a search

3. Very little error catching for incorrect user input is implemented, and the application will crash if the user enters incorrect input

4. The application is not responsive, and will not display correctly on mobile devices







