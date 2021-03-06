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
        var rev = false;
        if ( val[0] == '!' ) {
            val = val.substring(1);
            rev = true; 
        }

        $rows.show().filter(function() {
            var cells = this.getElementsByTagName('td');
            var game = cells[1];
            var text = $(game).text().replace(/\s+/g, ' ').toLowerCase();
            var eq = (text.substring(0,val.length) == val);
            var pclike = (text == "gog") || (text == "steam")
                || (text == "pc") || (text == "rift")
                || ( text == "humble") || ( text == "battle.net" );
            var ret = (val == "pclike") ? pclike : eq;
            if ( rev ) {
                return ret;
            } else {
                return ! ret;
            }
        }).hide();
    });

});
