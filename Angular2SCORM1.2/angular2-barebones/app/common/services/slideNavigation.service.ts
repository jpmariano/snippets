import {Component} from 'angular2/core';

export class SlideNavigationService implements OnChanges {
   private startTimeStamp: any;
   private slideNumber: number;
   private totalSlides: number;
    constructor() { 
      this.initScorm();
      this.initSlide();
      //this.addSlideNum();
      this.slideNumber = Number(sessionStorage.slideNumber);
      //alert(this.slideNumber);
      this.totalSlides = 5;
    }

    getSlide(){
        
        return this.slideNumber;
    }

    getTotalSlides(){
        return this.totalSlides;
    }
    
    getNextSlide(){
        this.slideNumber = this.slideNumber + 1;
        return this.slideNumber;
    }

    getPreviousSlide(){
        this.slideNumber = this.slideNumber - 1;
        return this.slideNumber;
    }

    addSlideNum(){
       if(typeof(Storage) !== "undefined") {
        if (sessionStorage.slideNumber) {
            sessionStorage.slideNumber = this.getSlide() + 1;
            this.slideNumber = Number(sessionStorage.slideNumber);
        } else {
            sessionStorage.slideNumber = Number(ScormProcessGetValue("cmi.core.lesson_location"));   
        } 
      } 
    }

    removeSlideNum(){
       if(typeof(Storage) !== "undefined") {
        if (sessionStorage.slideNumber) {
            if (sessionStorage.slideNumber > 0 ) { 
              sessionStorage.slideNumber = this.getSlide() - 1;
              this.slideNumber = Number(sessionStorage.slideNumber);
            } else {
              this.slideNumber = sessionStorage.slideNumber = 0;
            } 
        } else {
            sessionStorage.slideNumber = 0;
        }
      } 
    } 
    
    initScorm(){
        this.startTimeStamp = new Date();
        ScormProcessInitialize();
        initSuspendData();
        var completionStatus = ScormProcessGetValue("cmi.core.lesson_status");
        if (completionStatus == "not attempted") {
            ScormProcessSetValue("cmi.core.lesson_status", "incomplete");
        }
    }

    initSlide(){
       
        switch (ScormProcessGetValue("cmi.core.lesson_location")) {
            case "":
                sessionStorage.slideNumber = 0;
                break;
            case undefined:
                sessionStorage.slideNumber = 0;
                break;
            case "NaN":
                sessionStorage.slideNumber = 0;
                break;
            default:
                sessionStorage.slideNumber = Number(ScormProcessGetValue("cmi.core.lesson_location"));
                break;
        }


    }

    goToSlide(intSlideNumber){
        if (Number(sessionStorage.completedSlides)>intSlideNumber){
            sessionStorage.slideNumber = intSlideNumber;
            this.slideNumber = intSlideNumber;
            return this.slideNumber;
        } 
    }


}