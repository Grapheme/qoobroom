window.mobilecheck = function() {
var check = false;
(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
return check; }

var popupStatus = false,
	overlay = $('.overlay'),
	formClose = $('.form-close'),
	orderACall = $('.order-a-call'),
	dl3D = $('.dl-3D-download'),
	iDesigner = $('#iDesigner'),
	iBuyer = $('#iBuyer'),
	designerInvite = $('.form-invite-designers'),
	buyerInvite = $('.form-invite-buyers'),
	rombicFigures = $('.rombic-figures'),
	designerDocs,
	timer,
	/*----------- Offsets ------------*/
	$bodyPosition = $('body').scrollTop(),
	$stabHerbOffset= $('.stab-herb').offset().top,
	/*-----------------------Flags for scrolling---------------------*/
	bodyStartOffset = 700,	
	stabHerbFlag = false,
	verticalSectFlag = false,
	dlBookletFlag = false,
	complexWallsFlag = false,
	whereNeedFlag = false,
	whyChooseUsFlag = false,
	partnershipFlag = false,
	projectsFlag = false,
	callUsFlag = false,
	choosersFlag = false,
	dl3DFlag = false,
	/*------------fade elems container-------------*/
	fadeContainer,
	/*-------------sections-and offsets-----------*/
	$stabSection = $('.stab-herb'),
	$verticalSect = $('.vertical-walls'),
	$dlBookletSect = $('.dl-booklet'),
	$complexWallSect = $('.complex-walls'),
	$dl3DSect = $('.dl-3D'),
	$whereNeedSect = $('.where-need-article.where-need'),
	$whyChooseUsSect = $('article .why-choose-us'),
	$partnership = $('.where-need.partnership'),
	$projects = $('.projects-article .where-need.projects'),
	$choosersSect = $('.why-choose-us.choosers'),
	$callUs = $('.call-us');
	
function togglePopup(elem) {
	if ( popupStatus === false ) {
		overlay.fadeIn( 200, function(){ popupStatus = true; if (elem) elem.fadeIn( 200 ).css({ 'top': '50%' }); });
	}
	else {
		overlay.children('div').css({ 'top': '130%' }).parent().delay( 350 ).fadeOut( 200, function(){ popupStatus = false; overlay.children('div').removeAttr('style').hide(); });
	}	
}
/*-------Set an animation for romb elemnts onLoad event-------*/
function animateOnLoad() {
	/*set elements to animate*/
	var $fadeElems = $('.rombic-figures .right__fade, .rombic-figures .left__fade'),
		$noRotate = $('.interier-romb.right-int, .interier-romb.left-int, .contacts, .mission-header, .delivery-info');
			
		$fadeElems.css({ 'opacity': '1', '-moz-transform': 'translate(0px, 0px) rotate(45deg)', '-o-transform': 'translate(0px, 0px) rotate(45deg)', '-webkit-transform': 'translate3d(0px, 0px, 0px) rotate(45deg)', '-ms-transform': 'translate(0px, 0px) rotate(45deg)', 'transform': 'translate(0px, 0px) rotate(45deg)'}); 
		$noRotate.css({ 'opacity': '1', '-moz-transform': 'translate(0px, 0px)', '-o-transform': 'translate(0px, 0px)', '-webkit-transform': 'translate3d(0px, 0px, 0px)', '-ms-transform': 'translate(0px, 0px)', 'transform': 'translate(0px, 0px)'}); 
}
function dontAnimateMobile() {
	$('.left_func, .right_func').css({ 'opacity': '1', '-moz-transform': 'translate(0px, 0px)', '-o-transform': 'translate(0px, 0px)', '-webkit-transform': 'translate3d(0px, 0px, 0px)', '-ms-transform': 'translate(0px, 0px)', 'transform': 'translate(0px, 0px)'});  
}

function animateOnScroll(scrollParent) {	
	fadeContainer = scrollParent.find('.left_func, .right_func');
	if ( fadeContainer.length > 0 ) {
		timer = 0;
		scrollParent.find('.left_func').each( function(){
			var that = $(this);
			setTimeout( function(){
				that.css({ 'opacity': '1', '-moz-transform': 'translate(0px, 0px)', '-o-transform': 'translate(0px, 0px)', '-webkit-transform': 'translate3d(0px, 0px, 0px)', '-ms-transform': 'translate(0px, 0px)', 'transform': 'translate(0px, 0px)'}); 
			}, timer);	
			timer += 300;
		});
		timer = 150;
		scrollParent.find('.right_func').each( function(){			
			var rightThat = $(this);
			setTimeout( function(){
				rightThat.css({ 'opacity': '1', '-moz-transform': 'translate(0px, 0px)', '-o-transform': 'translate(0px, 0px)', '-webkit-transform': 'translate3d(0px, 0px, 0px)', '-ms-transform': 'translate(0px, 0px)', 'transform': 'translate(0px, 0px)'}); 
			}, timer);	
			timer += 300;
		});
	}
	else {
		alert('false');
	}
}
function checkRadios() {
	designerDocs = $('.NFI-wrapper');	
	if ( iDesigner.is(':checked') ){
		designerInvite.show();
		designerDocs.show();
		buyerInvite.hide();
	} 
	else {
		designerInvite.hide();
		designerDocs.hide();
		buyerInvite.show();
	}
}
function checkScroll() {
	if ( window.mobilecheck() ) {
		dontAnimateMobile();
		return;
	}
	$bodyPosition = $(document).scrollTop();
		/*-----first animate section-----*/
		if ( stabHerbFlag == false && $bodyPosition + bodyStartOffset >= $stabSection.offset().top ) {
			stabHerbFlag = true;
			animateOnScroll($stabSection);			
		}
		if ( verticalSectFlag == false && $bodyPosition + bodyStartOffset >= $verticalSect.offset().top ) {
			verticalSectFlag = true;
			animateOnScroll($verticalSect);			
		}
		if ( dlBookletFlag == false && $bodyPosition + bodyStartOffset >= $dlBookletSect.offset().top ) {
			dlBookletFlag = true;
			animateOnScroll($dlBookletSect);			
		}
		if ( complexWallsFlag == false && $bodyPosition + bodyStartOffset >= $complexWallSect.offset().top ) {
			complexWallsFlag = true;
			animateOnScroll($complexWallSect);			
		}
		if ( whereNeedFlag == false && $bodyPosition + bodyStartOffset >= $whereNeedSect.offset().top ) {
			whereNeedFlag = true;
			animateOnScroll($whereNeedSect);			
		}
		if ( dl3DFlag == false && $bodyPosition + bodyStartOffset >= $dl3DSect.offset().top ) {
			dl3DFlag = true;
			animateOnScroll($dl3DSect);			
		}
		if ( whyChooseUsFlag == false && $bodyPosition + bodyStartOffset >= $whyChooseUsSect.offset().top ) {
			whyChooseUsFlag = true;
			animateOnScroll($whyChooseUsSect);			
		}
		if ( partnershipFlag == false && $bodyPosition + bodyStartOffset >= $partnership.offset().top ) {
			partnershipFlag = true;
			animateOnScroll($partnership);			
		}
		if ( projectsFlag == false && $bodyPosition + bodyStartOffset >= $projects.offset().top ) {
			projectsFlag = true;
			animateOnScroll($projects);			
		}
		if ( choosersFlag == false && $bodyPosition + bodyStartOffset >= $choosersSect.offset().top ) {
			choosersFlag = true;
			animateOnScroll($choosersSect);			
		}
		if ( callUsFlag == false && $bodyPosition + 800 >= $callUs.offset().top ) {
			callUsFlag = true;
			animateOnScroll($callUs);			
		}
}
$(window).scroll( function(){
	checkScroll();
});

$(document).ready( function(){
	animateOnLoad();
	checkScroll();
/*-------------input styling init-----------------*/	
	$(".designer-docs").nicefileinput({
		label : 'Выберите файл'
	});	
	$('.NFI-filename').val('Файл не выбран');
/*-------------Set form condition based on radios position----------------*/
	checkRadios();
});
iDesigner.add( iBuyer ).change( function(){
	checkRadios();
});
/*---------------------radios onchange events---------------------*/


/*------stop propagation click-------------*/
$('.call-form, .call-form button').click( function(e){
	e.stopPropagation();
});

/*------click events for buttons ----------*/
overlay.add( formClose ).click( function(){
	togglePopup();
});
$('.contacts .green-button, .call-us .green-button').click( function(e){
	togglePopup(orderACall);
});
$('.dl-3D .black-button').click( function(e){
	togglePopup(dl3D);
});
/*------ free calculation ------------------*/

$(".dl-romb.free-calc").click(function() {
    $('html, body').animate({
        scrollTop: $(".calculation-form-section").offset().top
    }, 2000);
});
$('.dl-romb.model-dl').click(function() {
    $('html, body').animate({
        scrollTop: $("section.dl-3D").offset().top
    }, 2000);
});
$('.dl-romb.proj-present').click(function() {
	$('html, body').animate({
        scrollTop: $("section.dl-booklet").offset().top
    }, 2000);
});
/*-------form dynamics -----------------------*/
$('.dl-3D-download .black-button').click( function(){
	var namel = $('.name-3d-input').val().length;
	var emaill = $('.email-3d-input').val().length;
	var error = 0;
	if(namel <= 2) {
		$('.name-3d-div').addClass('error');
		error++;
	} else {
		$('.name-3d-div').removeClass('error');
	}
	if(emaill <= 5) {
		$('.email-3d-div').addClass('error');
		error++;
	} else {
		$('.email-3d-div').removeClass('error');
	}
	if(error == 0) {
		$('.download-send').html('Идет отправка...');
		$('.download-send').attr('disabled', 'disabled');
		$.post( "download3d", { 	name: $('.name-3d-input').val(), 
								email: $('.email-3d-input').val() })
  		.done(function(data) {
		if(data != 'false') {
			window.location.href = data;
	    	$('.dl-3D-download').html('<form class="call-form-success">' +
							  	'<div class="form-close">✕</div>' + 
							  	'<div class="calculation-header">Скачать 3D-модели</div>' +
							  	'<div style="display: none;" class="calculation-success">Скачивание архива началось.<br>спасибо за проявленный интерес к нашей продукции</div>' +
							  	'</form>').find('.call-form-success .calculation-success').fadeIn( 800 );
			$('.dl-3D-download .input-and-error, .dl-3D-download .black-button').fadeOut( 800 );
			}
  		});
	}							  							  
});

$('.calculation-form .black-button').click( function(){
	var namel = $('.name-calc-input').val().length;
	var emaill = $('.email-calc-input').val().length;
	var error = 0;
	if(namel <= 2) {
		$('.name-calc-div').addClass('error');
		error++;
	} else {
		$('.name-calc-div').removeClass('error');
	}
	if(emaill <= 5) {
		$('.email-calc-div').addClass('error');
		error++;
	} else {
		$('.email-calc-div').removeClass('error');
	}
	if($("#iDesigner").prop("checked")) {
		if( $('.NFI-filename').val().indexOf(".") > 0 ) {
			$('.NFI-button').css('background', '#ffffff');
		} else {
			error++;
			$('.NFI-button').css('background', '#E9A78A');
		}
	}
	
	if($("#iDesigner").prop("checked")) {
		var $type = 1;
	} else {
		var $type = 0;
	}
	
	if(error == 0) {
		$('.calc-send').html('Идет отправка...');
		$('.calc-send').attr('disabled', 'disabled');
		$.post( "calc", { 		type: $type,
								name: $('.name-calc-input').val(), 
								email: $('.email-calc-input').val(),
								file: $('.NFI-filename').val()})
  		.done(function(data) {
	    	if(data == 'success') {
				$('.calculation-form').html('<div class="calculation-success">Ваша форма заявки на расчет зеленой стены успешно отправлена.</div>');
			}
  		});
	}
});
$('.recall-send').click( function(){
	var namel = $('.name-input').val().length;
	var phonel = $('.phone-input').val().length;
	var timel = $('.time-input').val().length;
	var error = 0;
	if(namel <= 2) {
		$('.name-div').addClass('error');
		error++;
	} else {
		$('.name-div').removeClass('error');
	}
	if(phonel <= 4) {
		$('.phone-div').addClass('error');
		error++;
	} else {
		$('.phone-div').removeClass('error');
	}
	if(error == 0)
	{
		$('.recall-send').html('Идет отправка...');
		$('.recall-send').attr('disabled', 'disabled');
		$.post( "recall", { 	name: $('.name-input').val(),
								phone: $('.phone-input').val(), 
								time: $('.time-input').val() })
  		.done(function(data) {
	    	if(data == 'success') {
				$('.order-a-call').html('<form class="is-recall call-form-success">' +
										'<div class="form-close">✕</div>' + 
										'<div class="calculation-header">Скачать 3D-модели</div>' +
										'<div style="display: none;" class="is-recall calculation-success">Спасибо за внимание, скоро мы свяжемся с вами.</div>' +
										'</form>').find('.is-recall.call-form-success .is-recall.calculation-success').fadeIn( 800 );
				$('.recall-send').fadeOut( 800 );
			}
  		});
	}
	
	return false;
});
