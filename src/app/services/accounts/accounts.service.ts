import {Injectable} from '@angular/core';
import {GetCreate, GetDetails, GetFavoritesM, GetFavoritesS} from '../../models/account.model';

export interface Account {
  latitude: number;
  longitude: number;
  name: string;
  homepage: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class AccountsService {

}
