import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async presentToastWithOptions(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastCtrl.create({
      header: 'Toast Header',
      message: 'Hello World!',
      duration: 1500,
      position: position,
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite Clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        } 
      ]
    });

    await toast.present();
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastCtrl.create({
      message: 'Hello World!',
      duration: 1500,
      position: position
    });

    await toast.present();
  }


}
