function submitSearch_mobile(){

    url = '';
    var keyword = $('#keyword_mobile').val();
    //alert(keyword);return;
    keyword = encodeURIComponent(encodeURIComponent(keyword));
// var link_search = $('#link_search').val();
    var link_search = $('#link_search_mobile').val();
    if(keyword!= 'Nhập từ khóa tìm kiếm...' && keyword != '') {
        url += '&keyword='+keyword;
        var check = 1;
    }else{
        var check =0;
    }
    if(check == 0){
        alert('Bạn phải nhập tham số tìm kiếm');
        return false;
    }
    var link = link_search+'/'+keyword+'.html';
    window.location.href=link;
    return false;
}
