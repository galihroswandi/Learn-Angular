import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './Components/app.component';
import { HelloComponent } from './Components/Elements/Hello/hello.component';
import { HelloInterpolation } from './Components/Elements/HelloInterpolation/HelloInterpolation.component';
import { HelloBindingComponent } from './Components/Elements/HelloBinding/HelloBinding.component';
import { HelloNgifComponent } from './Components/Elements/HelloNgif/HelloNgif.component';
import { InjectionComponent } from './Components/Elements/DependenciesInjection/Injection.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HelloInterpolation,
    HelloBindingComponent,
    HelloNgifComponent,
    InjectionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
