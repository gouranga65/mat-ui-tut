import { Injectable } from '@angular/core';
import { User, colorEntity } from 'ColorEntity';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor() {}
  getColorList(): colorEntity[] {
    return [
      {
        code: 'c1',
        name: 'red',
      },
      {
        code: 'c2',
        name: 'green',
      },
      {
        code: 'c3',
        name: 'blue',
      },
    ];
  }
  getNameList(): User[] {
    return [
      {
        name: 'Mary',
      },
      {
        name: 'Shelley',
      },
      {
        name: 'sundar',
      },
    ];
  }
}
