import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterStateSerializer } from '@ngrx/router-store';
import { CustomRouterStateSerializer } from "./utils/router-state";

@NgModule({
    declarations: [PageNotFoundComponent],
    exports: [CommonModule, ReactiveFormsModule, RouterModule, PageNotFoundComponent]
})
export class SharedModule { }
