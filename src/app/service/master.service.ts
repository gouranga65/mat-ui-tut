import { Injectable } from '@angular/core';
import { colorEntity } from 'ColorEntity';

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
}
