import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-slider-item',
    templateUrl: './slider-item.component.html'
})
export class SliderItemComponent {

    @ViewChild('title') title: ElementRef;

    @ViewChild('subTitle') subTitle: ElementRef;

    @ViewChild('description') description: ElementRef;

    getTitle(): string {

        return this.title.nativeElement.innerText;
    }

    getSubTitle(): string {

        return this.subTitle.nativeElement.innerText;
    }

    getDescription(): string {

        return this.description.nativeElement.innerText;
    }
}
