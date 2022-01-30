import {
    FormGroup,
    FormControl,
    Validators,
    MaxLengthValidator
} from '@angular/forms';

export class LogForms {

    FormLog(): FormGroup {
        return new FormGroup({
            email: new FormControl('', {
                validators: [
                    Validators.required,
                    Validators.nullValidator,
                ],
            }),
            password: new FormControl('', {
                validators: [
                    Validators.required,
                    Validators.nullValidator,
                ],
            }),
        });
    }
}