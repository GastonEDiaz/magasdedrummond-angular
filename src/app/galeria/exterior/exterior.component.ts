import { Component } from '@angular/core';
import { ExteriorDataService } from '../../services/exterior-data.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'exterior-tag',
  templateUrl: './exterior.component.html'
})
export class ExteriorComponent {
  public exteriores;
  constructor(private _peticionesServices: ExteriorDataService) { }
  ngOnInit() {
    this._peticionesServices.getExterior().subscribe(
      result => {
        this.exteriores = result;
        if (!this.exteriores) {
          console.log('error en el servidor');
        }
      }, error => {
        let errorMessage = <any>error;
        console.log(errorMessage);
      });
  }
}
