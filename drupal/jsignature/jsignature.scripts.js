
(function($) {
    $(document).ready(function() {
        $('.field-name-field-signature label').prepend( "Trainee ");
        $('.field-name-field-signature #signature').jSignature();
        $('.field-name-field-signature .jSignature').attr('id','canvas');
        var canvas1 =  $('.field-name-field-signature .jSignature')[0];
        var ctx1 = canvas1.getContext('2d');
        var width1 = canvas1.width;
        var height1 = canvas1.height;
        ctx1.fillStyle = '#fffffffff';  /// set white fill style
        //ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx1.fillRect(0, 0, width1, height1);
        //horizontal_2px_Gray('field-name-field-signature');
        //ctx1.strokeStyle = "black";

        $('.field-name-field-signature-author label').prepend( "Trainor ");
        $('.field-name-field-signature-author #signature').jSignature();
        $('.field-name-field-signature-author .jSignature').attr('id','canvas-author');
        var canvas2 =  $('.field-name-field-signature-author .jSignature')[0];
        var ctx2 = canvas2.getContext('2d');
        var width2 = canvas2.width;
        var height2 = canvas2.height;
        ctx2.fillStyle = '#ffffff';  /// set white fill style
        //ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx2.fillRect(0, 0, width2, height2);
        //horizontal_2px_Gray('field-name-field-signature-author');
        //ctx2.strokeStyle = "black";
    });
       
})(jQuery);

function resetSignature(obj){
        
    (function($) {
       
        $targetCanvas = $(obj).parent().parent().attr('id');
        var $sigdiv = $("#" + $targetCanvas + " #signature");
        $sigdiv.jSignature("reset");
        $("#" + $targetCanvas + " #signatureimage").val('');
        $("#" + $targetCanvas + " #signatureimage").trigger('input');
        var canvas =  $("#" + $targetCanvas + " .jSignature")[0];
        var ctx = canvas.getContext('2d');
        var width = canvas.width;
        var height = canvas.height;
        ctx.fillStyle = '#fff';  /// set white fill style
        //ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(0, 0, width, height);
       // horizontal_2px_Gray(obj);
        //ctx.strokeStyle = "black";
        
     
    })(jQuery);
}

function captureSignature(){
  
    (function($) {
        var targetCanvas1 = ".field-name-field-signature";
        var canvas1 = $("#canvas");
        var dataURL1 = canvas1[0].toDataURL();
        var fullQuality1 = canvas1[0].toDataURL("image/jpeg", 1.0);
            $(targetCanvas1 + " #signatureimage").val('');
            $(targetCanvas1 + " input.jsignature").val('');
            $(targetCanvas1 + " input.jsignature").val(fullQuality1);
            $(targetCanvas1 + " input.jsignature").trigger('input');

        var targetCanvas2 = ".field-name-field-signature-author";
        var canvas2 = $("#canvas-author");
        var dataURL2 = canvas2[0].toDataURL();
        var fullQuality2 = canvas2[0].toDataURL("image/jpeg", 1.0);
            $(targetCanvas2 + " #signatureimage").val('');
            $(targetCanvas2 + " input.jsignature").val('');
            $(targetCanvas2 + " input.jsignature").val(fullQuality2);
            $(targetCanvas2 + " input.jsignature").trigger('input');

    })(jQuery);
}


  function horizontal_2px_Gray(obj) {
    

      (function($) {
            if (isObject(obj)){
                $targetCanvas = $(obj).parent().parent().attr('id');
                var canvas =  $("#" + $targetCanvas + " .jSignature")[0];
            } else {
                $targetCanvas = obj;
                var canvas =  $("." + $targetCanvas + " .jSignature")[0];
            }
             
            var ctx = canvas.getContext('2d');
            var width = canvas.width;
            var height = canvas.height;
            var sixPercentofWidth = Math.round(width * .06);
            height = height - sixPercentofWidth;
            width = width - sixPercentofWidth;
            ctx.beginPath();
            ctx.moveTo(sixPercentofWidth, height);
            ctx.lineTo( width, height);
            //ctx.strokeStyle = "red";
           // ctx.setLineDash([5, 15]);
            ctx.stroke();
        
       })(jQuery);
  }

function isObject(val) {
    return val instanceof Object; 
}