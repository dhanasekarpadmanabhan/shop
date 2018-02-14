import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FIREBASE_CONFIG } from './credentials';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule } from 'angularfire2/database';
import {ShoppigListService} from '../services/shopping-list/shopping-list.service';
import {ToastService} from '../services/toast/toast.service'
import {LoginPage} from '../pages/login/login';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { MainPage} from '../pages/main/main';
import {InfoPage } from '../pages/info/info';
import {FilePage} from '../pages/file/file';
import {BuyPage} from '../pages/buy/buy';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MainPage,
    InfoPage,
    BuyPage,
    FilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MainPage,
    InfoPage,
    BuyPage,
    FilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ShoppigListService,
ToastService
  ]
})
export class AppModule {}
