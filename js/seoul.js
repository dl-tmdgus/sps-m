$(document).ready(function(){
//	alert("휴대폰으로 접속해야 정상적으로 표시됩니다.");
	//상단 메뉴

	//페이드 슬라이드
	setInterval (fading, 3000);
	let i = 2;
	function fading(){
		console.log(i);// 
		if(i == 0 ){
			$("#slide a").fadeIn();
			i=2;
								
		}
		else{
			$("#slide a").eq(i).fadeOut();
			i--;
		}
		
	}

	
	//상단 햄버거(닫기)아이콘
		$("header button").click(function(){
			$(".mob").stop().slideToggle();
			if($(this).text() == "X"){
				$(this).html("&#x2630;");
				//$('nav').stop().slideUp();
			}else {
				$(this).text("X");
				//$('nav').stop().slideDown();
			}
		});
		//메뉴 각 항목을 클릭시.
		$(".mob div a").click(function(){
				$("header button").html("&#x2630;");
				$(".mob ").stop().slideUp(400);
		});

});///////all end