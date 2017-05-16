$(function(){
	$("#nav1 > li").hover(function () {
		$(this).addClass("open")
	  },
	  function () {
		$(this).removeClass("open")
	  }
	);
	
	$("#topbar-toggle").bind("click",function(){
		if($("body").hasClass("main-nav-open")){
			$("body").removeClass("main-nav-open");
		} else{
			$("body").addClass("main-nav-open");
		}
    });
    
});
