function stringStack(){
	this.content = '';
}

stringStack.prototype.push = function(str){

	if(this.content.length === 0 ){
		this.content = (str);
	}else{
		this.content += ("***"+str);

	}
	console.log("Current contnet is " + this.content);
};

stringStack.prototype.pop = function(){

	if(this.content.length === 0 ) {return "no content to fetch";}

	var str = this.content.slice((this.content.lastIndexOf('***'))+3);

	this.content = this.content.substring(0,((this.content.lastIndexOf('***'))));
  console.log('current content is '+ this.content);

	return str;
};


var lifo = new stringStack();
lifo.pop();
lifo.push('venkatesan');
lifo.push('Jeevitha');
lifo.push('Priyanka');
lifo.push('papa');
lifo.pop();
