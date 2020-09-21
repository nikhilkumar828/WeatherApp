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
______________________________________________________________________________________

Due to Deliverable of the project i wasn't able to implement cache functionality but for evaluation i wanted to explain the idea how would i implement.

Explanation of cache implementation :

In the node.js application we would use DB chache. Where for each request for weather we would cache the record for 20mins.

When we get request from the user, we would first check for the city id in the DB else get it from API.

Then we would combine the result of DB and API and send back the response.

