import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InteriorDataService {
    public url: string;

    constructor(private _http: Http) {
        this.url = 'assets/interior.json';
    }
    getInterior() {
        return this._http.get(this.url).map( res => res.json() );
    }
}
