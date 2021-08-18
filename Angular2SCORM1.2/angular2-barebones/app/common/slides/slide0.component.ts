import {Component, ElementRef} from 'angular2/core';
declare var $ any;
@Component({
    selector: 'slide0',
    templateUrl: "./app/common/slides/slide0.component.html",
    styleUrls: ['./app/css/style.css']

})
export class Slide0 implements OnInit{
    slideNumber: number;
    constructor(private elRef: ElementRef) {
        this.slideNumber = 0;
    }
    ngOnInit():any {
        sessionStorage.warningMessage = 'this warning for slide 1';
        $.getScript("./app/js/scorm12nav.js");
    }
     
}
