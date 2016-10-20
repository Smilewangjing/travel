$(function(){
	$("#top .center-top .top-right li a").hover(function(){
		var arr=['130px','145px','145px','72px','130px','100px'];
		var a_width=$(this).width();
		var div_width=$(this).find(".top_menu").width();
		var index=$(this).parent().index();

		$(this).find('.aft').addClass('after')
		$(this).find(".bg_img").css({background:'url(images/top_bg.png) no-repeat -15px 0'});
		$(this).find(".top_menu").css({display:"block",left:(a_width-div_width+20)+'px'}).stop(true).animate({height:arr[index-1]},180).css("color","#666");
	},function(){
		$(this).find(".bg_img").css("background",'url(images/top_bg.png) no-repeat -15px -5px');
		$(this).find(".top_menu").stop(true).animate({height:0},180,function(){
			$(this).css("display","none");
			$(this).siblings('.aft').removeClass('after')
		})
	})

	//选择城市
	$(".middle").on("mouseover",function(){
		$(".top2_menu").css("display","block");
	})
	$(".middle").on("mouseout",function(){
		$(".top2_menu").css("display","none");
	});
	//左边菜单栏
	var leftLi_index=0;
	$('#header .logo .left ol li').hover(function(){
		leftLi_index=$(this).index();
		$(this).css({borderLeft:'2px solid #fa0',borderTop:'2px solid #b2d891',borderBottom:'2px solid #b2d891',background:'rgba(255,255,255,1)'}).children().css('top','-=2px');
		$(this).find('div').addClass('logo_li_after');
		$('#header .logo .right').eq(leftLi_index).css('display','block');
	},function(){
		$(this).css({borderLeft:'2px solid #5abb1f',borderTop:'none',borderBottom:'1px solid #dff0d1',background:'rgba(255,255,255,0.8)'}).children().css('top','+=2px');
		$(this).find('div').removeClass('logo_li_after');
		$('#header .logo .right').eq(leftLi_index).css('display','none');
		
	});
	//鼠标放在图片上
	$("#tour figure").hover(function(){
		$(this).find("img").stop(true).animate({opacity:0.5},200);
		$(this).find(".click").stop(true).animate({opacity:1,top:"100px"},200)
	},function(){
		$(this).find("img").stop(true).animate({opacity:1},200);
		$(this).find(".click").stop(true).animate({opacity:0,top:"234px"},200)
	});
	/****轮播***/
	var _index=0;
	$("#search .btn ol li").hover(function(){
		clearInterval(timer1);
		_index=$(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		$("#search ul").children("li").eq(_index).stop(true).fadeIn(1000).siblings("li").stop(true).fadeOut(1000);
	},function(){
		timer1=setInterval(auto,3000);
	});
	
	var timer1=null;
	timer1=setInterval(auto,3000);
	function auto(){
		_index++;
		$("#search ul").children("li").eq(_index).stop(true).fadeIn(1000).siblings("li").stop(true).fadeOut(1000);
		$("#search .btn ol li").eq(_index).addClass("on").siblings().removeClass("on");
		if(_index>3){
			_index=-1;
		}
	}



	/******3票务*******/
	var _indexT=0;
	var now=0;
	$("#content .con_left .new li").hover(function(){
		$(this).css("color","red").siblings().css("color","#666");
		if(!$(this).hasClass('goto')){
			$(this).addClass('goto').siblings().removeClass('goto');
		}
		_indexT=$(this).index();
		$("#content .con_left .new .hangban table").eq(_indexT).css("display","block").siblings("table").css("display","none")
	},function(){null});

	//风景欣赏
	$("#content .con_left .fjxs img").hover(function(){
		$(this).siblings(".hidden").css("z-index",10);
		$(this).parent().find(".fj_bu").stop(true).animate({
			top:0
		},180);
	})
	$("#content .con_left .fjxs .fj_bu").hover(function(){
		$(this).parent().css("z-index",10)
	},function(){
		$(this).stop(true).animate({top:"280px"},180,function(){
			$(this).parent().css("z-index",-10)
		});
		
	})
	
	$("#content .con_left .fjxs .hidden").hover(function(){null;},function(){
		$(this).find(".fj_bu").stop(true).animate({top:"280px"},180,function(){
			$(this).parent().css("z-index",-10);
		})
	})

	//国内游选项卡
	$('#guonei_con .guonei_lb .left_gny .bot .pad').hover(function(){
		$(this).find('.mdd_show').css('display','block');
		$(this).find('.red-xian').css('display','block').siblings('.bai-xian').css('display','block');
		$(this).find('.rmmdd').css('border-color','#fff');
	},function(){
		$(this).find('.mdd_show').css('display','none');
		$(this).find('.red-xian').css('display','none').siblings('.bai-xian').css('display','none');
		$(this).find('.rmmdd').css('border-color','#ddd');
	});
	$('#guonei_con .guonei_lb .left_gny .bot .pad2').hover(function(){
		$(this).find('.zt_show').css('display','block');
		$(this).find('.bai-xian').css('display','block');
		$(this).parents('.bot').find('.red-xian').css('display','block');
	},function(){
		$(this).find('.zt_show').css('display','none');
		$(this).find('.bai-xian').css('display','none');
		$(this).parents('.bot').find('.red-xian').css('display','none');
	});



	//精品跟团游
	$('#guonei_con .jpgty .imgshow ._yunnan').hover(function(){
		$(this).children().css('background','#0e649f');
	},function(){
		$(this).children().css('background','#1574b6');
	});
	var _indexJpgty=0;
	$('#guonei_con .jpgty .imgshow .right_img .rt ol li').click(function(){
		_indexJpgty=$(this).index();
		$(this).addClass('gty_active').siblings().removeClass('gty_active');
		$('#guonei_con .jpgty .imgshow .right_img').find('.img').eq(_indexJpgty).css('display','block').siblings('.img').css('display','none')
	});


	//这个季节去撒欢
	$('#guonei_con .zgjjqsh .zgjj ._hover').hover(function(){
		$(this).find('._bu').css('display','block');
	},function(){
		$(this).find('._bu').css('display','none');
	})

	//吃喝玩乐主题游
	$(".right ul li").hover(function(){
		$(this).children().css("color","#fff").css("background","#020");
	},function(){
		$(this).children().css("color","").css("background","");
	})


	/******登录**********/
	var dl_index=0;
	$('#log_content .log_center .center_right .denglu span').on('click',function(){
		dl_index=$(this).index();
		$(this).css('background','#fff').siblings().css('background','#e6e6e6');
		$('#log_content .log_center .center_right .log_form').eq(dl_index).css('display','block').siblings('.log_form').css('display','none')
	});
});