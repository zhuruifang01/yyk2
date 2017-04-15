
// 8.29
// 一.解决类名获取的兼容问题：
  function getClass(classname,father){
    father=father||document;
   // 1.判断浏览器：
    if(father.getElementsByClassName){
    	// alert("是现代浏览器");
       // 2.现代：用现有的办法：
       return father.getElementsByClassName(classname);
    }
    else{
    	// alert("是IE浏览器");
    	// 3.IE:
        // 1)获取所有的标签
        var all=father.getElementsByTagName("*");
        // 2)遍历，判断
          // 标签.className==classname
        var newarr=[];
        for(var i=0;i<all.length;i++){
        	if(checkRep(classname,all[i].className)){
          // 3)条件满足，保留标签
        		newarr.push(all[i]);
        	}
          
        }
        //返回新数组
        	return newarr;
    }
 }

function checkRep(val,string){
    var arr=string.split(" ");
 	for(var i in arr){
 		if(arr[i]==val){
 			return true;
 		}
 	}
 	return false;
 }
//=============================================================
//2016.8.30
//二、获取样式的值 兼容函数：
 function getStyle(obj,attr){
  if(obj.currentStyle){
    return parseInt(obj.currentStyle[attr]);
  }
  else{
    return parseInt(getComputedStyle(obj,null)[attr]);
  }
 }
//-----------------------------------------------------
//2016.8.31
//三。获取元素 的兼容问题（可以支持标签，id, class）
//"div"  "#box"  ".box"
function $(selector,father){
   father=father||document;
   if(typeof selector=="string"){
     selector=selector.replace(/^\s*|\s*$/g,"");//去除字符串的前后空格
     if(selector.charAt(0)=="."){     //类名
       return getClass(selector.substring(1),father);
     }
     else if(selector.charAt(0)=="#"){   //ID
        return document.getElementById(selector.substring(1));
     }
     else if(/^[a-z][1-6a-z]*/g.test(selector)){  //标签名
        return father.getElementsByTagName(selector,father);
     }

   }

   else if(typeof selector=="function"){   //函数
         //等待文档加载完成：onload
    addEvent(window,"load",function(){selector();});
   }

}
//-----------------------------------------------------
// 2016.9.2
// 四、获取所有的子节点 的兼容问题
// father:指定父节点
// type:"a" :留下只有元素节点
// type:"b" :留下元素节点和文本节点

 function getChild(father,type){
   type=type||"a";
   var all=father.childNodes; //指定子元素的 集合
   var newarr=[];
    for(var i=0;i<all.length;i++){
      if(type=="a"){
        if(all[i].nodeType==1){
        newarr.push(all[i]);
          }
       }
      else if(type=="b"){
       if(all[i].nodeType==1||(all[i].nodeType==3&&all[i].nodeValue.replace(/^\s*|\s*$/g,""))){
                //元素节点            //文本节点           //去除文本节点的空格
        newarr.push(all[i]);
          }
      }

      
   }
  return newarr;
}
// 五。获取第一个子节点
  function getFirst(father){
    return getChild(father)[0];
  }

//六。获取最后一个子节点
  function getLast(father){
    return getChild(father)[getChild(father).length-1]
  }
//七。获取指定下标的子节点
  function getNum(father,xiabiao){
     return getChild(father)[xiabiao];
  }
// 九。获取下一个兄弟节点
  function getNext(obj){
     next=obj.nextSibling;  //下一个兄弟节点
     if(!next){   //理解：【next不存在,则next="null"--- 是假，所以！next满足if条件。---停止】
        return false;
     }
     while(next.nodeType==3||next.nodeType==8){  //若下一个节点是文本(3),或注释节点(8),则继续向下找
          next=next.nextSibling;
          if(!next){
          return false;
         }
      }return next;

}
  //获取上一个兄弟节点
 function getUp(obj){
   up=obj.previousSibling;
   if(!up){return false;}
   while(up.nodeType==3||up.nodeType==8){
     up=up.previousSibling;
     if(!up){return false;}
   }
    return up;
 }

//9.6
//10.事件绑定的兼容函数：
function addEvent(obj,event,fun){
  obj[fun]=function(){
     fun.call(obj);
     }
   if(obj.attachEvent){
     obj.attachEvent("on"+event,obj[fun]);
   }
    else{
      obj.addEventListener(event,obj[fun],false);
    }
}

//11. 移除事件的兼容函数：
function removeEvent(obj,event,fun){
  
   if(obj.datachEvent){
     obj.datachEvent("on"+event,obj[fun]);
   }
    else{
      obj.removeEventListener(event,obj[fun],false);
    }
}

//12.鼠标的滚轮事件 兼容问题：
   function mouseWheel(obj,up,down){
      //obj：事件源，up:向上滚动的函数
      if(obj.attachEvent){
        obj.attachEvent("onmousewheel",scrollFn); //IE、opera
      }else if(obj.addEventListener){
        obj.addEventListener("mousewheel",scrollFn,false);//chrome,safari,-webkit-
        obj.addEventListener("DOMMouseScroll",scrollFn,false); //firefox、-moz-
      }
      function scrollFn(e){
       e=e||window.event;
       var f=e.detail||e.wheelDelta;
       if(f==-3||f==120){
        if(up){up();}
       }else if(f==-120||f==3){
         if(down){down();}
       }
      }
   }
   
