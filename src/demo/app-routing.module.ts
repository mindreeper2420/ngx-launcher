import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateAppComponent } from './create-app/create-app.component';
import { GettingStartedLauncherComponent } from './getting-started-launcher/getting-started-launcher.component';
import { GettingStartedOsioComponent } from './getting-started-osio/getting-started-osio.component';
import { LauncherAppComponent } from './launcher-app/launcher-app.component';
import { ImportAppComponent } from './import-app/import-app.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [{
    path: '',
    component: WelcomeComponent,
    pathMatch: 'full'
  }, {
    path: 'createapp',
    component: CreateAppComponent,
    pathMatch: 'full'
  }, {
    path: 'importapp',
    component: ImportAppComponent,
    pathMatch: 'full'
  }, {
    path: 'launcherapp',
    component: LauncherAppComponent,
    pathMatch: 'full'
  }, {
    path: 'createapp/:appname',
    component: CreateAppComponent,
    pathMatch: 'full'
  }, {
    path: 'importapp/:appname',
    component: ImportAppComponent,
    pathMatch: 'full'
  }, {
    path: 'launcherapp/:appname',
    component: LauncherAppComponent,
    pathMatch: 'full'
  }, {
    path: 'launcher',
    component: GettingStartedLauncherComponent,
    pathMatch: 'full'
  }, {
    path: 'osio',
    component: GettingStartedOsioComponent,
    pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
