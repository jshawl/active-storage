var ActiveStorage = function( kind ){ 
  this.kind = kind;
}

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
    return self;
  },
  create: function( data ){
    this.data = data;
    this.save();
  },
  find_by: function( predicate ){
    return _.find( this.all, predicate ); 
  },
  where: function( predicate ){
    return _.where( this.all, predicate );
  }
}