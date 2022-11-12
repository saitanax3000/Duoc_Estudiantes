import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage  {
  
  pageTitle='home'
  
  loading: HTMLIonLoadingElement;

  constructor(private loadingCtrl: LoadingController) {}

  cargarLoading(message: string){
    this.presentLoading(message);

    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }

  async presentLoading(message: string){
    this.loading = await this.loadingCtrl.create({
      message,
    });

    await this.loading.present();
  }

  ngOnInit() {
    this.cargarLoading('Bienvenido!!! :)');
    console.log('ngOnInit');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }

  ngOnDestroy(){
    this.cargarLoading('Gracias por ocupar la App!! <3')
    console.log('ngOnDestroy');
  }

}
