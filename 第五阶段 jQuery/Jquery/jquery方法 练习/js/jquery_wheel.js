 jQuery.fn.extend{
   mousewheel:function(up,down){
    this.each(function(i,obj){
       //obj：事件源，up:向上滚动的函数
      if(obj.attachEvent){
        obj.attachEvent("onmousewheel",scrollFn); //IE、opera
      }else if(obj.addEventListener){
        obj.addEventListener("mousewheel",scrollFn,false);//chrome,safari,-webkit-
        obj.addEventListener("DOMMouseScroll",scrollFn,false); //firefox、-moz-
      }
      function scrollFn(e){
       e=e||window.event;

       if(e.preventDefault){    //w3c
      e.preventDefault();
       }else{
      e.returnValue=false; //IE
       }
       var f=e.detail||e.wheelDelta;
       if(f==-3||f==120){
        if(up){up.call(obj);}
       }else if(f==-120||f==3){
         if(down){down.call(obj);}
       }
      }
    })
   }
 }
