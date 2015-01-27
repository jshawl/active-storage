var ActiveStorage = function(){
  this.all = [];
}

ActiveStorage.prototype = {
  new: function( data ){
    this.data = data;
    return this;     
  },
  save: function(){
    this.all.push( this );	
    return this;
  }
}