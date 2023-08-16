import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { User } from 'ColorEntity';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-autocomplete-two',
  templateUrl: './autocomplete-two.component.html',
  styleUrls: ['./autocomplete-two.component.css']
})
export class AutocompleteTwoComponent  implements OnInit {
  myControl = new FormControl<string | User>('');
  options!:User[];
  filteredOptions: Observable<User[]> | undefined;
  constructor(private _service:MasterService){
    this.options=this._service.getNameList();
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}