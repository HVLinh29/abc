$(document).ready(function () {
    /* FORM CONTACT */
    $('#submitbt').click(function () {
        if (checker()) {
            document.contact.submit();
        }
    });

    var alert_info = $('#alert_info_pro').val();
    alert_info1 = alert_info ? JSON.parse(alert_info) : [];

});

function checker() {
    $('label.label_error').prev().remove();
    $('label.label_error').remove();
    email_new = $('#email_new').val();

    if (!notEmpty("contact_name",alert_info1[1])) {
        return false;
    }



    if (!lengthMin("contact_name", 6, alert_info1[2])) {
        return false;
    }
    if (!notEmpty("contact_email", alert_info1[3]))
        return false;

    if (!notEmpty("contact_email", alert_info1[3])) {

        if (!emailValidator("contact_email", alert_info1[4])) {
            return false;
        }
    } else {

    }

    if (!notEmpty("contact_phone", alert_info1[5]))
        return false;

    if (!isPhone("contact_phone", alert_info1[6]))
        return false;

    if (!lengthMin("contact_phone", 8, alert_info1[6])) {
        return false;
    }
    if (!lengthMax("contact_phone", 11, alert_info1[6])) {
        return false;
    }



    if (!notEmpty("message", alert_info1[7])) {
        return false;
    }

    return true;
}

function checkFormsubmit() {
    $('label.label_error').prev().remove();
    $('label.label_error').remove();
    email_new = $('#email_new').val();

    alert('is here');
    // return false;
    if (!notEmpty("contact_name", "Bạn chưa nhập họ và tên")) {
        return false;
    }
    if (!lengthMin("contact_name", 6, '"Họ tên của bạn" phải 6 kí tự trở lên, vui lòng sửa lại!')) {
        return false;
    }

    if (!notEmpty("contact_phone", "Bạn chưa nhập số điện thoại."))
        return false;

    if (!isPhone("contact_phone", "Số điện thoại không đúng."))
        return false;

    if (!lengthMin("contact_phone", 8, 'Số điện thoại không đúng.')) {
        return false;
    }
    if (!lengthMax("contact_phone", 11, 'Số điện thoại không đúng.')) {
        return false;
    }

    if (notEmpty("contact_email", "Bạn chưa nhập Email")) {

        if (!emailValidator("contact_email", "Emal không đúng định dạng")) {
            return false;
        }
    } else {

    }


    if (!notEmpty("contact_address", "Bạn chưa nhập địa chỉ")) {
        return false;
    }


    if (!notEmpty("txtCaptcha", "Nhập mã xác minh"))
        return false;



}

