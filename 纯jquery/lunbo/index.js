$(()=>{
    var num = 0;
    var timeId;
    var goposi=0;
    function lunbotu(parentDom,imgNum,imgWidth,xiabiao,leftg,rightg){  
        var imgWid = -(parseInt(imgWidth) * parseInt(imgNum-1));
        $(parentDom).mouseover(()=>{
            $(parentDom).stop(true);
            if(parseInt($(parentDom).css('left')) % imgWidth != 0){
                var ddleft = parseInt($(parentDom).css('left')) - parseInt($(parentDom).css('left')) % imgWidth;
                var ddlefttor = parseInt($(parentDom).css('left')) - (imgWidth + parseInt($(parentDom).css('left')) % imgWidth);
                if(parseInt($(parentDom).css('left')) % imgWidth > (-imgWidth/2)){
                    $(parentDom).animate({
                        left:ddleft
                    },500)
                }else{
                    $(parentDom).animate({
                        left:ddlefttor
                    },500,function(){
                        if(ddlefttor == imgWid){
                            $(parentDom).css('left',0);
                        }
                    });
                }
            }
        }).mouseout(()=>{
                function syfubest(){
                    $(parentDom).stop(true,true);
                    var newleft = parseInt($(parentDom).css('left')) - imgWidth;
                    $(parentDom).animate({
                        left:newleft
                    },2000,function(){
                       if(parseInt($(parentDom).css('left')) <= imgWid){
                        $(parentDom).css('left',0);
                        syfubest();
                       }else{
                           syfubest();
                       }
                    });
                }
                syfubest();
        }).trigger('mouseout');

        $(leftg).mouseover(()=>{
            $(parentDom).stop(true);
        });
        $(rightg).mouseover(()=>{
            $(parentDom).stop(true);
        });
        $('li').mouseover(()=>{
            $(parentDom).stop(true);
        });

        $(leftg).click(()=>{
            if(parseInt($(parentDom).css('left')) == 0){
                $('ul li').css('backgroundColor','lightblue');
                $('ul li:eq(2)').css('backgroundColor','red');
                goposi = -imgWidth*2
                // $(parentDom).animate({
                //     left:goposi
                // },500,function(){
                //     console.log('syfubest');
                // });
            }else if(parseInt($(parentDom).css('left')) == -640){
                $('ul li').css('backgroundColor','lightblue');
                $('ul li:first').css('backgroundColor','red');
                goposi = 0
                // $(parentDom).animate({
                //     left:goposi
                // },500,function(){
                //     console.log('syfubest');
                // });
            }else if(parseInt($(parentDom).css('left')) == -1280){
                $('ul li').css('backgroundColor','lightblue')
                $('ul li:eq(1)').css('backgroundColor','red');
                goposi = -imgWidth
            }
            $(parentDom).animate({
                left:goposi
            },500,function(){
                console.log('syfubest');
            });
        })

        $(rightg).click(()=>{
            if(parseInt($(parentDom).css('left')) == 0){
                goposi = -640;
                $('ul li').css('backgroundColor','lightblue')
                $('ul li:eq(1)').css('backgroundColor','red')
            }else if(parseInt($(parentDom).css('left')) == -640){
                goposi = -1280;
                $('ul li').css('backgroundColor','lightblue')
                $('ul li:eq(2)').css('backgroundColor','red')
            }else if(parseInt($(parentDom).css('left')) == -1280){
                goposi = 0;
                $('ul li').css('backgroundColor','lightblue')
                $('ul li:first').css('backgroundColor','red')
            }
            $(parentDom).animate({
                left:goposi
            },500,function(){
                console.log('syfubest');
            });
        })

         //图标点击随动
    
        $('ul').on('click','li:first',()=>{
            goposi = 0;
            $('#imgs').css('left',num);
            $('ul li').css('backgroundColor','lightblue')
            $('ul li:first').css('backgroundColor','red');
            $(parentDom).animate({
                left:goposi
            },500,function(){
                console.log('syfubest');
            });
        }).on('click','li:eq(1)',()=>{
            goposi = -640;
            $('#imgs').css('left',num);
            $('ul li').css('backgroundColor','lightblue')
            $('ul li:eq(1)').css('backgroundColor','red');
            $(parentDom).animate({
                left:goposi
            },500,function(){
                console.log('syfubest');
            });
        }).on('click','li:eq(2)',()=>{
            goposi = -1280;
            $('#imgs').css('left',num);
            $('ul li').css('backgroundColor','lightblue')
            $('ul li:eq(2)').css('backgroundColor','red');
            $(parentDom).animate({
                left:goposi
            },500,function(){
                console.log('syfubest');
            });
        })
       
    }
    lunbotu('#imgs',4,640,'#xiabiao','#leftGo','#rightGo')

})