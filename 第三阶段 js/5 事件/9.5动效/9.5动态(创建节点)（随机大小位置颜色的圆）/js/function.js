//解决类名的兼容问题
function getClass(classname,farther){
	farther = farther || document;
	//判断浏览器
	if(farther.getElementsByClassName){
		//ff
		return farther.getElementsByClassName(classname);
	}else{
		var newarr = [];
		//现代,获取全部的标签
		var all = farther.getElementsByTagName("*");
		//遍历
		for (var i = 0; i < all.length; i++) {
			// 判断
			if(checkRep(classname,all[i].className)){
				newarr.push(all[i]);
			}
		};
		return newarr;
	}
}
function checkRep(val,string){
	var arr = string.split(" ")
	for(var i in arr){
		if(val == arr[i]){
			return true;
		}
	}
	return false;
}


// 获取样式的值的兼容函数；
function getStyle(obj,attr){
	// 判断浏览器
	if(obj.currentStyle){
		// IE浏览器
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,null)[attr];
	}
}

//获取元素的兼容函数，可以支持标签，id，class；

function $(selector,farther){
	farther = farther || document;
	if(typeof selector == "string"){//判断是否字符串
		selector = selector.replace(/^\s*|$\s*/g,"");//取消字符串前后的空格的影响；
		if(selector.charAt(0) == "."){ //判断是否是类
			return getClass(selector.substring(1),farther);//满足条件，返回函数getClaa;
		}else if(selector.charAt(0) == "#"){//判断是否是id
			return document.getElementById(selector.substring(1));//条件满足，返回获取id的方法；
		}else if(/^[a-z][1-6a-z]*/g.test(selector)){//判断是否为标签
			return farther.getElementsByTagName(selector);//条件满足，返回获取标签的方法；
		}
	}else if(typeof selector == "function"){
		window.onload = function(){
			selector();
		}
	}
}
// ^表示字符串的开头；
//g进行全局匹配；
// | 或；


// 获取所有的子节点的兼容函数
// father:指定父节点；
// type：a  只有元素节点
// 	  b  元素节点和文本节点
function  getChild(father,type){
	type = type || "a";
	var all = father.childNodes;//获取父节点对象的子节点
	var newarr = [];	//创建新数组；
	for (var i = 0; i < all.length; i++) {//遍历子节点		
		if(type == "a"){
			if(all[i].nodeType == 1){//对子节点的类型判断
				newarr.push(all[i]);//子节点类型为1，即子节点为元素节点时，保留子节点
			}
		}else if(type == "b"){
			if(all[i].nodeType == 1 || (all[i].nodeType == 3 && all[i].nodeValue.replace(/^\s*|$\s*/g,"") != "")){
				newarr.push(all[i]);
			}
		}
	};
	return newarr;//返回数组
}

// 获取第一个子节点
function getFirst(father){
	return getChild(father)[0];
}

//获取最后一个子节点
function getLast(father){
	return getChild(father)[getChild(father).length-1];
}
// 获取指定子节点
function getNum(father,xiaobiao){
	return getChild(father)[xiaobiao];
}
//获取下一个兄弟节点
function getNext(obj){
	var next = obj.nextSibling;
	if(!next){
		return false;
	}
	while(next.nodeType == 8 || next.nodeType == 3){
		next = next.nextSibling;
		if(!next){
			return false;
		}
	}
	return next;
}