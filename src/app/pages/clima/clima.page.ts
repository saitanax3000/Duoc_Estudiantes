import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../../services/clima.service';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {
  pageTitle = 'Clima';
  isNotLogin = true;
  city = 'Santiago';
  hola: number;
  hasPermission = false;
  latitude: number;
  longitude: number;
  temp: number;
  statusDescription: string;
  weatherLoaded: boolean;
  weatherTemp: any
  todayDate = new Date()
  cityName: any
  weatherIcon: any
  weatherDetails: any
  constructor(private weatherService: ClimaService, public httpClient: HttpClient) {
    navigator.geolocation.getCurrentPosition(
      (geo) => this.geoLocationSuccess(geo),
      (err) => this.geoLocationError(err)
    );
    this.loadData()
  }
  geoLocationSuccess(geo) {
    this.hasPermission = true;
    this.latitude = geo.coords.latitude;
    this.longitude = geo.coords.longitude;
    this.loadWeather();
  }
  loadWeather() {
    this.weatherLoaded = false;
    this.weatherService
      .getCurrentWheater(this.latitude, this.longitude)
      .then((res) => {
        console.log(res);
        this.city = res.name;
        this.temp = res.main.temp;
        this.statusDescription = res.weather[0]?.description.toUpperCase();
        this.weatherLoaded = true;
      });
  }
  geoLocationError(r) {
    this.hasPermission = false;
  }

  loadData() {
    this.httpClient.get(`${API_URL}/weather?q=${this.city}&appid=${API_KEY}`).subscribe(results => {
      //console.log(results);
      this.weatherTemp = results['main']
      this.cityName = results['name']
      //console.log(this.weatherTemp);
      this.weatherDetails = results['weather'][0]
      //console.log(this.weatherDetails);
      this.weatherIcon = `http://openweathermap.org/img/wn/${this.weatherDetails.icon}@4x.png`
    })
  }
  ngOnInit() { }
}