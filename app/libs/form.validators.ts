import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidator {
static checkPhoneNumber( control: AbstractControl): ValidationErrors | null {
  if (isNaN(control.value)) {
    return { notANumber : true };
  } else {
      return null;
  }
}
}
