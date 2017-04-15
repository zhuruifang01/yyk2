//drag构造函数
function drag(box){
   //1.构造函数 属性
  this.box=box;
  this.ox=0; //鼠标到事件源box的距离 
  this.oy=0;
  this.cx=0;     //到浏览器的距离
  this.cy=0;
  this.cw=document.documentElement.clientWidth; //获取浏览器宽
  this.ch=document.documentElement.clientHeight;
  this.ow=this.box.offsetWidth;
  this.oh=this.box.offsetHeight;
}
// 原型
drag.prototype={
    //2.构造函数 方法down;move;up
  drags:function(){this.down()},
   down:function(){
   	   var that=this;
       this.box.onmousedown=function(e){
       	if(e.preventDefault){
       		e.preventDefault();
       	}else{
       		e.preventValue=false;
       	}
       var e=e||window.event;
       that.ox=e.offsetX;
       that.oy=e.offsetY;
       that.move(); //调用move方法
       that.up();
   	 }
    },
   move:function(){
   	   var that=this; 
       document.onmousemove=function(e){
       	if(e.preventDefault){
       		e.preventDefault();
       	}else{
       		e.preventValue=false;
       	}
   	   var e=e||window.event;
       that.cx=e.clientX;
       that.cy=e.clientY;
       var x=that.cx-that.ox;
       var y=that.cy-that.oy;

       if(x>=that.cw-that.ow){x=that.cw-that.ow;}
       if(x<=0){x=0;}
       if(y>=that.ch-that.oh){y=that.ch-that.oh;}
       if(y<=0){y=0;}
       that.box.style.left=x+"px";
       that.box.style.top=y+"px";
    }
   },
   up:function(){
     document.onmouseup=function(){
     	document.onmouseup=null;
     	document.onmousemove=null;
     }

   }


}