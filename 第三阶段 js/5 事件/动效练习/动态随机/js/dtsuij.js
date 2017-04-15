$(function(){
	var xingz = ["0","50%","70%","100%"]
	var bgcolor = ["red","blue","purple","yellow","black","green","#bbb","pink","khaki","navy blue"]
	// console.log(num);
	for (var i = 0; i < 10; i++) {
		var num = parseInt(Math.random()*10);
		var w = parseInt(Math.random()*400);
		var h = parseInt(Math.random()*400);
		var x = parseInt(Math.random()*4);
		var lef = parseInt(document.documentElement.clientWidth)-w;
		var hei = parseInt(document.documentElement.clientHeight)-h;
		var l = parseInt(Math.random()*lef);
		var t = parseInt(Math.random()*hei);
		
		
		// 创建标签
		var div = document.createElement("div");
		// console.log(div);
		document.body.appendChild(div);
		// 添加文本
		// var text = document.createTextNode("$");
		// div.appendChild(text);
		// 添加属性
		var style = document.createAttribute("style");
		console.log(style);
		style.nodeValue = "width:"+w +"px; height:"+h+"px ;background:"+bgcolor[num]+";border-radius:"+xingz[x]+";position:absolute;left:"+l+"px;top:"+t+"px";
		div.setAttributeNode(style);
	};

	
})