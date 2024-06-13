$(document).ready(function(){
    // Show the initial section
    $('.content-section').first().addClass('active');

    // Scroll to section on tab click
    $('.list-group-item').on('click', function(event) {
        event.preventDefault();
        var target = $(this).attr('href');
        var $target = $(target);
        
        // Show the corresponding section
        $('.content-section').removeClass('active');
        $target.addClass('active');
        
        // Highlight the selected tab
        $('.list-group-item').removeClass('active');
        $(this).addClass('active');
        
        // Update the URL hash
        window.location.hash = target;
        
        // Scroll to the section without animation
        window.scrollTo({
            top: $target.offset().top - 100, // Offset for fixed navbar + additional margin
            behavior: 'auto'
        });
    });
});
