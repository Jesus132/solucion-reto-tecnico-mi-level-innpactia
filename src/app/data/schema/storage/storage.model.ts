import {
    FormGroup,
    FormControl,
    Validators,
    MaxLengthValidator
} from '@angular/forms';

export class StorageForms {

    FormStorage(): FormGroup {
        return new FormGroup({
            id_client: new FormControl('', {
                validators: [
                    Validators.required,
                    Validators.nullValidator,
                ],
            }),
            model: new FormControl('', {
                validators: [
                    Validators.required,
                    Validators.nullValidator,
                ],
            }),
            observation: new FormControl(''),

        });
    }
}