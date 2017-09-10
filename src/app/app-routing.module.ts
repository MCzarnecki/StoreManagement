import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const APP_ROUTES = [
    { path: '', redirectTo: 'members', pathMatch: 'full' },
    { path: 'members', loadChildren: './features/members/members.module#MembersModule' },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)]
})
export class AppRoutingModule { }
