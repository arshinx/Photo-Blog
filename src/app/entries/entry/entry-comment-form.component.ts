
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

/**
 * Output    - shows Output to HTML
 * ViewChild - Scans for local variables in children pages
 * 
 * @export
 * @class EntryCommentFormComponent
 */
@Component({
    selector: 'app-entry-comment-form',
    templateUrl: 'entry-comment-form.component.html'
})

export class EntryCommentFormComponent {
    name: string = "";
    comment: string = "";
    @Output() onCommentAdded = new EventEmitter<{name: string; comment: string;}>();

    onSubmit() {
        let comment = { name: this.name, comment: this.comment };
        this.onCommentAdded.emit(comment);
    }
}