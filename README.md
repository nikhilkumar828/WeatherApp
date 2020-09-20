# WeatherApp
This application is to get the weather details for the cities selected.

- At a time user can select upto 10 cities as openWeather supports only 10 calls at a time using the free API version.

- Currently using local file for serving city names as not enough requests can be done using free API version.
______________________________________________________________________________________

Technologies Used:
Angular Framework
Node
Express
HTML
CSS
JS
______________________________________________________________________________________
I have already build the angular code and it is present in the dist folder, so to run the appication we can simply follow 2 steps:

1 - npm install
2 - npm start
______________________________________________________________________________________

Improvements that can be done :
UI - of selecting cities mainly the dropdown and showing the selected cities
UI - providing filter and sort functionality for the results shown
UI - Can use store for long term maintainance
UI - Can show Metric in other formats(eg. Celcius can be shown in other formats user wants)
UI/API - Can integrate user auth and provide the information of the data he has seen recently instead of selecting the cities again
API - Using MongoDB for cache
