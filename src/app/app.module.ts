import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,  IonicModule.forRoot({
      mode: 'ios' // Set the default mode to iOS for all components
    }), AppRoutingModule, HttpClientModule, MenuComponent, BrowserModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
