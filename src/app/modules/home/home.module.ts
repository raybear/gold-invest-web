import {NgModule} from '@angular/core';
import {HomeRoutingModule} from './home-routing.module';

import {HomeComponent} from './pages/home/home.component';

import {SliderModule} from '../../shared/components/slider/slider.module';
import {RibbonModule} from '../../shared/components/ribbon/ribbon.module';

@NgModule({
    imports: [
        HomeRoutingModule,

        SliderModule,
        RibbonModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule {}
