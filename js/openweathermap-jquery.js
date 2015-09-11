//OpenWeatherMap-JQuery
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
    $.getJSON( "http://api.openweathermap.org/data/2.5/weather", settings )
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

