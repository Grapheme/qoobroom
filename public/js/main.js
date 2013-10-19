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
	$('.NFI-button').css('background', '#E9A78A');
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
		if($('.designer-docs').val()=='' ) {
			
			error++;
		} else {
			error = error-1;
		}
	}
	if(error == 0) {
		$.post( "calc", { 		type: $('.old_radio').val(),
								name: $('.name-calc-input').val(), 
								email: $('.email-calc-input').val(),
								file: $('.designer-docs').val()})
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
