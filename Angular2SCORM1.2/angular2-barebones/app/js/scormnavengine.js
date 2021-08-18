
/*************************************/
//navigation functions
/*************************************/

var currentPage = null;
var startTimeStamp = null;
var processedUnload = false;
var reachedEnd = false;


function doStart() {


    //record the time that the learner started the SCO so that we can report the total time
    startTimeStamp = new Date();

    //initialize communication with the LMS
    ScormProcessInitialize();
    initSuspendData();
    //it's a best practice to set the lesson status to incomplete when
    //first launching the course (if the course is not already completed)
    var completionStatus = ScormProcessGetValue("cmi.core.lesson_status");
    if (completionStatus == "not attempted") {
        ScormProcessSetValue("cmi.core.lesson_status", "incomplete");
    }
    
    //see if the user stored a bookmark previously (don't check for errors
    //because cmi.core.lesson_location may not be initialized
    var bookmark = ScormProcessGetValue("cmi.core.lesson_location");
    //var bookmark =  getSuspendDataValue('bookmark');

    //if there isn't a stored bookmark, start the user at the first page
    if (bookmark == undefined) {
        currentPage = 0;
    } else {
        currentPage = parseInt(bookmark, 10);
    }

    //goToPage();
    initPageArray(currentPage);
    goToBookmark(currentPage);

}

//This is set in global.js
function goToBookmark(intCurrentPage){
	var theIframe = document.getElementById("contentFrame");
    theIframe.src = "slides/" + bookmarkArray[intCurrentPage];
}

function initPageArray(intCurrentPage){
    var progressLocation = ScormProcessGetValue("cmi.core.lesson_location");
    if ((typeof progressLocation !== 'undefined') && (progressLocation === '')) {
        ScormProcessSetValue("cmi.core.lesson_location", intCurrentPage);
    }
}


function goToPage() {
	
    if (currentPage == (pageArray.length - 2)) {
        reachedEnd = true;
        ScormProcessSetValue("cmi.core.score.raw", "100");
        ScormProcessSetValue("cmi.core.lesson_status", "completed");
        SCORM_CommitData();
    }
    
    var theIframe = document.getElementById("contentFrame");
    theIframe.src = "slides/" + pageArray[currentPage];
 
    var progressLocation = ScormProcessGetValue("cmi.core.lesson_location");
    if ((typeof progressLocation !== 'undefined') && (progressLocation === '')) {
        ScormProcessSetValue("cmi.core.lesson_location", currentPage);
    }
	
    if ((typeof progressLocation !== 'undefined') && (progressLocation !== '')) {
        if (currentPage > progressLocation) {
            ScormProcessSetValue("cmi.core.lesson_location", currentPage);
        }
    }

}

function goTo508() {
    var theIframe = document.getElementById("contentFrame");
    theIframe.src = "slides/" + page508[currentPage];
    ScormProcessSetValue("cmi.core.lesson_location", currentPage);
    if (currentPage == (page508.length - 1)) {
        reachedEnd = true;
        ScormProcessSetValue("cmi.core.score.raw", 100);
        ScormProcessSetValue("cmi.core.lesson_status", "completed");
        SCORM_CommitData();
    }
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

function doPrevious() {
    if (currentPage > 0) {
        currentPage--;
    }
    goToPage();
}

function doNext() {
    if (currentPage < (pageArray.length - 1)) {
        currentPage++;
    }

    goToPage();
}



function gotoPageNumber(pageNumber) {
    currentPage = pageNumber;
    goToPage();
}

function gotoPage508(pageNumber) {
    currentPage = pageNumber;
    goTo508();
}

function doExit() {

    //note use of short-circuit AND. If the user reached the end, don't prompt.
    //just exit normally and submit the results.
    if (reachedEnd == false && confirm("Would you like to save your progress to resume later?")) {
        //set exit to suspend
        ScormProcessSetValue("cmi.core.exit", "suspend");
    } else {
        //set exit to normal
        ScormProcessSetValue("cmi.core.exit", "");
    }

    //process the unload handler to close out the session.
    //the presense of an adl.nav.request will cause the LMS to 
    //take the content away from the user.
    doUnload(true);

}
 	
function arraySearch(arr,val) {
    for (var i=0; i<arr.length; i++)
        if (arr[i] === val)                    
            return i;
    return false;
}


function setBookmark(strSlideURL){
		var bookmarkVal = getSuspendDataValue('bookmark');
		//var src = $('iframe',this).attr('src');
			//src = src.replace("slides/", "");
		if (bookmarkVal == undefined) {
		    setSuspendDataValue('bookmark', 0 );
		    SCORM_CommitData();
		} else {
		    var newBookmark = arraySearch(bookmarkArray,strSlideURL);
		    setSuspendDataValue('bookmark', newBookmark);
		    SCORM_CommitData();
		}
}

