import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaurusInfoComponent } from './taurus-info.component';

describe('TaurusInfoComponent', () => {
  let component: TaurusInfoComponent;
  let fixture: ComponentFixture<TaurusInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaurusInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaurusInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
