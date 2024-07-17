
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
        url : '/index.php?module=recruitment&view=recruitment&raw=1&task=nextnews',
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