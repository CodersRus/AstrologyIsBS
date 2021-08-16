import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirgoInfoComponent } from './virgo-info.component';

describe('VirgoInfoComponent', () => {
  let component: VirgoInfoComponent;
  let fixture: ComponentFixture<VirgoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirgoInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirgoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
