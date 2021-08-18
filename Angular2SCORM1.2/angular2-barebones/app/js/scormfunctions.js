function findAPI(r) {
    for (; null == r.API && null != r.parent && r.parent != r;) {
        if (findAPITries++, findAPITries > 7) return alert("Error finding API -- too deeply nested."), null;
        r = r.parent
    }
    return r.API
}

function getAPI() {
    var r = findAPI(window);
    return null == r && null != window.opener && "undefined" != typeof window.opener && (r = findAPI(window.opener)), null == r && alert("Unable to find an API adapter"), r
}

function ScormProcessInitialize() {
    var r;
    if (API = getAPI(), null == API) return void alert("ERROR - Could not establish a connection with the LMS.\n\nYour results may not be recorded.");
    if (r = API.LMSInitialize(""), r == SCORM_FALSE) {
        var n = API.LMSGetLastError(),
            i = API.LMSGetErrorString(n),
            e = API.LMSGetDiagnostic(n),
            t = "Number: " + n + "\nDescription: " + i + "\nDiagnostic: " + e;
        return void alert("Error - Could not initialize communication with the LMS.\n\nYour results may not be recorded.\n\n" + t)
    }
    initialized = !0
}

function ScormProcessFinish() {
    var r;
    if (0 != initialized && 1 != finishCalled && (r = API.LMSFinish(""), finishCalled = !0, r == SCORM_FALSE)) {
        var n = API.LMSGetLastError(),
            i = API.LMSGetErrorString(n),
            e = API.LMSGetDiagnostic(n),
            t = "Number: " + n + "\nDescription: " + i + "\nDiagnostic: " + e;
        return void alert("Error - Could not terminate communication with the LMS.\n\nYour results may not be recorded.\n\n" + t)
    }
}

function ScormProcessGetValue(r) {
    var n;
    if (0 != initialized && 1 != finishCalled) {
        if (n = API.LMSGetValue(r), "" == n) {
            var i = API.LMSGetLastError();
            if (i != SCORM_NO_ERROR) {
                var e = API.LMSGetErrorString(i),
                    t = API.LMSGetDiagnostic(i),
                    o = "Number: " + i + "\nDescription: " + e + "\nDiagnostic: " + t;
                return alert("Error - Could not retrieve a value from the LMS.\n\n" + o), ""
            }
        }
        return n
    }
}

function ScormProcessSetValue(r, n) {
    var i;
    if (0 != initialized && 1 != finishCalled && (i = API.LMSSetValue(r, n), i == SCORM_FALSE)) {
        var e = API.LMSGetLastError(),
            t = API.LMSGetErrorString(e),
            o = API.LMSGetDiagnostic(e),
            a = "Number: " + e + "\nDescription: " + t + "\nDiagnostic: " + o;
        return void alert("Error - Could not store a value in the LMS.\n\nYour results may not be recorded.\n\n" + a)
    }
}

function initSuspendData() {
    var mainObj = {};
    var getSuspendedData = ScormProcessGetValue('cmi.suspend_data');
    if (getSuspendedData == '') {
        var defaultSuspendData = JSON.stringify(mainObj);
        ScormProcessSetValue('cmi.suspend_data', defaultSuspendData);
    }
}

//Returns a Json Object, Array, Number or String Depending on your values
function getSuspendDataValue(strObjProperty) {
    var getSuspendedData = ScormProcessGetValue('cmi.suspend_data');
    var mainObj = JSON.parse(getSuspendedData);

    var testText1 = strObjProperty.substring(0, 7);

    if (!(testText1 == 'mainObj')) {
        strObjProperty = 'mainObj.' + strObjProperty;
    }

    return eval(strObjProperty);
}

function setSuspendDataValue(strObjProperty, objValue) {
    var getSuspendedData = ScormProcessGetValue('cmi.suspend_data');
    var mainObj = JSON.parse(getSuspendedData);

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

    ScormProcessSetValue('cmi.suspend_data', mainObj);
    SCORM_CommitData();
}

function isElmsConnected() {
    try {
        var isScoreworking = SCORM_GetScore();
        if (isScoreworking !== null) {
            //alert('1');
            return 1;
        } else {
            //alert('2');
            return 0;
        }
    } catch (err) {
        //alert(err);
        return null;
    }
}

var findAPITries = 0,
    SCORM_TRUE = "true",
    SCORM_FALSE = "false",
    SCORM_NO_ERROR = "0",
    finishCalled = !1,
    initialized = !1,
    API = null;