import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { NgFor, AsyncPipe } from '@angular/common';
import { MasterService } from 'src/app/service/master.service';
import { colorEntity } from 'ColorEntity';
@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
})
export class AutocompleteComponent implements OnInit {
  colorList!: colorEntity[];
  constructor(private _service: MasterService) {
    this.colorList = this._service.getColorList();
  }
  myControl = new FormControl('');
  // options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<colorEntity[]> | undefined;
  // filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._Listfilter(value || ''))
    );
    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map((value) => this._filter(value || ''))
    // );
  }

  private _Listfilter(value: string): colorEntity[] {
    const filterValue = value.toLowerCase();

    return this.colorList.filter((option) =>
      option.name.toLowerCase().includes(filterValue)||option.code.toLowerCase().includes(filterValue)
    );
  }
  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter((option) =>
  //     option.toLowerCase().includes(filterValue)
  //   );
  // }
}
