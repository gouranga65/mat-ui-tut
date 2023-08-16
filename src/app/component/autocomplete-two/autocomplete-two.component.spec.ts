import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteTwoComponent } from './autocomplete-two.component';

describe('AutocompleteTwoComponent', () => {
  let component: AutocompleteTwoComponent;
  let fixture: ComponentFixture<AutocompleteTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompleteTwoComponent]
    });
    fixture = TestBed.createComponent(AutocompleteTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
