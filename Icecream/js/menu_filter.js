$(document).ready(function(){
    $('.filter-a').on('click',function(){
        let value = $(this).attr('data-filter');
        if(value=="all"){
            $('.filter').show('1000');
        }
        else{
            $('.filter').not('.'+value).hide('1000');
            $('.filter').filter('.'+value).show('1000');
        }
        $('.filter-a').removeClass('selected');
        $(this).addClass('selected')
    });
});