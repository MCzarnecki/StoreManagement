import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MembersPreviewComponent } from './containers/members-preview/members-preview.component';
import { MembersRoutingModule } from './members-routing.module';
import { MembersDataService } from './services/members-data.service';
import { MembersListComponent } from './components/members-list/members-list.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/index';
import { EffectsModule } from '@ngrx/effects';
import { MembersListEffects } from './effects/members-list.effects';
import { MembersFormPageComponent } from './containers/members-form-page/members-form-page.component';
import { MembersFormComponent } from './components/members-form/members-form.component';
import { MembersFormEffects } from './effects/members-form.effects';

const COMPONENTS = [MembersPreviewComponent, MembersListComponent, MembersFormPageComponent, MembersFormComponent]

@NgModule({
    declarations: [COMPONENTS],
    imports: [SharedModule, MembersRoutingModule, StoreModule.forFeature('members', reducers), EffectsModule.forFeature([MembersListEffects, MembersFormEffects])],
    providers: [MembersDataService]
})
export class MembersModule { }
