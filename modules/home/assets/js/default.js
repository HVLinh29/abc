function active_menu($i){
    $("#item_lv2"+$i).show();
    $(".active_menu_none").hide();
}
function active_menu_chinh(){
    $(".active_menu_chinh").show();
    $(".item_lv2").hide();
}

$(document).ready(function(){
    $(".wrapper .bao_icon .swiper-pagination-bullet").html("<i class=\"fa fa-chevron-down\"></i>")
});