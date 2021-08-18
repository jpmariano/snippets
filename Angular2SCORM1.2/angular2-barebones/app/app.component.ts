import {Component, HostBinding, ElementRef, HostListener} from 'angular2/core';
import {Footer} from './common/footer.component'; //Importing other component
import {Container} from './common/container.component'; //Importing other component
declare var $ any;
//import {ScormService} from './common/services/scorm.service';
//import {saw} from '';
//import saw as saw from 'scorm';
//declare var test: any;
//saw = require('scorm-api-wrapper');
//declare var test: any;

//import './js/scormfunctions.js';

@Component({
    selector: 'app',
    templateUrl: "./app/common/main.component.html",
    directives: [Footer, Container] //Importing other component
})

export class App implements OnInit{ 
   // saw = require('scorm-api-wrapper');
    //test = require('test');
    name: string;
    //scorm: any;
    //scormProcessInitialize: any;
    constructor(private elRef: ElementRef) {
        this.name = 'container';
        window.onbeforeunload = this.closeAndSaveScorm;
    }
  
     ngOnInit(){

     }  

     closeAndSaveScorm(e){
        setSuspendDataValue('requiredList', sessionStorage.requiredList);
        setSuspendDataValue('completedSlides', sessionStorage.completedSlides);
        ScormProcessSetValue("cmi.core.lesson_location", sessionStorage.slideNumber.toString());
        ScormProcessFinish();
        return 'Do you want to leave this site?';
     }   
  
}