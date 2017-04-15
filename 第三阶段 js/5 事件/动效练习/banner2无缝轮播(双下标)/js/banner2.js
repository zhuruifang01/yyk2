
$(function(){
   var imgs=$("a",$(".imgsbox")[0]);
   var list=$("li",$(".btn")[0]);
   var box=$(".box")[0];
   var jiantou_left=$(".jiantou_left")[0];
   var jiantou_right=$(".jiantou_right")[0];

  for (var i=1;i<imgs.length;i++){
      imgs[i].style.left="1190px";
    }

   var now=0; //可视窗下标
   var next=0; //下一张 下标
   function move(type){
   	 type=type||"right";
   	 if(type=="right"){
   	   next++;
       if(next>=imgs.length){
        next=0;	
     	 }
        imgs[next].style.left="1190px";
        imgs[now].style.left = "0px";
        animate(imgs[now],{left:-1190});
        animate(imgs[next],{left:0});
        // console.log(1);
        list[now].className="";  
        list[next].className="btn_active";
        now=next;

   	   }else if(type=="left"){
   	  	 next--;
        if(next<=-1){
        next=imgs.length-1;   
        }
         imgs[next].style.left="-1190px";
         imgs[now].style.left="0px";
       	 animate(imgs[now],{left:1190});
       	 animate(imgs[next],{left:0});
       	 list[now].className="";
       	 list[next].className="btn_active";
         now=next;
   	   }
     }
   var t=setInterval(move,2000);
  // 箭头：
        box.onmouseover=function(){
        clearInterval(t);
        jiantou_left.style.display="block";
        jiantou_right.style.display="block";
     }
        box.onmouseout=function(){
        t=setInterval(move,2000);
        jiantou_left.style.display="none";
        jiantou_right.style.display="none";
     }
     jiantou_left.onclick=function(){
      move("left");
       }
     jiantou_right.onclick=function(){
      move("right");
     }
  // 直接操作轮播小块 
   for(var i=0;i<list.length;i++){
      list[i].name=i;
      list[i].onclick=function(){
       next=this.name;
       imgs[next].style.left="1190px";
       imgs[now].style.left="0px";
     	 animate(imgs[now],{left:-1190});
     	 animate(imgs[next],{left:0});
     	 list[now].className="";
     	 list[next].className="btn_active"
       now=next;
      
      }
    }
});















