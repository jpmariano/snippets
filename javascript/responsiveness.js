(function($) {
    var currentWindow = $(window).width();

    switch(currentWindow) {
        case currentWindow > 800: //Large Desktop
            break;
        case currentWindow > 581: //Large Tablet
            break;
        case currentWindow > 394: //Small Tablet
            break;
        case currentWindow > 222: //Mobile
            break;
        default:
    }

}(jQuery, Drupal));