Drupal.behaviors.macromaker = function(context) {
  var $popup = $(Drupal.settings.macromaker.popup);
  var wrapper = '<div class="macro-wrapper"></div>';
  var lastFocus;

  // Insert the macro popup next to each textarea or text field.
  $('textarea, input.form-text', context).wrap(wrapper).focus(function() {
    if (lastFocus != this) {
      lastFocus = this;
      $popup.find('ul').hide();
      $popup.insertAfter(this).show();
    }
  });

  // Create click behavior on the popup.
  $popup.click(function() {
    $(lastFocus).focus();
    $('ul', this).slideToggle(300);
  });

  // Create the click behavior for each macro within the popup.
  $popup.find('a').click(function() {
    // Look up the content based on the 'rel' attribute of the clicked macro link.
    var txt = Drupal.settings.macromaker.macros[$(this).attr('rel')]['content'];

    // Insert the new content.    
    $(lastFocus).insertAtCaret(txt);

    // Returning false prevents normal click behavior from happening.
    return false;
  });
}