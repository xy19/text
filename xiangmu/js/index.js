window.onload=function(){
    (function(){
        var aLi=$('.h7');
        var aA=$('.a1');
        var aP=$('.a2');
        
        aLi.mouseenter(function(){
            aA.eq($(this).index()-1).css('color','#A00');
            aA.eq($(this).index()-1).stop().animate({'top':20},300);
            aP.eq($(this).index()-1).stop().animate({'top':4},300);
        })
        aLi.mouseleave(function(){
            aA.eq($(this).index()-1).css('color','#666');
            aA.eq($(this).index()-1).stop().animate({'top':4},300);
            aP.eq($(this).index()-1).stop().animate({'top':20},300);
        })
    })();
    /* 头部 */

    (function(){
        var oInp=$('.sec6');
        var oSbmt=$('.sec7');
        var reg=/^1[3578]\d{9}$/;
        oInp.focus(function(){
            oInp.css('color','#000');
            oInp.val()=='';
        });
        oInp.blur(function(){
            var str=oInp.val();
            if(str){
                if(!reg.test(str)){
                    alert('请填写正确的手机号码！')
                };
            };
        });
        oSbmt.click(function(){
            var str=oInp.val();
            if(str){
                if(!reg.test(str)){
                    alert('请填写手机号码！')
                }
            }else{
                alert('请填写手机号码！')
            }
        });
    })();
    /* 表单验证 */

    /*(function(){
        var oCoo=document.getElementById('coo');
        var oUl=oCoo.getElementsByTagName('ul')[0];
        var timer=null;
        var n=0;
        function play(){
            timer=setInterval(function(){
                n-=10;
                oUl.style.top=n+'px';
                if(n==-300){
                    n=0;
                }
            },220)
        }
        window.onload=function(){
            clearInterval(timer);
            play();
        }
        oCoo.onmouseenter=function(){
            clearInterval(timer);
        }
        oCoo.onmouseleave=function(){
            play();
        }
    })()*/
    /* 预约电话 */

    /*(function(){
     var oL=$('.col');
     var oT=$('.cot');
     var oR=$('.cor');
     var oB=$('.cob');
     var oShow =$('.show');
     oL.mouseenter(function(){
     console.log($(this).index());
     oShow.eq($(this).index()).css({'top':'0px','left':'-900px'});
     oShow.eq($(this).index()).stop().animate({'left':'0px'},600);
     oShow.mouseleave(function(){
     oShow.eq($(this).index()).stop().animate({'top':'0px','left':'-900px'});
     });
     });
     oR.mouseenter(function(){
     oShow.eq($(this).index()).css({'top':'0px','left':'900px'});
     oShow.eq($(this).index()).stop().animate({'left':'0px'},600);
     oShow.mouseleave(function(){
     oShow.eq($(this).index()).stop().animate({'top':'0px','left':'900px'});
     });
     });
     oB.mouseenter(function(){
     oShow.eq($(this).index()).css({'top':'900px','left':'0px'});
     oShow.eq($(this).index()).stop().animate({'top':'0px'},600);
     oShow.mouseleave(function(){
     oShow.eq($(this).index()).stop().animate({'top':'900px','left':'0px'});
     });
     });
     oT.mouseenter(function(){
     oShow.eq($(this).index()).css({'top':'-900px','left':'0px'});
     oShow.eq($(this).index()).stop().animate({'top':'0px'},600);
     oShow.mouseleave(function(){
     oShow.eq($(this).index()).stop().animate({'top':'-900px','left':'0px'});
     });
     });
     })();*/

    (function(){
        function hoverDis(obj, ev){
            var x=obj.offsetWidth/2+obj.offsetLeft-ev.clientX;
            var y=obj.offsetHeight/2+obj.offsetTop-ev.clientY;

            return Math.round((Math.atan2(y, x)*180/Math.PI+180)/90)%4;
        };
        var oUl=document.getElementById('co19');
        var aLi=oUl.children;
        var aP=oUl.getElementsByTagName('p');

        for(var i=0; i<aLi.length; i++){
            aLi[i].index=i;
            aLi[i].onmouseover=function(ev){
                var oEvent=ev || event;

                var from=oEvent.fromElement || oEvent.relatedTarget;
                if(this.contains(from))return;

                var n=hoverDis(this, oEvent);
                var oP=aP[this.index];
                switch(n){
                    case 0:
                        oP.style.left='248px';
                        oP.style.top=0;
                        break;
                    case 1:
                        oP.style.left=0;
                        oP.style.top='248px';
                        break;
                    case 2:
                        oP.style.left='-248px';
                        oP.style.top=0;
                        break;
                    case 3:
                        oP.style.left=0;
                        oP.style.top='-248px';
                        break;
                }
                move(oP, {left: 0, top: 0});
            };

            aLi[i].onmouseout=function(ev){
                var oEvent=ev || event;

                var to=oEvent.toElement || oEvent.relatedTarget;
                if(this.contains(to))return;

                var n=hoverDis(this, oEvent);
                var oP=aP[this.index];

                switch(n){
                    case 0:
                        move(oP, {left: 292, top: 0});
                        break;
                    case 1:
                        move(oP, {left: 0, top: 248});
                        break;
                    case 2:
                        move(oP, {left: -292, top: 0});
                        break;
                    case 3:
                        move(oP, {left: 0, top: -248});
                        break;
                }
            };
        }
    })()
    /* 透明层 */

        
    (function(){
        var n=0;
        var timer=null;
        var oLeft=$('.left-1');
        var oRight=$('.right-1');
        var aHide=$('.hide-1');
        timer=setInterval(function(){
            n++;
            aHide.hide();
            aHide.eq(n).show();
            if(n>=2){
                n=-1;
            }

        },2000);

        oLeft.on('click',function(){
            timer=clearInterval(timer);
            n++;
            aHide.hide();
            aHide.eq(n).show();
            if(n>=2){
                n=-1;
            }
        });
        oRight.on('click',function(){
            timer=clearInterval(timer);
            n++;
            aHide.hide();
            aHide.eq(n).show();
            if(n>=2){
                n=-1;
            }
        });
        oRight.on('mouseleave',function(){
            timer=setInterval(function(){
                n++;
                aHide.hide();
                aHide.eq(n).show();
                if(n>=2){
                    n=-1;
                }

            },2000);
        })
        oLeft.on('mouseleave',function(){
            timer=setInterval(function(){
                n++;
                aHide.hide();
                aHide.eq(n).show();
                if(n>=2){
                    n=-1;
                }

            },2000);
        })
    })();
    /* 选项卡 */

    (function(){
        var oHead=$('.head');
        var oH=$('.h10');

        $(document).scroll(function(){
            oHead.css({'position':'fixed','top':0,'left':0,'z-index':20});
            oH.css('display','block');
        })
    })()
    /* 吸顶条  */
};
