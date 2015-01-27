var ActiveStorage = function(){ }

ActiveStorage.prototype = {
  all: [],
  new: function( data ){
    this.data = data;
    return this;     
  },
  save: function(){
    var self = Object.create( this );
    for( prop in self.data ){
      self[prop] = self.data[prop]; 
    }
    this.all.push( self );	
    return this;
  },
  create: function( data ){
    this.data = data;
    this.save();
  }
}