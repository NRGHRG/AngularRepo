import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { InicioComponent } from './inicio.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';

describe('InicioComponent', () => {
  let component: InicioComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioComponent],
      imports: [HttpClientTestingModule, MatSnackBarModule, MatTabsModule, MatFormFieldModule, MatPaginatorModule],
    });

    component = TestBed.createComponent(InicioComponent).componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call obtenerTodasLasNoticias in ngOnInit', () => {
    spyOn(component, 'obtenerTodasLasNoticias');
    component.ngOnInit();
    expect(component.obtenerTodasLasNoticias).toHaveBeenCalled();
  });
});
