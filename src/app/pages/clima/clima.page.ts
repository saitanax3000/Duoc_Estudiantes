import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'
import { Component} from '@angular/core';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage {
  pageTitle = 'Clima'
  weatherTemp:any
  todayDate = new Date()
  cityName: any
  weatherIcon: any
  weatherDetails:any
  constructor(public httpClient:HttpClient) { 
    this.loadData()
}
  loadData(){
    this.httpClient.get(`${API_URL}/weather?q=${"Santiago"}&appid=${API_KEY}`).subscribe(results=>{
      //console.log(results);
      this.weatherTemp = results['main']
      this.cityName = results['name']
      //console.log(this.weatherTemp);
      this.weatherDetails = results['weather'][0]
      //console.log(this.weatherDetails);
      this.weatherIcon = `http://openweathermap.org/img/wn/${this.weatherDetails.icon}@4x.png`
    })
  }
}
