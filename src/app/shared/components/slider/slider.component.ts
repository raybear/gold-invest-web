import {
    AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, OnInit, QueryList, ViewChild,
    ViewChildren
} from '@angular/core';

import {SliderItemComponent} from './slider-item.component';

@Component({
    moduleId: module.id,
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SliderComponent implements AfterViewInit {

    slides: SliderItemComponent[] = [];

    activeSlide = 0;

    background: string;

    @ContentChildren(SliderItemComponent) slidesQuery: QueryList<SliderItemComponent>;

    @ViewChild('title') title: ElementRef;

    @ViewChild('subTitle') subTitle: ElementRef;

    @ViewChild('description') description: ElementRef;

    constructor(private changeDetector: ChangeDetectorRef) {}

    ngAfterViewInit() {

        this.slidesQuery.forEach((slide: SliderItemComponent) => {

            this.slides.push(slide);
        });

        this.setSlide();

        // console.log(this.slidesQuery);
        // console.log(this.slides);
    }

    setSlide(): void {

        const slide = this.slides[this.activeSlide];

        this.title.nativeElement.innerText = slide.getTitle();
        this.subTitle.nativeElement.innerText = slide.getSubTitle();
        this.description.nativeElement.innerText = slide.getDescription();

        this.background = slide.background;

        this._detectChanges();
    }

    nextSlide(): void {

        if (this.activeSlide === this.slidesQuery.length - 1) {
            this.activeSlide = 0;
        } else {
            this.activeSlide++;
        }

        this.setSlide();

    }

    prevSlide(): void {

        if (this.activeSlide === 0) {
            this.activeSlide = this.slidesQuery.length - 1;
        } else {
            this.activeSlide--;
        }

        this.setSlide();
    }

    private _detectChanges(): void {

        this.changeDetector.detectChanges();
    }
}
