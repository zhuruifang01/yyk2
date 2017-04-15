
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
    return obj.currentStyle[attr];
  }
  else{
    return getComputedStyle(obj,null)[attr];
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
     if(selector.charAt(0)=="."){
       return getClass(selector.substring(1),father);
     }
     else if(selector.charAt(0)=="#"){
        return document.getElementById(selector.substring(1));
     }
     else if(/^[a-z][1-6a-z]*/g.test(selector)){
        return father.getElementsByTagName(selector,father);
     }

   }

   else if(typeof selector=="function"){
    window.onload=function(){
      selector();
    }
   }

}