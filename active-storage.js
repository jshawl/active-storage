var ActiveStorage = function( kind ){ 
  this.kind = kind;
}

ActiveStorage.prototype = {
  all: function(){
    if( localStorage.getItem( this.kind ) ){
      return JSON.parse( localStorage.getItem( this.kind ) ); 
    } else {
      return [];
    }     
  },
  new: function( data ){
    this.data = data;
    return this;     
  },
  save: function(){
    var self = Object.create( this );
    var id = this.all().length + 1;
    for( prop in self.data ){
      self[prop] = self.data[prop]; 
    }
    self.id = id;
    var all = this.all();
    all.push( self );
    localStorage.setItem(this.kind, JSON.stringify( all ));
    return self;
  },
  create: function( data ){
    var self = Object.create( this );
    self.data = data;
    self.save();
  },
  find: function( id ){
    return _.where( this.all(), {id: id} )[0];
  },
  findBy: function( predicate ){
    return _.find( this.all(), predicate ); 
  },
  where: function( predicate ){
    return _.where( this.all(), predicate );
  },
  destroy: function(){
    var self = this.data;
    this.all = _.filter( this.all, function( o ){
      return o.data != self;
    });
    ActiveStorage.prototype.all = this.all;
    localStorage.setItem(this.kind, JSON.stringify( this.all ));
  },
  destroyAll: function(){
    localStorage.setItem( this.kind, "[]" );
  }
};