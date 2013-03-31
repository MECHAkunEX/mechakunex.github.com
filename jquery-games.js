$(window).load(function(){
    var $rows = $('#games tbody tr');
    $('#gamefilter').keyup(function() {
        var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

        $rows.show().filter(function() {
            var cells = this.getElementsByTagName('td');
            var game = cells[2];
            var text = $(game).text().replace(/\s+/g, ' ').toLowerCase();
            return !~text.indexOf(val);
        }).hide();
    });

    $('#sysfilter').keyup(function() {
        var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

        $rows.show().filter(function() {
            var cells = this.getElementsByTagName('td');
            var game = cells[1];
            var text = $(game).text().replace(/\s+/g, ' ').toLowerCase();
            return ! (text.substring(0,val.length) == val);
        }).hide();
    });

});
