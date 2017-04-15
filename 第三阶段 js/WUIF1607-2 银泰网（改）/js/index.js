window.onload=function(){
//banner部分
	var bannerbox=$(".banner_con_kuang")[0];
	var imgs=$("a",$(".banner_imgbox")[0]);
	var btn=$("a",$(".banner_lunbodian")[0]);
	var bgimgs=["url(images/bannerbg1.jpg) no-repeat center","url(images/bannerbg2.jpg) no-repeat center","url(images/bannerbg3.jpg) no-repeat center","url(images/bannerbg4.jpg) no-repeat center"]
	var leftbtn=$(".banner_lunbobtn_left")[0];
	var rightbtn=$(".banner_lunbobtn_right")[0];
	var num=0;
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
		for (var i = 0; i < imgs.length; i++) {
			imgs[i].style.opacity=0;
			btn[i].className="";
		}
		// imgs[num].style.opacity=1;
		animate(imgs[num],{opacity:1})
		btn[num].className="xianshi";
		bannerbox.style.background=bgimgs[num];
	}
	var t=setInterval(change,2000);
	bannerbox.onmouseover=function(){
		clearInterval(t);
	}
	bannerbox.onmouseout=function(){
		t=setInterval(change,3000);
	}
	leftbtn.onclick=function(){
		change("left");
	}
	rightbtn.onclick=function(){
		change("right");
	}

	for (var i = 0; i < btn.length; i++) {
		btn[i].aa=i;
		btn[i].onmouseover=function(){
			for (var j= 0; j< imgs.length; j++) {
				imgs[j].style.opacity=0;
				btn[j].className="";
			}
			// imgs[this.aa].style.opacity=1;
			animate(imgs[this.aa],{opacity:1});
			this.className="xianshi";
			bannerbox.style.background=bgimgs[this.aa];
			num=this.aa;
		}
	}

    //banner右边部分
	var move=$(".banner_right")[0];
	move.onmouseover=function(){
		animate(move,{right:5});
	}
	move.onmouseout=function(){
		animate(move,{right:0});
	}
	

// 推荐部分。银泰百货（选项卡）
	var title=$(".con_l_t_zi");
	var con=$(".chaozhitemai");
	for (var i = 0; i < title.length; i++) {
		title[i].name=i;
		title[i].onmouseover=function(){
		
			for(var j=0;j<con.length;j++){
				con[j].className="chaozhitemai";
				title[j].className="con_l_t_zi";
			}
			con[this.name].className="chaozhitemai c_active";
			this.className="con_l_t_zi czrm";
		}
	}

	//银泰百货
	var floor_title=getClass("floor_r_t_zi");
	var floor_con=getClass("floor_right_bottom");
	for (var i = 0; i < floor_title.length; i++) {
		floor_title[i].name=i;
		floor_title[i].onmouseover=function(){
			
			for(var j=0;j<floor_con.length;j++){
				floor_con[j].className="floor_right_bottom";
				floor_title[j].className="floor_r_t_zi";
			}
			floor_con[this.name].className="floor_right_bottom f_active";
			this.className="floor_r_t_zi special";
		}
	}


//边框线

	var bbox=$(".chaozhitemai_con");
	var bbox2=$(".bztjBox");
	var btop=$(".topline");
	var bright=$(".rightline");
	var bbottom=$(".bottomline");
	var bleft=$(".leftline");

	for (var i = 0; i < bbox.length; i++) {
		bbox[i].abox=i;
		bbox[i].onmouseover=function(){

			var w=getStyle(this,"width");
			var h=getStyle(this,"height");
			console.log(w);
			animate(btop[this.abox],{width:w+2},500);
			animate(bright[this.abox],{height:h+2},500);
			animate(bbottom[this.abox],{width:w+2},500);
			animate(bleft[this.abox],{height:h+2},500);
		}
		bbox[i].onmouseout=function(){
			var w=getStyle(this,"width");
			var h=getStyle(this,"height");
			animate(btop[this.abox],{width:0},500);
			animate(bright[this.abox],{height:0},500);
			animate(bbottom[this.abox],{width:0},500);
			animate(bleft[this.abox],{height:0},500);
		}
	}
	
