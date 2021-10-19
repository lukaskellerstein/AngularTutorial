import {NgModule} from '@angular/core';
import {ServerModule, ServerTransferStateModule} from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';

import {AppModule} from './app.module';
import {AppComponent} from './app.component';

//Custom Unviversal vs. ngRx state binding
import { ServerExportStateModule } from './modules/transfer-state/server-export-state/server-export-state.module';

@NgModule({
  imports: [
    // The AppServerModule should import your AppModule followed
    // by the ServerModule from @angular/platform-server.
    AppModule,
    ServerExportStateModule,// This module must be imported before the ServerTransferStateModule.
    ServerTransferStateModule,
    ServerModule,
    ModuleMapLoaderModule,
  ],
  // Since the bootstrapped component is not inherited from your
  // imported AppModule, it needs to be repeated here.
  bootstrap: [AppComponent],
})
export class AppServerModule {}
