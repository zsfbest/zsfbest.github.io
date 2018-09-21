(function($){
	
	$('#ulis').click(function(){
		checkuser(1);
	})
	
	$('.syfulist').on('click','li',function(){
		var pagenum = $(this).text();
		checkuser(pagenum);
	})
	
	
	
	
	function checkuser(num){
		
		$.post(
			'http://192.168.15.2/gz0820web/users',
			{
				page:num
			},
			function(data){
				var str='';
				var pagenum=data.last_page;
				for(var j=1;j<=pagenum;j++){
						str+='<li>'+j+'</li>';
				}
				$('.syfulist').empty()
				$('.syfulist').append(str);

				
				
				var arr = data.data;
				str='';
				var sex='';
				for(var i=0;i<arr.length;i++){
					if(arr[i].gender == 1){
						sex='男';
					}else{
						sex='女';
					}
					str+='<tr><td>'+arr[i].username+'</td><td>'+arr[i].password+'</td><td>'
					+arr[i].age+'</td><td>'+sex+'</td>'
				};
				$('#insertext').empty();
				$('#insertext').append(str);
				
				$('.syfulist li').eq(num-1).css({
					backgroundColor:'lightgreen'
				})
			},
			'json'
		);
		
		
		
	}
	
	
})(jQuery)
