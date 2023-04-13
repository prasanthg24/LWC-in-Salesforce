import { LightningElement } from 'lwc';
const API_KEY ='95a829aa49a520ba92a7146cee5282b3'
export default class WeatherApp extends LightningElement 
{
    cityName =' '
    searchHandler(event)
    {
        this.cityName = event.target.value
    }
    submitHandler(event)
    {
      event.preventDefault();
      this.fetchData();
    }
    fetchData ()
    {
        console.log(this.cityName);
        //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
        https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    }
}