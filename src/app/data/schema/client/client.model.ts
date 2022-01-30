import {
    FormGroup,
    FormControl,
    Validators,
    MaxLengthValidator
} from '@angular/forms';

export class ClientForms {

    FormClient(): FormGroup {
        return new FormGroup({
            id: new FormControl(''),
            name: new FormControl('', {
                validators: [
                    Validators.required,
                    Validators.nullValidator,
                ],
            }),
            // : new FormControl('', {
            //     validators: [
            //         Validators.required,
            //         Validators.nullValidator,
            //     ],
            // }),
            phone: new FormControl(Number || '', {
                validators: [
                    Validators.required,
                    Validators.nullValidator,
                    Validators.minLength(6)
                ],
            }),
        });
    }
}