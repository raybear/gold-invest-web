import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FaqComponent} from './faq.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        FaqComponent
    ],
    declarations: [
        FaqComponent
    ]
})
export class FaqModule {}
