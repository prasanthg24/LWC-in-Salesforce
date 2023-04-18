public with sharing class weatherAppController {

   @AuraEnabled 
   public static string getWeatherDetails(String input){
       //https://api.openweathermap.org/data/2.5/weather?q=London
    String url = 'https://api.openweathermap.org/data/2.5/weather?q=' + input + '&units=metric' + getKey();
    String response = getResponse(url);
       system.debug('url'+url);
       system.debug('response'+response);
    return response;
   }
   public static String getResponse(String strUrl){
    Http h  = new Http();
    HttpRequest req = new HttpRequest();
    HttpResponse res = new HttpResponse();
    req.setMethod('GET');
    req.setEndpoint(strUrl);
    req.setTimeout(120000);
    res = h.send(req);
    String responseBody = res.getBody();
    system.debug('responseBody'+responseBody);
    return responseBody;
   }
   public static String getKey(){
    String key = '95a829aa49a520ba92a7146cee5282b3'; //95a829aa49a520ba92a7146cee5282b3 System.Label.WeatherApiKey
    String output = '&appid=' + key;
    return output;
   }
}