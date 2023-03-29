// keypress

function FilterInput (event) {
    var chCode = ('charCode' in event) ? event.charCode : event.keyCode;

        // returns false if a numeric character has been entered
    return (chCode < 48 /* '0' */ || chCode > 57 /* '9' */);
};
