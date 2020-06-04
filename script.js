$(function(){

    // Open Form
    $(document).on('click', '#get_form', () => {
        $('.contact-section').addClass('active');
    });

    // Close Form
    $(document).on('click', '#contact-close', () => {

        $('.contact-section').removeClass('active');

        // Reset Form
        $('.contact-form')[0].reset();
    });


    // Submit Fomrm
    $(document).on('submit', '.contact-form', (e) => {
        e.preventDefault();

        $('.contact-form .check-valid').each((value, element) => {
            $(element).removeClass('in-valid');

            if($.trim($(element).val()) !== '') {
                let id = $(element).attr('id');

                if(id == 'email'){
                    if(IsEmail($('#email').val()) == false){
                        $('#email').addClass("in-valid");
                        $('#email').next().text('Please Enter Valid Email.');
                        return false
                    }
                }

            } else {
                $(element).addClass('in-valid');
                return false;
            }


        });

        if($('.contact-form').find('.in-valid').length){
            // Error
            console.log('not done');
            return false;
        } else {
            // Success
            console.log('done');
            return true;
        }
    });


});

// Email Validation Pattern
function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regex.test(email)) {
        return false;
    } else {
        return true;
    }
}
