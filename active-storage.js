var ActiveStorage = function(){
  this.all = [];
}

ActiveStorage.prototype = {
  new: function( data ){
    this.all.push(data);    
  }
}