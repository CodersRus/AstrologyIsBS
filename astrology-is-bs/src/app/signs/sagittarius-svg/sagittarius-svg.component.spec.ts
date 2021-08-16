import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagittariusSVGComponent } from './sagittarius-svg.component';

describe('SagittariusSVGComponent', () => {
  let component: SagittariusSVGComponent;
  let fixture: ComponentFixture<SagittariusSVGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SagittariusSVGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SagittariusSVGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
