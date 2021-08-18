//Global Variables
var totalTasks = parent.pageArray.length;
var currentScore = parent.ScormProcessGetValue("cmi.core.score.raw", score);
var pageNumber = parseInt(window.parent.ScormProcessGetValue("cmi.core.lesson_location"));
var score = 0;
var arrTrack = [];


if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(elt /*, from*/ ) {
        var len = this.length >>> 0;

        var from = Number(arguments[1]) || 0;
        from = (from < 0) ? Math.ceil(from) : Math.floor(from);
        if (from < 0)
            from += len;

        for (; from < len; from++) {
            if (from in this &&
                this[from] === elt)
                return from;
        }
        return -1;
    };
}

var unique = function(origArr) {
    var newArr = [],
        origLen = origArr.length,
        found,
        x, y;

    for (x = 0; x < origLen; x++) {
        found = undefined;
        for (y = 0; y < newArr.length; y++) {
            if (origArr[x] === newArr[y]) {
                found = true;
                break;
            }
        }
        if (!found) newArr.push(origArr[x]);
    }
    return newArr;
}

function isEmpty(val) {
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}

function isElmsConnected() {
    try {
        var isScoreworking = parent.SCORM_GetScore();
        if (isScoreworking !== null) {
            return 1;
        } else {
            return 0;
        }
    } catch (err) {
        return null;
    }
}

function checkCompletion() {
    if (isElmsConnected() == 1) {
        var initObjScore = parent.currentPage;
        if (pageNumber > initObjScore) {
            enableNextButton();
            return 1;
        } else {
            return 0;
        }
    } else {
        return 0;
    }

}

function closeWindow() {
    //parent.doUnload();
    top.close();
}

function getSlideURL() {
    var slideURL = document.location.href.match(/[^\/]+$/)[0];
    return slideURL;
}

function disableNextButton() {
    $("#butNext").addClass("disabled");
}

function enableNextButton() {
    $("#butNext").removeClass("disabled");
}

function requiredReading() {
    var butNext = document.getElementById("butNext");
    var result = hasClass(butNext, 'disabled');
    if (result == 1) {
        displayWarningMessage();
    } else {
        parent.doNext();
    }
}

function displayWarningMessage() {
    var alertMsg = $("#warning_message").html();
    alert(alertMsg);
}

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function enableSidebarMenu() {

    //Adding some CSS styles
    $("#sidebar-menu a").addClass("disabled-link");


    if (isElmsConnected() == 1) {
        var enableMenus = "";
        var enableMenusClick = "";
        var enableMenusScripts = "";
        var indexArr = [],
            l = $('#sidebar-menu li');

        for (var i = 0; i < l.length; i++) {

            var link = '.item-' + (i + 1);
            link = link + ' a';
            //get the value of each href
            var href = $(link).attr('href');
            href = href;
            //find the array location of href in parent.pageArray
            var pageArrayLoc = parent.pageArray.indexOf(href);

            if (pageNumber >= pageArrayLoc) {
                enableMenusClick += "$('" + link + "').click(function(){parent.gotoPageNumber(" + pageArrayLoc + ");});";
                enableMenus += "$('" + link + "').removeClass( 'disabled-link');";

            }
        }

        eval(enableMenusClick);
        eval(enableMenus);


        $(".subpage-menu li a").addClass("disabled-link");

        var completedSubPages = new Array();
        var sidebarSubPageClass = new Array();
        var subMenusHref = new Array();
        var addSubMenusHref = "";
        var enableSubMenus = "";

        var oldCompletedPages = parent.getSuspendDataValue('completedPages');
        if (!(oldCompletedPages == undefined)) {
            for (i = 0; i < oldCompletedPages.length; i++) {
                completedSubPages.push(oldCompletedPages[i]);
            }

            $('#sidebar-menu li a').each(function() {
                var href = $(this).attr('href');
                for (i = 0; i < completedSubPages.length; i++) {
                    if (href == completedSubPages[i]) {

                        sidebarSubPageClass.push($(this).parent().attr("class"));
                        subMenusHref.push(href);
                    }
                }
            });

            for (i = 0; i < sidebarSubPageClass.length; i++) {

                enableSubMenus += "$('." + sidebarSubPageClass[i] + " a').removeClass( 'disabled-link');";
            }

            eval(enableSubMenus);
        }


        $("#sidebar-menu li a").removeAttr("href");

        if (!(oldCompletedPages == undefined)) {
            for (i = 0; i < subMenusHref.length; i++) {
                addSubMenusHref += "$('." + sidebarSubPageClass[i] + " a').attr('href', '" + subMenusHref[i] + "');";
            }


            eval(addSubMenusHref);
        }

    }


}


