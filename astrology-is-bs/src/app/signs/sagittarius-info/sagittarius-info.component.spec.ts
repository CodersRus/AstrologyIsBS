import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagittariusInfoComponent } from './sagittarius-info.component';

describe('SagittariusInfoComponent', () => {
  let component: SagittariusInfoComponent;
  let fixture: ComponentFixture<SagittariusInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SagittariusInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SagittariusInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
