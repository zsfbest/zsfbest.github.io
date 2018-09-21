(function($){
	$('#formsub').validate({
		rules:{
			username:{
				required:true,
				rangelength:[3,20]
			},
			password:{
				required:true,
				rangelength:[5,20]
			}
		},
		messages:{
			username:{
				required:"账号不能为空",
				rangelength:"账号长度为3-20位"
			},
			password:{
				required:"密码不能为空",
				rangelength:"密码长度为5-20位"
			}
		},
		//验证通过执行的方法
		unhighlight:function(element,error,errorClass){
				$(element).tooltip('destroy');
		},
		//验证未通过执行的方法
		errorPlacement:function(error,element){
			//如果.tooltip存在 即为第二次错误 第二次错误需要修改data-original-title属性 tooltip('show')
			console.log(element);
			if($(element).next('.tooltip').length>0){
				$(element).attr('data-original-title',error.text()).tooltip({
					placement:'top',
					trigger:'focus',
					template:'<div class="tooltip" role="tooltip" style="margin-left:30%"><div class="tooltip-arrow"></div><div class="tooltip-inner" style=""></div></div>'
				
				});
			}else{
				//第一次错误调用的提示
				$(element).attr('title',error.text()).tooltip({
					placement:'top',
					template:'<div class="tooltip" role="tooltip" style="margin-left:30%"><div class="tooltip-arrow"></div><div class="tooltip-inner" style=""></div></div>'
				});
			}
			
		},
		//所有验证通过准备提交数据
		submitHandler:function(){
			$('[type="submit"]').button('loading');
			$.post('http://192.168.15.2/gz0820web/login',$('#formsub').serializeArray(),function(data){
				if(data.status!=1){
					$('[type="submit"]').button('reset');
				}else{
					setInterval(function(){
						location.href="list.html";
					},1000);
				}
				
				$('.modal-body').html(data.msg);
				$('.modal').modal();
			},'json');
			return false;
		}
	});
})(jQuery);