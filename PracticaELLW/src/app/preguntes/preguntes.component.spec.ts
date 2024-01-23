import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntesComponent } from './preguntes.component';

describe('PreguntesComponent', () => {
  let component: PreguntesComponent;
  let fixture: ComponentFixture<PreguntesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreguntesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreguntesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
