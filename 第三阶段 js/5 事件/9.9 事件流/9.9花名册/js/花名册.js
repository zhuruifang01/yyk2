$(function(){
	//修改
	var tables=$("#tables");
	tables.ondblclick=function(e){
      var e=e||window.event;
      var obj=e.target||e.srcElement;

       if(obj.className=="del"||obj.nodeName=="TH"||obj.nodeName=="H3"||obj.nodeName=="CAPTION"){
      	return false;
      }

      var val=obj.innerHTML;
      obj.innerHTML="";

     
      var input=document.createElement("input");  //节点创建【追加input标签 到obj】
      input.type="text";
      input.style.border="0";
      input.style.padding="0";
      obj.appendChild(input);

      input.focus();
      input.value=val;

      input.onblur=function(){
      obj.innerHTML=this.value;
      }
    }

//添加：
  var add=$("#add");
  var tbody=$("#tbody");
  add.onclick=function(){
  var tr=document.createElement("tr");
  
  	for(var i=0;i<5;i++){
  		if(i==4){
  			var td=document.createElement("td");
  		    td.innerHTML="X";
  		    td.className="del";
        }else{
        	var td=document.createElement("td");
  			
        }
            tr.appendChild(td);
    }
  	tbody.appendChild(tr);
  }

//删除
   tbody.onclick=function(e){
   var e=e||window.event;
   var obj=e.target||e.srcElement;
   if(obj.className=="del"){
   	var parent=obj.parentNode;
   	tbody.removeChild(parent);

 }
   }


});