import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {OnboardingComponent} from './onboarding/onboarding.component';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { FishComponent } from './fish/fish.component';

const  appRoutes: Routes = [
  { path: 'onboarding', component: OnboardingComponent }


];
@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    FishComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [OnboardingComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
