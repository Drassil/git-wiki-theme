
(function ($) {
    //
    // RED LINK FEATURE (Hacky)
    // TODO: filter external links
    $.fn.redLinks = function () {
        $('a').each(function () {
            // avoid red link for external urls
            if (this.hostname != window.location.hostname)
                return;

            var ext = this.href.split('.').pop().split(/\#|\?/)[0];

            if (ext != "html")
                this.css('color', 'red'); // pessimistic condition

            var that = this;
            $.ajax({
                type: 'HEAD',
                url: this.href,
                success: function () {

                },
                error: function (xhr, ajaxOptions, thrownError) {
                    if (xhr.status == 404) {
                        $(that).css('color', 'red');
                    } else (xhr.status == 200) {
                        $(that).css('color', '');
                    }
                }
            });
        });
    };

})(jQuery);
