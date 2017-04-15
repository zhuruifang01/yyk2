function jquery(selector){
  if(typeof selector=="string"){
  	var obj=document.getElementsByTagName(selector);
  	//alert(obj[0]);
  	//this[0]=obj[0];
  	for(var i=0;i<obj.length;i++){
  	this[i]=obj[i];
   }
    this.length=obj.length;
  }
}

jquery.prototype={
  each:function(callback){
  	for (var i = 0;i<this.length;i++) {
  		callback(i,this[i]);
  	}
  },
  html:function(con){
  	this.each(function(index,obj){
     obj.innerHTML=con;
  	})
  	// for (var i = 0;i<this.length;i++) {
  	// 	this[i].innerHTML=con;
  	// };
  	return this;
  },
  css:function(attrobj){
  	this.each(function(index,obj){
  		 for(var j in attrobj){
     	obj.style[j]=attrobj[j];
      }  
  	})
   // for (var i = 0;i<this.length;i++) {
   //   for(var j in attrobj){
   //   	this[i].style[j]=attrobj[j];
   //   }  

  	// };
  	return this;
  },
  click:function(eveCallback){
  	 this.each(function(index,obj){
        obj.onclick=function(){
          eveCallback.call(obj);	
        }
  	 })
    // for(var i=0;i<this.length;i++){
    //   this[i].onclick=function(){
    //   	eveCallback.call(obj);
    //   }
    // }
     return this;
  }
  
}

function $(sele){
	return new jquery(sele);
}