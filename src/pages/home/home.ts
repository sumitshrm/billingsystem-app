import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  url:string;

  constructor(private inAppBrowser : InAppBrowser) {}
  openWebpage(url: string){
      const options : InAppBrowserOptions = {
        hardwareback : 'yes',
        location : 'no'
      }
      const windowref = this.inAppBrowser.create('http://billing.suminfotech.com', '_self', options);
      
  }

}
