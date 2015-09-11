# OpenWeatherMap-JQuery
A Lightweight JQuery plugin to get current weather conditions and do stuff with that data.

###Include JQuery
As the title of this project suggests, you will need JQuery inlcuded into your page **before**
you add and use this code. The best way to do this is to include jquery and then include this
project's file.
```html
<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="/js/openweathermap-jquery.js"></script>
```

###Getting the data
This plugin provides an OpenWeatherMap JSON reply for the given city.
SEE: http://openweathermap.org/current#current_JSON

When trying to get the needed data just specify a valid query, valid formats are outlined below:

* **To Query a City by Name**
  ```json
  { "q":"Orlando,FL" }
  ```

* **To Query a City by ID**
  ```json
  { "id":4167147 }
  ```

* **To Query a City by Long/Lat**
  ```json
  { "lat":28.4158, "lon":-81.2989 }
  ```

* **To Query a City by Zipcode**
  ```json
  { "zip":"32802,us"}
  ```

###Callbacks:
This plugin implements a promise object, this allows for the chaining of done, fail, and always
commands to this plugin.


###NIGHT or DAY
The best way to check this, outside of server side scripting that calculates the desired current time,
is to use the unix timestamps returned from openweathermap.org. To this end, I have extended the JSON
object returned by openweathermap.org to make this calculation for you. [Example](#usage).
```json
data.isDay
```


###Where are the icons!?
Check this repo for a great css/font based way to get icons for your calls.
http://websygen.github.io/owfont/

###Usage:
This example makes use of the icon set provided by http://websygen.github.io/owfont/, it also takes
night and day in consideration based on the data provided by OpenWeatherMap.org

```javascript
$.OpenWeatherMap({
  "id":"4167147",
  "units":"imperial"
}).done(function(data) {
  var time = ( data.isDay ) ? "-d" : "-n";
  $("#weather").attr("title", data.weather[0].main);
  $("#weather span").html(Math.round(data.main.temp)+"&deg;");
  $("#weather i").addClass("owf-"+data.weather[0].id+time);
});
```
###Limitations:
Keeping in mind HTTPS is only available if you subscribe to the OpenWeatherMap.org Pro account, if you are running a site on HTTPS you will not be able to use the service.
