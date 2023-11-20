import {bootstrapApplication} from "@angular/platform-browser";
import {importProvidersFrom} from "@angular/core";

import {AppComponent} from "./app/app.component";
import {AppRoutingModule} from "./app/app-routing.module";
// import {AnalyticsService} from "./app/shared/analytics.service";

bootstrapApplication(AppComponent, {
  providers: [
    // AnalyticsService
    importProvidersFrom(AppRoutingModule)
  ]
});
