import {Component} from 'angular2/core';
//import { DOCUMENT } from 'angular2/platform/browser';
export class SlideCompletionService {
   

   isSlideComplete(){
        //alert(intSlideNum);
        if (Number(sessionStorage.slideNumber) > Number(sessionStorage.completedSlides)){
            sessionStorage.completedSlides = Number(sessionStorage.completedSlides) + 1;
        } 
    }

 
    constructor() { 
       this.initRequiredList();
    }

  
     initRequiredList(){
         if (isElmsConnected() == 1 ){
             if (typeof getSuspendDataValue == 'function') { 
                if (getSuspendDataValue('completedSlides') != null){
                    sessionStorage.completedSlides  = Number(getSuspendDataValue('completedSlides'));
                } else {
                    sessionStorage.completedSlides = 0;
                }
            }
           
         } else {
              sessionStorage.completedSlides = 0;
         }        
     }


}