import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEolienComponent } from './add-eolien.component';

describe('AddEolienComponent', () => {
  let component: AddEolienComponent;
  let fixture: ComponentFixture<AddEolienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEolienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEolienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
