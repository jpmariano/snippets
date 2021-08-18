var currentPage = null;
var startTimeStamp = null;
var processedUnload = false;
var reachedEnd = false;

function initializeSlide(){
      
       if(typeof(Storage) !== "undefined") {
       
        if (sessionStorage.slideNumber) {
            //sessionStorage.slideNumber = this.getSlide() + 1;
            //this.slideNumber = Number(sessionStorage.slideNumber);
           // alert(sessionStorage.slideNumber);
           
            if ((ScormProcessGetValue("cmi.core.lesson_location")) == "undefined" ){
                sessionStorage.slideNumber = 0;
           
            } else {
                sessionStorage.slideNumber = ScormProcessGetValue("cmi.core.lesson_location");
              
            }
        } else {
            sessionStorage.slideNumber = 0;
        } 
      } 

}



function doStart() {


    //record the time that the learner started the SCO so that we can report the total time
    startTimeStamp = new Date();
   
    //initialize communication with the LMS
    ScormProcessInitialize();
    /*
    if ($( "slide").children().prop("tagName") == "SLIDE0"){
        ScormProcessInitialize();
    } */
    initSuspendData();
    var completionStatus = ScormProcessGetValue("cmi.core.lesson_status");
    if (completionStatus == "not attempted") {
        ScormProcessSetValue("cmi.core.lesson_status", "incomplete");
    }

    //initializeSlide();

}

function doUnload(pressedExit) {
    if (processedUnload == true) {
        return;
    }
    
    processedUnload = true;
   
    //record the session time
    var endTimeStamp = new Date();
    var totalMilliseconds = (endTimeStamp.getTime() - startTimeStamp.getTime());
    var scormTime = ConvertMilliSecondsToSCORMTime(totalMilliseconds, false);

    ScormProcessSetValue("cmi.core.session_time", scormTime);
    sessionStorage.slideNumber = sessionStorage.slideNumber.toString();
    ScormProcessSetValue("cmi.core.lesson_location", sessionStorage.slideNumber);
    //if the user just closes the browser, we will default to saving 
    //their progress data. If the user presses exit, he is prompted.
    //If the user reached the end, the exit normall to submit results.
    if (pressedExit == false && reachedEnd == false) {
        //ScormProcessSetValue("cmi.core.lesson_status", 'incomplete');
        ScormProcessSetValue("cmi.core.exit", "suspend");

    }
    SCORM_CommitData();
    ScormProcessFinish();
}
/*
$( "document" ).ready(function() {
    doStart(); 
});
*/


$(window).on('beforeunload', function(){
    //alert('closed');
    doUnload(false);
    return 'Are you sure you want to leave?';
});

$(window).on('onunload', function(){
    doUnload();
});