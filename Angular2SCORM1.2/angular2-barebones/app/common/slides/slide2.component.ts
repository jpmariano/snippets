import {Component, ElementRef} from 'angular2/core';


declare var $ any;

@Component({
    selector: 'slide2',
    //templateUrl: "./app/common/slides/slide2.component.html",
    template: `<button>Click </button>`
})
export class Slide2 implements OnInit{
    name: string;
  
    constructor (private elRef: ElementRef){}
    ngOnInit():any {
        $(this.elRef.nativeElement).find('button').on('click', function() { 
            alert('tets');
        });
        sessionStorage.warningMessage = 'this warning for slide 3';
    }
    
    
}
