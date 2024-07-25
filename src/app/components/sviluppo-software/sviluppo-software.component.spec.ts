import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SviluppoSoftwareComponent } from './sviluppo-software.component';

describe('SviluppoSoftwareComponent', () => {
  let component: SviluppoSoftwareComponent;
  let fixture: ComponentFixture<SviluppoSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SviluppoSoftwareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SviluppoSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
