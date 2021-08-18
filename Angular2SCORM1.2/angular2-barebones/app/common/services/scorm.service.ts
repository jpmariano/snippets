import {Component} from 'angular2/core';

declare var ScormProcessInitialize: any;
declare var ScormProcessGetValue: any;
declare var ScormProcessSetValue: any;
declare var SCORM_CommitData: any;


export class ScormService implements OnInit { 

    ScormProcessInitialize: any;
    ScormProcessFinish: any;
    ScormProcessGetValue: any;
    ScormProcessSetValue: any;
    ScormCommitData: any;

    startTimeStamp: any;
    currentPage: number;
    processedUnload: boolean;
    reachedEnd: boolean;
    completionStatus: any;
    


    constructor() { 
    }

     ngOnInit(){
         //this.scormProcessInitialize();
     }

     scormProcessInitialize(){
         this.ScormProcessInitialize = new ScormProcessInitialize();
     }

     scormProcessFinish(){
         this.ScormProcessFinish = new ScormProcessFinish();
     }
     scormProcessGetValue(r: any): any {
         this.ScormProcessGetValue = new ScormProcessGetValue(r);
         //alert(this.ScormProcessGetValue);
     }
    
     scormProcessSetValue(r, n) {
         this.ScormProcessSetValue = new ScormProcessSetValue(r, n);
     }

     scormCommitData(){
         this.ScormCommitData = new SCORM_CommitData();
     }

     scormStart(){
         this.startTimeStamp = new Date();
         this.scormProcessInitialize();
         this.scormInitCompletionStatus();
         this.scormInitSuspendData();
     }

     scormInitCompletionStatus(){
        
         alert(this.scormProcessGetValue("cmi.core.lesson_status"));
        this.completionStatus = this.scormProcessGetValue("cmi.core.lesson_status");
        //alert(this.completionStatus);
        if (this.completionStatus == "not attempted"){
             //alert('this.completionStatus');
            this.scormProcessSetValue("cmi.core.lesson_status", "incomplete");
        }
     }


    scormInitSuspendData() {
        var mainObj : any = {};
        var getSuspendedData : any = this.scormProcessGetValue('cmi.suspend_data');
        if (getSuspendedData == '') {
            var defaultSuspendData : string = JSON.stringify(mainObj);
            this.scormProcessSetValue('cmi.suspend_data', defaultSuspendData);
        }
        //this.scormCommitData();
    }

    //Returns a Json Object, Array, Number or String Depending on your values
    scormGetSuspendDataValue(strObjProperty) {
        var getSuspendedData : any = this.scormProcessGetValue('cmi.suspend_data');
        var mainObj : any = JSON.parse(getSuspendedData);

        var testText1 : any = strObjProperty.substring(0, 7);

        if (!(testText1 == 'mainObj')) {
            strObjProperty = 'mainObj.' + strObjProperty;
        }

        return eval(strObjProperty);
    }

    scormSetSuspendDataValue(strObjProperty, objValue) {
        var getSuspendedData : any = this.scormProcessGetValue('cmi.suspend_data');
        var mainObj : any = JSON.parse(getSuspendedData);

        switch (typeof objValue) {
            case "string":
                var setObjVal = 'mainObj.' + strObjProperty + ' = "' + objValue + '";';
                break;
            case "object":
                objValue = JSON.stringify(objValue);
                //alert(objValue);
                var setObjVal = 'mainObj.' + strObjProperty + ' = ' + objValue + ';';
                break;
            default:
                var setObjVal = 'mainObj.' + strObjProperty + ' = ' + objValue + ';';
                break;
        }

        eval(setObjVal);
        mainObj = JSON.stringify(mainObj);

        this.scormProcessSetValue('cmi.suspend_data', mainObj);
        this.scormCommitData();
    }


}