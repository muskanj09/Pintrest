$(document).ready(function(){
    $('.js--animate-1').waypoint(function(direction){
        $('.js--animate-1').addClass('animated animate__backInDown')
    },{
        offset:'25%'
    })
    $('.js--animate-2').waypoint(function(direction){
        $('.js--animate-2').addClass('animated animate__backInUp')
    },{
        offset:'35%'
    })
})