//Run jquery on browser console - paste this on your console
var $ = document.createElement('script');
jqry.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.getElementsByTagName('head')[0].appendChild(jqry);
jQuery.noConflict();

const isReasonAvailablePromise = function (arrayOfReasons) {
    return new Promise((resolve, reject) => {
        let isReasonAvailable = false;
        for( let reasonkey in arrayOfReasons ) { 
     
            if(arrayOfReasons[reasonkey].link !== null){
                isReasonAvailable = true;
            } 
        }
        if (isReasonAvailable) {
            resolve(true);
        }else
            reject(false);
    });
}