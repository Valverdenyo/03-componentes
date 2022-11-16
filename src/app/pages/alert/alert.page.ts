import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentAlertButtons() {
    const alert = await this.alertCtrl.create({
      header: 'Alert!',
      buttons: [

        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log("click en Ok");
          }

        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            console.log("click en cancelar");
          }
        }

      ],
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Pon tus datos',
      buttons: [
        {
          text: 'OK',
          handler: (data: any) => {
            console.log(data);
          }
        },
          { 
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'rojo',
            handler: () => {
              console.log("Cancelado");
            }
          }],
      inputs: [
        {
          name: 'name',
          placeholder: 'Nombre',
        },
        {
          name: 'nick',
          placeholder: 'Alias (max 8 caracteres)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          name: 'age',
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 100,
        },
        {
          name: 'description',
          type: 'textarea',
          placeholder: 'Habla de ti',
        },
      ],
    });

    await alert.present();
  }
}
