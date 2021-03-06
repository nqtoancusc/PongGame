String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "");
};

$(function() {
	function validateEmail(email) {
		var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	$('#btnRegister').bind('touchstart click', function(){
		if(!$('input:radio[name=question1]').is(':checked')) {
			$('#message').show();
			$('#inner-message').html('Vastaa ensimmäiseen kysymykseen');
			return false;
		} else if(!$('input:radio[name=question2]').is(':checked')) {
			$('#message').show();
			$('#inner-message').html('Vastaa toiseen kysymykseen');
			return false;
		} else if($('input:text[name=email]').val().trim() == '') {
			$('#message').show();
			$('#inner-message').html('Anna sähköpostiosoitteesi');
			return false;
		} else if (!validateEmail($('input:text[name=email]').val())) {
			$('#message').show();
			$('#inner-message').html('Sähköpostiosoitteesi on väärässä muodossa');
			return false;
		} else if($('input:text[name=name]').val().trim() == '') {
			$('#message').show();
			$('#inner-message').html('Anna nimesi');
			return false;
		}  else if($('input:text[name=phone]').val().trim() == '') {
			$('#message').show();
			$('#inner-message').html('Anna puhelinnumerosi');
			return false;
		} else {
			$('#inner-message').html('');
			$('#message').hide();
			return true;
		}
	});

	$('html').click(function() {
		$('#inner-message').html('');
		$('#message').hide();
	});
});
