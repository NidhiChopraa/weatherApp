import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Weather } from './weather';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'weather-app';
  location: string;
  currentWeather: Weather;
  res: any;
  futureWeather: Weather[] = [];
  days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  constructor(private data: DataService) {

  }
  getCurrentDate(): string {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
      'November', 'December'];
    let d = new Date();
    return this.days[d.getDay()] + ", " + months[d.getMonth()] + " " + d.getDate() + "th";
  }



  getData() {
    console.log(this.location);
    this.data.getFact(this.location).subscribe((d) => {
      this.res = d;
      this.currentWeather = new Weather(
        this.res.location.name + ", " + this.res.location.country,
        this.res.current.temp_c,
        null,
        this.res.current.condition.text,
        this.res.current.condition.icon,
        this.res.current.humidity,
        this.res.current.percip_mm,
        this.res.current.wind_mph + "mph",
        this.getCurrentDate()
      )

      let i = 0;
      this.futureWeather = [];
      this.res.forecast.forecastday.forEach(element => {
        let icon = element.day.condition.icon;
        let cond = element.day.condition.text;
        let humid = element.day.avghumidity;
        let maxTemp = element.day.maxtemp_c;
        let minTemp = element.day.mintemp_c;
        let date = (i == 0) ? "Today" : this.days[(new Date().getDay() + i) % 7];
        this.futureWeather.push(new Weather(null, maxTemp, minTemp, cond,
          icon, humid, null, null, date));
        i++;
      }
      )
      console.log(this.futureWeather);  
    })
    
      
  }

}



