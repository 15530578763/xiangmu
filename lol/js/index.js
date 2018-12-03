$("#head-j").hover(function(){
	$("#head-k").slideDown(1000);
	stop();
},function(){
	$("#head-k").slideUp(1000);
	stop()
})

$(".head-h").hover(function(){
	$("#head-l").toggle(1000);
},function(){
	$("#head-l").toggle(1000);
})

$(".head-f").hover(function(){
	$("#head-m").slideDown(1000);
},function(){
	$("#head-m").slideUp(1000);
})

/*这是身体----------------------------*/
/*这是身体第一步*/
function lunbo(){
	var timer = null,
		index = 0,
		$ulist = $("#body-c li"),
		$olist = $("#body-b li");
	timer = setInterval( autoPlay , 2000 );
	function autoPlay(){
		index++;
		if( index == $ulist.size() ){
			index = 0;
		}
		$ulist.eq(index).addClass("body-d").siblings().removeClass("body-d");
		$olist.eq(index).fadeIn(1500).siblings().fadeOut(1500);
	}
	$ulist.mouseenter(function(){
		clearInterval( timer );
		index = $(this).index()-1;
		autoPlay();
	}).mouseleave( function(){
		timer = setInterval( autoPlay , 2000 );
	} )
	$olist.mouseenter(function(){
		clearInterval( timer );
		index = $(this).index()-1;
		autoPlay();
	}).mouseleave( function(){
		timer = setInterval( autoPlay , 2000 );
	} )
}

var $bodyj = $("#body-f").children("ul").children("li"),
	$bodyk = $("#body-g").children("li");
$bodyj.mouseenter(function(){
	$(this).css("border-bottom","2px solid red");
	$bodyk.css( "display" ,"none" );
	var index = $(this).index();
	$bodyk.eq( index ).css( "display" ,"block" );
})
$bodyj.mouseleave(function(){
	$(this).css("border-bottom","none");
	var index = $(this).index();
	$bodyk.eq( index ).css( "display" ,"block" );
})
/*这是身体第二步*/
$("#body-l").children("div").find("li,span").hover(function(){
	$(this).addClass("body-b1");
},function(){
	$(this).removeClass("body-b1");
})
$("#body-m").find("li").hover(function(){
	$(this).addClass("body-b2");
},function(){
	$(this).removeClass("body-b2");
})
$("#body-o").children("div").children("div").children("a").children("div").hover(function(){
	$(this).addClass("body-b3");
},function(){
	$(this).removeClass("body-b3");
})
$("#body-w").hover(function(){
	$(this).addClass("body-b3");
},function(){
	$(this).removeClass("body-b3");
})
$("#body-a8,#body-a9").hover(function(){
	$(this).addClass("body-b2");
},function(){
	$(this).removeClass("body-b2")
})

function lunbo1(){
	var timer1 = null,
		index = 0,
		$ulist = $("#body-a24 li"),
		$olist = $("#body-a25 ul");
	timer1 = setInterval( autoPlay , 2000 );
	function autoPlay(){
		index++;
		if( index == $ulist.size() ){
			index = 0;
		}
		$ulist.eq(index).addClass("body-b4").siblings().removeClass("body-b4");
		$olist.eq(index).fadeIn(2000).siblings().fadeOut(2000);
	}
	$ulist.mouseenter(function(){
		clearInterval( timer1 );
		index = $(this).index()-1;
		autoPlay();
	}).mouseleave( function(){
		timer1 = setInterval( autoPlay , 2000 );
	} )
	$olist.mouseenter(function(){
		clearInterval( timer1 );
		index = $(this).index()-1;
		autoPlay();
	}).mouseleave( function(){
		timer1 = setInterval( autoPlay , 2000 );
	} )
}















