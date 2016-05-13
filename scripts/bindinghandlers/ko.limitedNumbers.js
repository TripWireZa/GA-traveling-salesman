ko.bindingHandlers.limitedNumbers = {
    init: function (element, valueAccessor) {
        $(element).on("keydown", function (event) {
            // Allow: backspace, delete, tab, escape, and enter
            if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
                // Allow: Ctrl+A
                (event.keyCode == 65 && event.ctrlKey === true) ||
                // Allow: . ,
                (event.keyCode == 188 || event.keyCode == 190 || event.keyCode == 110) ||
                // Allow: home, end, left, right
                (event.keyCode >= 35 && event.keyCode <= 39)) {
                // let it happen, don't do anything
                return;
            }
            else {
                // Ensure that it is a number and stop the keypress
                if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) {
                    event.preventDefault();
                }
            }
        });
    },
    update: function(element, valueAccessor, allBindingsAccessor) {
        
        var elmParent = $(element).parent();
        var allbindings = ko.utils.unwrapObservable(allBindingsAccessor());
        var value = ko.utils.unwrapObservable(valueAccessor());
        var min = typeof allbindings.minLimit != "undefined" ? allbindings.minLimit : null;
        var max = typeof allbindings.maxLimit != "undefined" ? allbindings.maxLimit : null;
        
        // remove previous styles
        if (elmParent.hasClass("has-error")) {
            elmParent.removeClass("has-error");
        }
         
        //set styles for min/max
        if(min != null && $(element).val() < min)
            elmParent.addClass("has-error");
        if(max != null && $(element).val() > max)
            elmParent.addClass("has-error");
    }
};