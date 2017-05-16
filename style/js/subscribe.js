$(function(){
	$("button[data-action='submit']").bind('click',function(){
		$("#subscribeForm").submit();
		return false;
	});
	$("#subscribeForm").submit(function(){
		if($("input[name='name']") != undefined && $("input[name='name']").val() == ""){
			alert("请输入您的姓名");
			$("input[name='name']").focus();
			return false;
		}
		if($("input[name='email']") != undefined && $("input[name='email']").val() == ""){
			alert("请输入您的邮箱");
			$("input[name='email']").focus();
			return false;
		}
		if($("input[name='company']") != undefined && $("input[name='company']").val() == ""){
			alert("请输入您的单位");
			$("input[name='company']").focus();
			return false;
		}
		if($("input[name='post']") != undefined && $("input[name='post']").val() == ""){
			alert("请输入您的职务");
			$("input[name='post']").focus();
			return false;
		}
		
		var name = $("input[name='name']").val();
		var email = $("input[name='email']").val();
		var company = $("input[name='company']").val();
		var post = $("input[name='post']").val();
		$.getJSON("http://cmsapp.bimba.edu.cn/app/sendEmail.do?jsonp=?", 
                        {'time' : new Date().getTime(),'name' : name,'email' : email, 'company' : company, 'post' : post}, function(ret){            
			if (ret.success) {
				alert("提交成功！");
			} else{
				alert("提交失败！");
			}
		});
		return false;
	});
});