import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarClimaComponent } from './cambiar-clima.component';

describe('CambiarClimaComponent', () => {
  let component: CambiarClimaComponent;
  let fixture: ComponentFixture<CambiarClimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambiarClimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
