import {Component} from 'angular2/core';

@Component({
    selector: 'slide4',
    templateUrl: "./app/common/slides/slide4.component.html"

})
export class Slide4 {
    name: string;
    constructor() {
        this.name = 'Slide4';
    }
}
