import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-block-list-item',
    templateUrl: './block-list-item.component.html',
    styleUrls: ['./block-list-item.component.scss']
})
export class BlockListItemComponent {

    @Input('title') title: string;
}
