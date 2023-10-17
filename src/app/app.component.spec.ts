import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { InicioComponent } from './inicio/inicio.component';

describe('InicioComponent', () => {
  let fixture: ComponentFixture<InicioComponent>;
  let component: InicioComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        MatTabsModule,
        MatFormFieldModule,
        MatPaginatorModule,
      ],
      declarations: [InicioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set the selected tab index to 0 by default', () => {
    expect(component.selectedIndex).toBe(0);
  });

  it('should change the selected tab index when calling changeTab', () => {
    component.changeTab(1);
    expect(component.selectedIndex).toBe(1);
  });

  it('should reset the selected tab index when calling resetTab', () => {
    component.changeTab(1);
    component.resetTab();
    expect(component.selectedIndex).toBe(0);
  });

  it('should add a favorite item to favorites', () => {
    const item = { title: 'Test Item', date: '2023-10-10' };
    component.addToFavorites(item);
    expect(component.favoritas.length).toBe(1);
  });
});
