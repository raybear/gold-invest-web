import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SplitViewComponent} from './split-view.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        SplitViewComponent
    ],
    declarations: [
        SplitViewComponent
    ]
})
export class SplitViewModule {}
