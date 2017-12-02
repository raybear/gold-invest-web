import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BlockListComponent} from './block-list.component';
import {BlockListItemComponent} from './block-list-item.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        BlockListComponent,
        BlockListItemComponent
    ],
    declarations: [
        BlockListComponent,
        BlockListItemComponent
    ]
})
export class BlockListModule {}
