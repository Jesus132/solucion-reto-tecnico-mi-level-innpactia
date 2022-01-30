import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from "@angular/material/icon";
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";

const myModules =
    [
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatNativeDateModule,
    ];

@NgModule({
    imports: [...myModules,],
    exports: [...myModules],
})
export class MaterialModule { }