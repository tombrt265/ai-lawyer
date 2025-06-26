import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormDialog } from './login-form-dialog';

describe('LoginFormDialog', () => {
  let component: LoginFormDialog;
  let fixture: ComponentFixture<LoginFormDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginFormDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFormDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
