import {
    FormGroup,
    FormControl,
    Validators,
    MaxLengthValidator
} from '@angular/forms';

export class SettingForms {

    FormSetting(): FormGroup {
        return new FormGroup({
            // id: new FormControl(''),
            id_storages: new FormControl('', {
                validators: [
                    Validators.required,
                    Validators.nullValidator,
                ],
            }),
            observation: new FormControl(''),
            date: new FormControl('', {
                validators: [
                    Validators.required,
                    Validators.nullValidator,
                ],
            }),

        });
    }
}