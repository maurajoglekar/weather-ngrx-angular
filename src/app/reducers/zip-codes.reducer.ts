import { Action, on } from '@ngrx/store';
import {ZipcodeActionTypes, ZipcodeActions} from '../actions/zipcode.actions';

export const zipCodesFeatureKey = 'zipCodes';

export interface ZipcodeState {
  zipcodes: Array<string>
}

export const initialState: ZipcodeState = {
  zipcodes: []
};

/* generated like this since we said to generate create
during generate:$ ng generate @ngrx/schematics:reducer ZipCodes
  ...
 Do you want to use the create function? Yes
export const reducer = createReducer(
  initialState,

);

export function zipcodeReducer(state = initialState, action: ZipcodeActions): ZipcodeState {
  had to change the action type to any, not like the class due to error:
  error TS2322: Type '(state: ZipcodeState | undefined, action: ZipcodeActions) => ZipcodeState' is not assignable to type 'ActionReducer<ZipcodeState, Action>'
  https://stackoverflow.com/questions/66224574/angular-ngrx-type-checking-in-app-reducer-ts-errors
*/
export function zipcodeReducer(state = initialState, action: any): ZipcodeState {
  switch (action.type) {
      case ZipcodeActionTypes.AddZipcode:
          return {...state, zipcodes: [...state.zipcodes, action.zipcode]};
      case ZipcodeActionTypes.RemoveZipcode:
          return {...state, zipcodes: state.zipcodes
                  .filter(item => item !== action.zipcode)};
    default:
      return state;
  }
}

