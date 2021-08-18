import {Component} from 'angular2/core';

export class SlideRequiredService {
   
   private requiredList:number[]=[];
 
    constructor() { 
        this.initRequiredList();
        
        this.initRequiredSlideList();
    }

    initRequiredSlideList(){
       
        if (this.requiredList) {
            sessionStorage.requiredList = this.requiredList;
        } else {
            sessionStorage.requiredList = null;
        }
    }

    getRequiredSlide(){
        this.requiredList = sessionStorage.requiredList.split(',');
        this.requiredList = this.requiredList.map(function (x) { 
            return parseInt(x, 10); 
        });
    }

    updateRequiredSlide(){
        sessionStorage.requiredList = this.requiredList;
    }

     isSlideRequired(intSlideNum: number){
        for (let pageNumber of this.requiredList) {
            if (pageNumber === intSlideNum) {
                //alert("true");
                return true;
            } 
        }
     }

      removeFromRequiredSlide(intSlideNum: number){
        //alert(intSlideNum);
        this.getRequiredSlide();
   
        var i = this.requiredList.indexOf(intSlideNum);
        if(i != -1) {
            this.requiredList.splice(i, 1);
            this.updateRequiredSlide();
        }
     }

     initRequiredList(){
         if (isElmsConnected() == 1 ){
             if (typeof getSuspendDataValue == 'function') { 
                if (getSuspendDataValue('requiredList') != null){
                    this.requiredList = getSuspendDataValue('requiredList').split(',').map(Number);
                } else {
                    this.requiredList = [1, 2];
                }
            }
           
         } else {
              this.requiredList = [1, 2];
         }        
     }
}