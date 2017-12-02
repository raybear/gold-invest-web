import {AfterViewInit, Component, ContentChildren, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';

import {SliderItemComponent} from './slider-item.component';

@Component({
    moduleId: module.id,
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit {

    slides: SliderItemComponent[] = [];

    activeSlide = 0;

    @ContentChildren(SliderItemComponent) slidesQuery: QueryList<SliderItemComponent>;

    @ViewChild('title') title: ElementRef;

    @ViewChild('subTitle') subTitle: ElementRef;

    @ViewChild('description') description: ElementRef;

    ngAfterViewInit() {

        this.slidesQuery.forEach((slide: SliderItemComponent) => {

            this.slides.push(slide);
        });

        this.setSlide();

        console.log(this.slidesQuery);
        console.log(this.slides);
    }

    setSlide(): void {

        const slide = this.slides[this.activeSlide];

        this.title.nativeElement.innerText = slide.getTitle();
        this.subTitle.nativeElement.innerText = slide.getSubTitle();
        this.description.nativeElement.innerText = slide.getDescription();
    }

    nextSlide(): void {


    }

    prevSlide(): void {


    }
}
