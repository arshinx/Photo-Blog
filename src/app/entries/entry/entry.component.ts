import { Component } from '@angular/core';
import { Entry } from '../shared/entry.model';

@Component({
    selector: 'app-entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']
})
export class EntryComponent {
    title: string = 'My First Photo';
    photo: string = 'http://placehold.it/800x500?text=Angular Basics'
    description: string = 'A Description of My First Photo';
    comments: any[] = [
        {name: "John", comment: "A Comment"},
        {name: "Jim", comment: "A Comment"},
        {name: "Jen", comment: "A Comment"}
    ];
}