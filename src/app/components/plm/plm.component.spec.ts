import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlmComponent } from './plm.component';

describe('PlmComponent', () => {
  let component: PlmComponent;
  let fixture: ComponentFixture<PlmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
