import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTitleclsComponent } from './menu-titlecls.component';

describe('MenuTitleclsComponent', () => {
  let component: MenuTitleclsComponent;
  let fixture: ComponentFixture<MenuTitleclsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuTitleclsComponent]
    });
    fixture = TestBed.createComponent(MenuTitleclsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
