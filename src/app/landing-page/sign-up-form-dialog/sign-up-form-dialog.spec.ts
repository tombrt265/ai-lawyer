import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpFormDialog } from './sign-up-form-dialog';

describe('SignUpFormDialog', () => {
  let component: SignUpFormDialog;
  let fixture: ComponentFixture<SignUpFormDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpFormDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpFormDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
