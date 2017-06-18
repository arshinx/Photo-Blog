import { Component } from '@angular/core';

@Component({
    selector: 'app-entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']
})
export class EntryComponent {
    title: string = 'My First Photo';
    photo: string = 'http://placeholder.it/800x500?text=Angular Basics'
}