//【各楼层banner无缝轮播】
   function banwufenlunbo(index){
    var box3=$(".box3")[index];
    var imgsbox3=$(".imgsbox3")[index];
    var imgs3=$("a",imgsbox3);
    var btn3=$(".btn3")[index];
   	var list3=$("li",btn3);
   	var jiantou_left=$(".jiantou_left",box3)[0];
   	var jiantou_right=$(".jiantou_right",box3)[0];
    for (var i=1;i<imgs3.length;i++){
      imgs3[i].style.left="390px";
    }

   var now=0; //可视窗下标
   var next=0; //下一张 下标
   function move3(type){
   	 type=type||"right";
   	 if(type=="right"){
   	   next++;
       if(next>=imgs3.length){
        next=0;	
     	 }
        imgs3[next].style.left="390px";
        imgs3[now].style.left = "0px";
        animate(imgs3[now],{left:-390});
        animate(imgs3[next],{left:0});
        list3[now].className="btn_yibang";  
        list3[next].className="btn_active3";
        now=next;
      }else if(type=="left"){
   	  	 next--;
        if(next<=-1){
        next=imgs3.length-1;   
        }
         imgs3[next].style.left="-390px";
         imgs3[now].style.left="0px";
       	 animate(imgs3[now],{left:390});
       	 animate(imgs3[next],{left:0});
       	list3[now].className="btn_yibang";  
        list3[next].className="btn_active3";
         now=next;
       }
     }
  // 箭头：
        box3.onmouseover=function(){
	        jiantou_left.style.display="block";
	        jiantou_right.style.display="block";
     	}
        box3.onmouseout=function(){
	        jiantou_left.style.display="none";
	        jiantou_right.style.display="none";
	     }
     jiantou_left.onclick=function(){
      move3("left");
       }
     jiantou_right.onclick=function(){
      move3("right");
     }
 //直接操作轮播小块 
   for(var i=0;i<list3.length;i++){
      list3[i].name=i;
      list3[i].onclick=function(){
       next=this.name;
       imgs3[next].style.left="390px";
       imgs3[now].style.left="0px";
     	 animate(imgs3[now],{left:-390});
     	 animate(imgs3[next],{left:0});
     	 list3[now].className="btn_yibang";
     	 list3[next].className="btn_active3"
       now=next;
      
      }

 	}
  
   }
     banwufenlunbo(0);
     banwufenlunbo(1);
     banwufenlunbo(2);
     banwufenlunbo(3);
     banwufenlunbo(4);
     banwufenlunbo(5);


//【各楼层小轮播  节点轮播】
  function smallbanner(index){
  var imgbanner2=$(".imgbanner2")[index];
  var imgbox2=$(".imgbox2")[index]; 
  var leftbtn2=$(".leftbtn2")[index];
  var rightbtn2=$(".rightbtn2")[index];
  function moveleft(){
    var first=getFirst(imgbox2);
    animate(first,{width:0},function(){
    	imgbox2.appendChild(first);
    	first.style.width="160px";
    });
 }
  leftbtn2.onclick=function(){moveleft();}
  rightbtn2.onclick=function(){
  	var last=getLast(imgbox2);
  	last.style.width=0;
  	imgbox2.insertBefore(last,getFirst(imgbox2));
  	animate(last,{width:160});
  }  
}  
for(var i=0;i<=8;i++){
  smallbanner(i);
}
//右侧导航栏（楼层跳转）
 var container=$(".container")[0];
 var imgfloor=$(".imgfloor")[0];
 var floor1=$(".floor1");
 var list1=$("li",imgfloor);

 document.documentElement.scrollTop=1; 
 var obj=document.documentElement.scrollTop?document.documentElement:document.body;
 var now1=0;
 window.onscroll=function(){
 	if(obj.scrollTop>=container.offsetTop){
 		imgfloor.style.display="block";
 	}else{imgfloor.style.display="none";}

    for(var i=0;i<floor1.length;i++){
      if(obj.scrollTop+200>=floor1[i].offsetTop){
      	  now1=i;
      	for(var j=0;j<list1.length;j++){
      	   list1[j].style.opacity="0";
      	}
      	   list1[i].style.opacity="1"; 
        }
         if(obj.scrollTop+200<=floor1[0].offsetTop){
         	for(var j=0;j<list1.length;j++){
      	    list1[j].style.opacity="0";
         	}
         }
    }
   }
   for(var i=0;i<list1.length;i++){
   	  list1[i].aa=i;
   	  list1[i].onclick=function(){
   	  	animate(obj,{scrollTop:floor1[this.aa].offsetTop});
      }
      list1[list1.length-1].onclick=function(){
      	animate(obj,{scrollTop:document.offsetTop});
      }
       list1[i].onmouseover=function(){
       	 this.style.opacity="1";
       }
        list1[i].onmouseout=function(){
        	if(now1!=this.aa){
        		this.style.opacity="0";
        	}
        }

   }

}
