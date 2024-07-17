function active_menu_chinh(){
    $("#cssmenu").show();
    $(".menu_2").hide();

}
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
        url : '/index.php?module=blog&view=blog&raw=1&task=nextnews',
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

$(document).ready(function () {
    /* FORM CONTACT */
    $('#submitbt').click(function () {
        if (checker()) {

            document.comment_add_form.submit();
        }
    });

});

function checker() {
    $('label.label_error').prev().remove();
    $('label.label_error').remove();
    email_new = $('#email_new').val();



    if (!notEmpty("name_rate", "Bạn chưa nhập họ tên")) {
        return false;
    }



    if (!notEmpty("email_rate", "Bạn chưa nhập email."))
        return false;

    if (!notEmpty("email_rate", "Bạn chưa nhập email.")) {

        if (!emailValidator("email_rate", "Emal không đúng định dạng")) {
            return false;
        }
    } else {

    }
    if (!notEmpty("full_rate", "Bạn chưa nhập đánh giá")) {
        return false;
    }


    return true;
}

$('.view-more-cm').click(function(){
    id = $('#prd_id').val();
    $.ajax({
        type : 'GET',
        dataType: 'html',
        url : '/index.php?module=blog&view=blog&raw=1&task=all_conment',
        data: "id="+id,
        success : function(data){
            $("#list-comment").html(data);
            $("#list-comment_mb").html(data);
            $(".view-more-cm").hide();
        }
    });
})

