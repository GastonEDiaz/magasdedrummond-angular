import { Component, HostBinding } from '@angular/core';
import { InteriorDataService } from '../../services/interior-data.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'interior-tag',
  templateUrl: './interior.component.html',
  providers: [InteriorDataService]
})
export class InteriorComponent {
  public interiores;
  constructor(private _peticionesServices: InteriorDataService) { }
  ngOnInit() {
    this._peticionesServices.getInterior().subscribe(
      result => {
        this.interiores = result;
        if (!this.interiores) {
          console.log('error en el servidor');
        }
      }, error => {
        let errorMessage = <any>error;
        console.log(errorMessage);
      });
  }
}

