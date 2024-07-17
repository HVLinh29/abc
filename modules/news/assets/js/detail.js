function active_menu_chinh(){
    $("#cssmenu").show();
    $(".menu_2").hide();

}
function view_modal($sx,$id){
    // var $id = id;
// alert(1);
    $.ajax({
        type: 'GET',
        dataType: 'html',
        url: '/index.php?module=news&view=news&raw=1&task=view_modal&sapxep='+$sx,
        data: "id=" + $id,
        async: false,
        success: function ($html) {
            $(".modal_pop").html($html);
            // $('.modal_pop').html(data);
            // $("#img_slide").modal('show');
            aaaa();
            $(".carousel").on("touchstart", function (event) {
                var xClick = event.originalEvent.touches[0].pageX;
                $(this).one("touchmove", function (event) {
                    var xMove = event.originalEvent.touches[0].pageX;
                    if (Math.floor(xClick - xMove) > 5) {
                        $(this).carousel('next');
                    }
                    else if (Math.floor(xClick - xMove) < -5) {
                        $(this).carousel('prev');
                    }
                });
                $(".carousel").on("touchend", function () {
                    $(this).off("touchmove");
                });
            });

        }
    });
}

function aaaa() {
    $('.carousel').carousel({
        // interval: 9000,
        // slideSpeed: 9000,
        // paginationSpeed: 9000,
        // dots: true,
        // infinite: true,
        auto:false,
        interval: false,
    });
    $(".carousel").on("touchstart", function (event) {
        var xClick = event.originalEvent.touches[0].pageX;
        $(this).one("touchmove", function (event) {
            var xMove = event.originalEvent.touches[0].pageX;
            if (Math.floor(xClick - xMove) > 5) {
                $(this).carousel('next');
            }
            else if (Math.floor(xClick - xMove) < -5) {
                $(this).carousel('prev');
            }
        });
        $(".carousel").on("touchend", function () {
            $(this).off("touchmove");
        });
    });
}

$(document).ready(function() {

    $('.content_upcoming').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        autoplay:false,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('#image-gallery').lightSlider({
        gallery:true,
        item:1,
        thumbItem:9,
        slideMargin: 0,
        speed:500,
        auto:false,
        loop:true,
        currentPagerPosition:'left',

        onSliderLoad: function() {
            $('#image-gallery').removeClass('cS-hidden');
        }
    });
    $('#imageGallery').lightSlider({
        gallery:true,
        item:1,
        loop:true,
        thumbItem:9,
        slideMargin:0,
        enableDrag: false,
        currentPagerPosition:'left',
        onSliderLoad: function(el) {
            el.lightGallery({
                selector: '#imageGallery .lslide'
            });
        }
    });



    // var h = document.getElementById('get_height').offsetHeight;
  


    lightGallery(document.getElementById('board'), {
        thumbnail: true,
    });
});
$('.load_more').click(function(){
    var pagecurrent = $(this).attr( "data-pagecurrent" );
    var nextpage = $(this).attr( "data-nextpage" );
    var limit = $(this).attr( "limit" );
    // var start = $(this).attr( "data-start" );
    // var end = $(this).attr( "data-end" );
    var id = $(this).attr( "data-id" );
    var dclass = $(this).attr( "data-class" );
    var id_pr = $(this).attr( "id_pr" );
    // var col = $(this).attr( "data-col" );
    // var col2 = $(this).attr( "data-col2" );

    pagecurrent = Number(pagecurrent);
    nextpage = Number(nextpage);

    $(this).attr("data-pagecurrent",nextpage);
    $(this).attr("data-nextpage",nextpage+1);
    // alert(limit);
    $.ajax({
        type : 'GET',
        dataType: 'html',
        url : '/index.php?module=news&view=news&raw=1&task=nextnews',
        data: 'id='+id+'&pagecurrent='+pagecurrent+'&limit='+limit+'&dclass='+dclass+'&id_pr='+id_pr,
        success : function(html){
            if (html == '') {
                $('.load_more').hide();
            } else {
                $('.duankhac').append(html);
            }
        }
    });
})