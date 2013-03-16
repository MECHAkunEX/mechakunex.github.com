$(window).load(function(){
    var $rows = $('#games tbody tr');
    $('#filter').keyup(function() {
        var val = $.trim($(this).val()).replace(/ +/g, ' ');

        $rows.show().filter(function() {
            var text = $(this).text().replace(/\s+/g, ' ');
            return !~text.indexOf(val);
        }).hide();
    });
});
