import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoieResultatsComponent } from './envoie-resultats.component';

describe('EnvoieResultatsComponent', () => {
  let component: EnvoieResultatsComponent;
  let fixture: ComponentFixture<EnvoieResultatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvoieResultatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoieResultatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
