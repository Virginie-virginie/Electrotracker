import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EolienComponent } from './eolien.component';

describe('EolienComponent', () => {
  let component: EolienComponent;
  let fixture: ComponentFixture<EolienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EolienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EolienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
