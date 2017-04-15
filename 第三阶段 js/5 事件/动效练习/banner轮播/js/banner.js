$(function(){
  var imgs=$("a",$(".imgsbox")[0]); //获取图片
  var list=$("li",$(".btn")[0]);    //获取轮播小点
  var banner_box=$(".banner_box")[0];  //获取最外层背景
  var bgImage=["url(img/bann001.jpg)","url(img/bann002.jpg)","url(img/bann003.jpg)","url(img/bann004.jpg)"]; //为背景设置背景色
  var ban_box=$(".ban_box")[0];
  var jiantou_left=$(".jiantou_left")[0];
  var jiantou_right=$(".jiantou_right")[0];

  var num=0; //操作自动轮播下标
  function change(type){
    type=type||"right";
    if(type=="right"){
       num++;
       if(num>=imgs.length){
       num=0;   
        }
    }else if(type=="left"){
        num--;
        if(num<=-1){
        num=imgs.length-1;   
        }
    }
    
    for( var i=0;i<imgs.length;i++){
      imgs[i].style.opacity=0;
      list[i].className="";
    }
     //imgs[num].style.opacity=1;
     
     animate(imgs[num],{opacity:1},500);
     list[num].className="btn_active";

     banner_box.style.backgroundImage=bgImage[num];
   }
  var t=setInterval(change,2000);
// 箭头
  banner_box.onmouseover=function(){
    clearInterval(t);
    jiantou_left.style.display="block";
    jiantou_right.style.display="block";
  }
  banner_box.onmouseout=function(){
    t=setInterval(change,2000);
    jiantou_left.style.display="none";
    jiantou_right.style.display="none";
  }
  jiantou_left.onclick=function(){
    change("left");
  }
  jiantou_right.onclick=function(){
    change("right");
  }

 // 直接操作轮播小块 
  for(var i=0;i<list.length;i++){
    list[i].name=i;
    list[i].onmouseover=function(){
      for(var j=0;j<imgs.length;j++){
       imgs[j].style.opacity=0;
       list[j].className="";
      }
     animate(imgs[this.name],{opacity:1},500);
     this.className="btn_active";
     banner_box.style.backgroundImage=bgImage[this.name];
     num=this.name;
    }
  }
  

});

