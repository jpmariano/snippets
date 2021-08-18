import {Component} from 'angular2/core';

@Component({
    selector: 'slide3',
    templateUrl: "./app/common/slides/slide3.component.html"

})
export class Slide3 {
    name: string;
    constructor() {
        this.name = 'Slide3';
    }
}
