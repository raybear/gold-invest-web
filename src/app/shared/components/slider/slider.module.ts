import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SliderComponent} from './slider.component';
import {SliderItemComponent} from './slider-item.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        SliderComponent,
        SliderItemComponent
    ],
    declarations: [
        SliderComponent,
        SliderItemComponent
    ]
})
export class SliderModule {}
