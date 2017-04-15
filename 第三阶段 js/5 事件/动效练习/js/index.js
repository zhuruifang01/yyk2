// 选项卡
// 1.window添加onload事件；
// 2.获取元素
// 3.3个title添加移入事件
// 4.解决下标问题：3个title对象添加一个相同的属性，存储各自的下标
// 5.事件内部用下标:this.属性名
// 6.给相对应的con添加类名

window.onload=function(){     // 1.window添加onload事件；
  var title=getClass("title"); // 2.获取元素
  var con=getClass("con");
  for(var i=0;i<title.length;i++){ // 3.为3个【title】添加移入事件
  title[i].name=i; // 4.解决下标问题
  title[i].onmouseover=function(){
  	//this:鼠标移入谁就指谁
     for(var j=0;j<con.length;j++){
     	con[j].className="con"; //6.给相对应的con添加类名（图全部消失）
     	title[j].className="title";
      }
     con[this.name].className="con con_active";
     this.className="title title_active"
  }
}

}