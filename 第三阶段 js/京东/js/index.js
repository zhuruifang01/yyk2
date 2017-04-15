$(function(){
//banner-top:图片
var top_banner=$(".top_banner")[0];
var banner_top_box=$(".banner_top_box")[0];
var banner_top_X=$("div",banner_top_box)[0];
banner_top_X.onclick=function(){
  top_banner.style.display="none";
}
//搜索框：
var bantopform=document.bantopform;
var search=bantopform.search;
search.onfocus=function(){
	if(search.value=="电热饭盒")
		{search.value="";}
}
search.onblur=function(){
	if(search.value=="")
		{search.value="电热饭盒";}
}
//购物车：
 var gwc=$(".gwc")[0];
 var gwc_bottom=$(".gwc_bottom")[0];
 gwc.onmouseover=function(){
 	gwc.style.border=0;
 	gwc.style.background="white";
 	gwc.style.boxShadow="0px 0px 10px #ccc";
 	gwc_bottom.style.display="block";
 }
 gwc.onmouseout=function(){
 	gwc.style.border="1px solid #ccc";
 	gwc.style.background="#F1F1F1";
 	gwc.style.boxShadow="none";
 	gwc_bottom.style.display="none";
 }
//banner轮播：
   var banner_box1=$(".banner_center_box")[0];
   var imgs1=$("a",$(".ban_imgbox")[0]);
   var list1=$("li",$(".ban_btn")[0]);
   var ban_jt_left1=$(".ban_jt_left")[0];
   var ban_jt_right1=$(".ban_jt_right")[0];
   var num1=0;//操作自动轮播下标
   function change1(type){
     type=type||"right";
     if(type=="right"){
     	num1++;
     	if(num1>=imgs1.length){
     	  num1=0;}
     	}else if(type=="left"){
     		num1--;
     		if(num1<=-1){
     		 num1=imgs1.length-1;
     		}
     	}
    for(var i=0;i<imgs1.length;i++){
    	imgs1[i].style.opacity=0;
    	list1[i].className=""
    }
    animate(imgs1[num1],{opacity:1},500);
    list1[num1].className="ban_btn_active"; 
   }
   var t1=setInterval(change1,3000);
   banner_box1.onmouseover=function(){// 箭头
   	 clearInterval(t1);
   	 ban_jt_left1.style.display="block";
   	 ban_jt_right1.style.display="block";
   }
   banner_box1.onmouseout=function(){
   	 t1=setInterval(change1,3000);
   	 ban_jt_left1.style.display="none";
   	 ban_jt_right1.style.display="none";
   }
  ban_jt_left1.onclick=function(){
  	change1("left");
  }
  ban_jt_right1.onclick=function(){
  	change1("right");
  }
  for(var i=0;i<list1.length;i++){// 直接操作轮播小块 
  	list1[i].name=i;
  	list1[i].onmouseover=function(){
  		for(var j=0;j<imgs1.length;j++){
  		 imgs1[j].style.opacity=0;
  		 list1[j].className="";	
  		}
  	animate(imgs1[this.name],{opacity:1},500);
  	this.className="ban_btn_active";
  	num1=this.name;
  	}
  }


});