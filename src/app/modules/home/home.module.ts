import {NgModule} from '@angular/core';
import {HomeRoutingModule} from './home-routing.module';

import {HomeComponent} from './pages/home/home.component';

import {SliderModule} from '../../shared/components/slider/slider.module';
import {RibbonModule} from '../../shared/components/ribbon/ribbon.module';
import {SplitViewModule} from '../../shared/components/split-view/split-view.module';
import {VideoModule} from '../../shared/components/video/video.module';
import {WrapperModule} from '../../shared/components/wrapper/wrapper.module';

@NgModule({
    imports: [
        HomeRoutingModule,

        SliderModule,
        RibbonModule,
        SplitViewModule,
        VideoModule,
        WrapperModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule {}
