import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressTosearchComponent } from './adress-tosearch.component';

describe('AdressTosearchComponent', () => {
  let component: AdressTosearchComponent;
  let fixture: ComponentFixture<AdressTosearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdressTosearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressTosearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
