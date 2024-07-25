import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelligenzaArtificialeComponent } from './intelligenza-artificiale.component';

describe('IntelligenzaArtificialeComponent', () => {
  let component: IntelligenzaArtificialeComponent;
  let fixture: ComponentFixture<IntelligenzaArtificialeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntelligenzaArtificialeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntelligenzaArtificialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
