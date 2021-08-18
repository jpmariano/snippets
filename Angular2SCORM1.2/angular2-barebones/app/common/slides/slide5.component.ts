import {Component} from 'angular2/core';

@Component({
    selector: 'slide5',
    templateUrl: "./app/common/slides/slide5.component.html"

})
export class Slide5 {
    name: string;
    constructor() {
        this.name = 'Slide5';
    }
}
