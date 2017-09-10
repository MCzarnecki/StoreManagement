import { MembersPreviewComponent } from './containers/members-preview/members-preview.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MembersFormPageComponent } from './containers/members-form-page/members-form-page.component';

const MEMBERS_ROUTES = [
    { path: '', component: MembersPreviewComponent, pathMatch: 'full'  },
    { path: 'form', component: MembersFormPageComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(MEMBERS_ROUTES)]
})
export class MembersRoutingModule { }

