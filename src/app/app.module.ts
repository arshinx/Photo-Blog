import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EntryListComponent, EntryComponent } from './entries';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        EntryComponent,
        EntryListComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}