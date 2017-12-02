import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FooterModule} from './shared/components/footer/footer.module';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,

        FooterModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
