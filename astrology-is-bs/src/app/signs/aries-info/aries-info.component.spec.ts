import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AriesInfoComponent } from './aries-info.component';

describe('AriesInfoComponent', () => {
  let component: AriesInfoComponent;
  let fixture: ComponentFixture<AriesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AriesInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AriesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