function collapseableMenu(intStartLi, intCount, strIDClass, intSubMenuCount, strLinkTitle) {

    //SubPage Menu

    var applendSubpageLi = "";
    var subpageLi = intStartLi;

    applendSubpageLi += "$(document).ready(function() {";
    applendSubpageLi += "$('.item-" + subpageLi + "').has('ul').ready(function() {";
    applendSubpageLi += "$('.item-" + subpageLi + " ul li').each(function(index) {";
    applendSubpageLi += "$('.item-" + subpageLi + " ul li').clone().appendTo('.item-" + subpageLi + "');";
    applendSubpageLi += "$('.item-" + subpageLi + " ul li').remove();";
    applendSubpageLi += "$('.item-" + subpageLi + " ul').remove();";
    applendSubpageLi += "});});});";

    eval(applendSubpageLi);



    intStartLi = intStartLi - 1;
    var intCount = intStartLi + intCount;
    var createSubMenuScripts = "";
    var createSubMenuStyles = "";
    var clonedItems = "";
    var removeItems = "";
    var appendLi = "";
    var appendUl = "";
    var appendItemstoUl = "";
    var appendClicktoItems = "";
    var onclickShowHideMain = "";
    var onclickShowHide = "";

    if (strLinkTitle == null) {
        strLinkTitle = "Insert Title";
    }

    appendLi += "$('" + strIDClass + "').after(" + '"' + "<li class='sub-menus' id='sub-main-menu-" + intSubMenuCount + "' > <a href='#' class='disabled-link'>" + strLinkTitle + "<span class='caret'></span></a></li>" + '"' + ");";
    appendUl += "$('#sub-main-menu-" + intSubMenuCount + "').append(" + '"' + "<ul id='sub-menu-" + intSubMenuCount + "' ></ul>" + '"' + ");";
   

    for (var i = intStartLi; i < intCount; i++) {
        var link = '.item-' + (i + 1);
        clonedItems += "var clonedItems" + i + "= $('" + link + "').prop('outerHTML');";
        removeItems += "$('" + link + "').remove();";
        appendItemstoUl += "$('#sub-menu-" + intSubMenuCount + "').append(clonedItems" + i + ");";
        if (pageNumber >= i) {
            appendClicktoItems += "$('#sub-menu-" + intSubMenuCount + " " + link + "').click(function(){parent.gotoPageNumber(" + i + ");});";
        }
    }

    if (pageNumber >= intStartLi) {
        onclickShowHideMain += "$('li.sub-menus#sub-main-menu-" + intSubMenuCount + " > a').removeClass( 'disabled-link' )";
    }

    onclickShowHide += "$('li.sub-menus#sub-main-menu-" + intSubMenuCount + "').click(function () { $('li.sub-menus#sub-main-menu-" + intSubMenuCount + " ul').toggleClass('show');});";
    createSubMenuScripts += clonedItems;
    createSubMenuScripts += removeItems;
    createSubMenuScripts += appendLi;
    createSubMenuScripts += appendUl;
    createSubMenuScripts += appendItemstoUl;
    createSubMenuScripts += appendClicktoItems;
    createSubMenuScripts += onclickShowHide;
    createSubMenuScripts += onclickShowHideMain;
    eval(createSubMenuScripts);
    
    createSubMenuStyles += "<style>";
    createSubMenuStyles += "#sub-menu-" + intSubMenuCount + " { display: none; -webkit-transition: display 5s ease-in-out; transition: display 5s ease-in-out;}";
    createSubMenuStyles += "#sub-main-menu-" + intSubMenuCount + " ul.show{ display: block; }";
    createSubMenuStyles += " #sidebar-menu span.caret { margin-left: 5px; }";
    createSubMenuStyles += "</style>";
    $("body").after(createSubMenuStyles);

}

$(document).ajaxComplete(function(event, xhr, settings) {

    switch (settings.url) {
        case '../include/footer.html':
            $(".menu-btn").unbind("click");
            $('.menu-btn').bind("click", function() {
                $('.menu').toggleClass("open");
            });
            $(document).ready(function() {
                if (isElmsConnected() == 1) {
                    //Scorm Navigation
                    $(".next-btn").attr("id", "butNext");

                    if ($("body").hasClass("required")) {
                        $("body").ready(function() {
                            disableNextButton();
                            checkCompletion();
                        });
                        $(".next-btn").bind("click", function() {
                            requiredReading();
                        });

                    } else {

                        $(".next-btn").bind("click", function() {
                            parent.doNext();
                        });
                    }

                    $(".previous-btn").bind("click", function() {
                        parent.doPrevious();
                    });

                    var slideURL = document.location.href.match(/[^\/]+$/)[0];
                    var slideName = slideURL.replace('.html', '');

                } else {

                    var slideURL = document.location.href.match(/[^\/]+$/)[0];
                    var slideURLName = slideURL;
                    var pageArrayNum = parent.pageArray.indexOf(slideURLName);
                    var prevPageArray = pageArrayNum - 1;

                    if (prevPageArray != -1) {
                        try {
                            var prevURL = parent.pageArray[prevPageArray].replace('slides/', '');
                        } catch (e) {
                            return null;
                        }

                        $('.previous-btn').attr("prevPage", prevURL);
                        $('.previous-btn').unbind("click");
                        $('.previous-btn').bind("click", function() {
                            if ($(this).attr("prevPage") && $(this).attr("prevPage") != "") {
                                window.location = $(this).attr("prevPage");
                            }
                        });
                    }

                    var nextPageArray = pageArrayNum + 1;

                    try {
                        var nextURL = parent.pageArray[nextPageArray].replace('slides/', '');
                    } catch (e) {
                        return null;
                    }

                    $('.next-btn').attr("nextPage", nextURL);
                    $(".next-btn").unbind("click");
                    $(".next-btn").bind("click", function() {

                        //for slides with required reading sections
                        if ($(".next-btn").hasClass("disabled")) {
                            var alertMsg = $("#warning_message").html();
                            alert(alertMsg);
                        } else {

                            if ($(".next-btn").attr("nextPage") && $(".next-btn").attr("nextPage") != "") {
                                window.location = $(this).attr("nextPage");
                            }

                        }
                    });


                }
            });

            break;

        case "../include/menu.html":
            //place code to handle menu items here
            break;

        default:
            break;
    }
});