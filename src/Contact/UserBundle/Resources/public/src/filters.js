myModule
    .filter('removeUnderscore', function() {

    return function(input) {
        var output = input.replace('_', ' ');
        return output;
    }
});