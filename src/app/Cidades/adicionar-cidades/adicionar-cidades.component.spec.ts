import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarCidadesComponent } from './adicionar-cidades.component';

describe('AdicionarCidadesComponent', () => {
  let component: AdicionarCidadesComponent;
  let fixture: ComponentFixture<AdicionarCidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarCidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarCidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
