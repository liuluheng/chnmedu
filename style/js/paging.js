$(function(){
		var url = window.location.href;
		var i = url.lastIndexOf("/");
		$(".pagination a[href=#]").each(function(){
			$(this).attr("href",url.substring(0,i+1)+"index_"+$(this).text()+".html");
		});
		
		$("#p_go").bind('click', function(){
			var _ipt = $(this).prev().find('input'), pn = jQuery.trim(_ipt.val());
			if(!(/^[1-9]\d*$/.test(pn))){
				alert('请输入正整数');
				_ipt.focus();
				return false;
			}
			if(parseInt(pn) > parseInt(_ipt.attr('_pc'))){
				alert('跳转的目标页码不能超过最大页码');
				_ipt.focus();
				return false;
			}
			var url = window.location.href;
			var i = url.lastIndexOf("/");
			if(pn == 1){
				url = url.substring(0,i+1)+"index.html";
			}else{
				url = url.substring(0,i+1)+"index_"+pn+".html";
			}
            
		window.location.href = encodeURI(url);
		
		});
		
		$(".caption").bind("click",function(){
			$(this).addClass("caption-top");
		});
	});
