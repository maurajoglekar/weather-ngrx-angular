import { Component } from '@angular/core';
import {WeatherService} from '../weather.service';
import {RemoveZipcode} from '../actions/zipcode.actions';

import {Router} from "@angular/router";
import {State} from '../reducers';
import {Store} from '@ngrx/store';


@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

    zipcodes: Array<string> = [];

    currentConditions: Map<string, any> = new Map();;
    
    constructor(public weatherService : WeatherService,
                private router : Router,
                private store: Store<State>) {
        store.select(state => state.zipcodes)    //gets the zipcodes from the state which gives an observable
            .subscribe(zips => this.zipcodes = zips.zipcodes);

        store.select(state => state.currentConditions)
            .subscribe(conditions => this.currentConditions = conditions.currentConditions);

    }

    showForecast(zipcode : string) {
        this.router.navigate(['/forecast', zipcode]);
    }

    getConditions(zip: string) {
      return this.currentConditions.get(zip);
  }

  removeZip(zip: string) {
      this.store.dispatch(new RemoveZipcode(zip));
  }
}
