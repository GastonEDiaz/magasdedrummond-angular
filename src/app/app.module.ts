import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//Components
import { AppComponent } from './app.component';
import { TopBarComponent } from './topbar/topbar.component';
import { NavBarComponent } from './navbar/navbar.component';
import { MainSliderComponent } from './mainslider/mainslider.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ExteriorComponent } from './galeria/exterior/exterior.component';
import { InteriorComponent } from './galeria/interior/interior.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MapaComponent } from './mapa/mapa.component';
import { FooterComponent } from './footer/footer.component';

//Services
import { ExteriorDataService } from './services/exterior-data.service';
import { InteriorDataService } from './services/interior-data.service';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavBarComponent,
    MainSliderComponent,
    NosotrosComponent,
    ServiciosComponent,
    GaleriaComponent,
    ExteriorComponent,
    InteriorComponent,
    ContactoComponent,
    MapaComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ExteriorDataService, InteriorDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
