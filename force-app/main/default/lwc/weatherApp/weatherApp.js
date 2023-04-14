import { LightningElement } from 'lwc';
const API_KEY ='95a829aa49a520ba92a7146cee5282b3'
export default class WeatherApp extends LightningElement 
{
    cityName =' '
    loadingText = ' '
    isError=false

 get loadingClasses(){
    return this.isError ? 'error-msg':'success-msg'
  }


    searchHandler(event)
    {
        this.cityName = event.target.value
    }

    submitHandler(event)
    {
      event.preventDefault();
      this.fetchData();
      this.loadingClasses()
    }

      fetchData ()
    {
        this.isError=false
        this.loadingText ="Fetching weather data..."
        console.log(this.cityName);
       

        const URL =`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&units=metric&appid=${API_KEY}`
        
        fetch(URL)
        .then(res => res.json())
        .then(result => {
            console.log(JSON.stringify(result));
            this.weatherDetails(result)
        })
        .catch(error => {
            this.isError=true
            console.error(error);
            console.error("something went wrong");
              this.loadingText ="something went wrong..."
        })

           

    }

     weatherDetails(info)
    {
    if(info.cod === "404")
    {
      this.isError = true 
      this.loadingText = `${this.cityName} isn't a valid city name`
    } else 
    {
      this.loadingText = ''
    }
    }

 

}