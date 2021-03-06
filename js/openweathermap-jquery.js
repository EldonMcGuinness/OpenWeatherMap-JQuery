/*
 *  OpenWeatherMap-JQuery.js - v1.0.0
 *  Jquery Module for using OpenWeatherMap.org API
 *  https://github.com/EldonMcGuinness/OpenWeatherMap-JQuery
 *
 *  Made by Eldon McGuinness
 *  Under MIT License
 */
(function( $ ) {
 
  var settings = {};
  var defer = null;

  // Plugin definition.
  $.OpenWeatherMap = function( options ) {
    settings = options;
    defer = $.Deferred();
    getConditions(settings);
    return defer.promise();
  };

  function getConditions( options ){
    $.getJSON( "api.openweathermap.org/data/2.5/weather", settings )
    .done(function(data){
      $.extend(data, {
        isDay:( data.dt > data.sys.sunrise && data.dt < data.sys.sunset ) ? true : false
      });
      defer.resolve(data);
    })
    .fail(function(data){
      defer.reject(data);
    });
  }

})( jQuery );

