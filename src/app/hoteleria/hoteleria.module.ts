import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HoteleriaRoutingModule } from './hoteleria-routing.module';
import { DetalleComponent } from './pages/detalle/detalle.component';



@NgModule({
  declarations: [
    HomeComponent,
    DetalleComponent
  ],
  imports: [
    HoteleriaRoutingModule,
    CommonModule
  ]
})
export class HoteleriaModule { }
