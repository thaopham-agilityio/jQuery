$(document).ready(function() {
    // $('.screens-container').css({'height':($(document).height())+'px','width':($(document).width())+'px','transform': 'translate3d(0px, 0px, 0px)'});
    // $(window).resize(function(){
    //     $('.screens-container').css({'height':($(document).height())+'px','width':($(document).width())+'px','transform': 'translate3d(0px, 0px, 0px)'});
    // });
	var 
		$home = $('#part-home'),
        $body = $('body'),
		$screenNav = $home.find('.screens-nav'),
        $screenContainer = $home.find('.screens-container');

	$screenNav.find('li').first().addClass('active').siblings().removeClass('active');
	$screenNav.on('click', 'li', function(event) {
		var
			$this = $(this),
			index = $this.index('li'),
			$findScreen = $screenContainer.find( '.screen:eq('+index+')' );

		$this.addClass('active').siblings().removeClass('active');
		$('.screen').removeClass('displayed');
		$findScreen.addClass('displayed').removeClass('bottom');
		$findScreen.first().removeClass('top').nextAll().addClass('bottom').removeClass('top');
		$findScreen.last().removeClass('bottom').prevAll().addClass('top').removeClass('bottom');

        switch (index) {
            case index = 0:
                $('#part-home').find('.pics-container').removeClass('state-1 state-2 state-3 state-4');
                break;
            case index = 1:
                $('#part-home').find('.pics-container').removeClass('state-2 state-3 state-4').addClass('state-1');
                break;
            case index = 2:
                $('#part-home').find('.pics-container').removeClass('state-1 state-3 state-4').addClass('state-2');
                break;
            case index = 3:
                $('#part-home').find('.pics-container').removeClass('state-1 state-2 state-4').addClass('state-3');
                break;
            case index = 4:
                $('#part-home').find('.pics-container').removeClass('state-1 state-2 state-3').addClass('state-4');
                break;
        }
        
	});

    //Firefox, IE, Opera, Safari
    $('*').bind('DOMMouseScroll mousewheel', function(event){

    var
        $currScreen = $('.screen.displayed'),
        $nextScreen = $currScreen;

    if(event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0) {
        //scroll down
        console.log('Down');

        var 
            $nextScreen = $currScreen.next();

        if (typeof $nextScreen[0] !== 'undefined') {
            $currScreen.removeClass('displayed').addClass('top');
            $nextScreen.removeClass('bottom').addClass('displayed');
        }

        console.log(index);
    }
    else {
        //scroll up
        console.log('Up');

        var $nextScreen = $currScreen.prev();

        if (typeof $nextScreen[0] !== 'undefined') {
                $currScreen.removeClass('displayed').addClass('bottom');
                $nextScreen.removeClass('top').addClass('displayed');
            }
    }

    var
        index = $nextScreen.index('.screen'),
        // $findScreen; //undefined
        $findScreen = $('.screens-nav').find( 'li:eq('+index+')' );

    if (index !== -1) {//index not found
        $('.screens-nav').find('li').removeClass('active');
        $findScreen.addClass('active');

        switch (index) {
            case index = 0:
                $('#part-home').find('.pics-container').removeClass('state-1 state-2 state-3 state-4');
                break;
            case index = 1:
                $('#part-home').find('.pics-container').removeClass('state-2 state-3 state-4').addClass('state-1');
                break;
            case index = 2:
                $('#part-home').find('.pics-container').removeClass('state-1 state-3 state-4').addClass('state-2');
                break;
            case index = 3:
                $('#part-home').find('.pics-container').removeClass('state-1 state-2 state-4').addClass('state-3');
                break;
            case index = 4:
                $('#part-home').find('.pics-container').removeClass('state-1 state-2 state-3').addClass('state-4');
                break;
        }
    };

    console.log($findScreen);

    //prevent page fom scrolling
    return false;
    });
});