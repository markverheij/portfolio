// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

//# TODO Set URL to New page

jQuery(document).ready(function(event) {
    $('body').on('click', '[data-type="page-transition"]', function (event) {

        event.preventDefault();

        var newPage = $(this).attr('href');

        changePage(newPage)

    });

    var changePage = function (url) {
        $('body').addClass('page-is-changing');

        loadNewContent(url)
    };

    var loadNewContent = function (url) {
        var newSectionName = url + '-page'
        section = $('<div class="container ' + newSectionName + '"></div>');

        section.load(url  + ' .container > *', function () {

            setTimeout(function(){
                //wait for the end of the transition on the loading bar before revealing the new content
                $('.content-holder').html(section);
                $('body').removeClass('page-is-changing');
            }, 2000);

        })

    }
});