import {Injectable} from '@angular/core';
import {Preferences} from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }


  async saveData(key: string, data: any) {
    console.log(data);
    await Preferences.set({
      key,
      value: JSON.stringify(data),
    });
  }

   async getData(key: string) {
    const {value} = await Preferences.get({
      key
    });
    if(value == null){
        return 
    }
    return JSON.parse(value);
  }
}