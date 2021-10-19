import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//ngRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

//CUSTOM ngRx
import { commonReducers } from 'src/app/common/state/reducers/common.reducers';
import { IdentityEffects } from 'src/app/common/state/effects/identity.effects';

//Components
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MyWidgetsModule } from '../widgets/widgets.module';

//Containers
import { LoginPageComponent } from './containers/login-page/login-page.component';

//Services
import { IdentityService } from './services/identity.service';
import { initialCommonState } from './state/stores/common.state';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MyWidgetsModule,
    StoreModule.forFeature('common', commonReducers, {initialState: initialCommonState}),
    EffectsModule.forFeature([IdentityEffects])
  ],
  declarations: [LoginPageComponent, LoginFormComponent, ErrorPageComponent, NotFoundPageComponent, HomePageComponent],
  providers: [IdentityService]
})
export class MyCommonModule { }
