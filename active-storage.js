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
    for( prop in data ){
      this[prop] = data[prop]; 
    }
    return this;     
  },
  save: function(){
    var all = this.all();
    if( !this.id ){
      this.id = this.all().length + 1;
      all.push( this );
    } else {
      all[this.id - 1] = this;
    }
    localStorage.setItem(this.kind, JSON.stringify( all ));
    return this;
  },
  create: function( data ){
    this.new( data );
    this.id = false;
    this.save();
  },
  find: function( id ){
    var obj = _.where( this.all(), {id: id} )[0];
    for( prop in obj ){
      this[prop] = obj[prop];
    }
    return this;
  },
  findBy: function( predicate ){
    var obj = _.find( this.all(), predicate ); 
    for( prop in obj ){
      this[prop] = obj[prop];
    }
    return this;
  },
  where: function( predicate ){
    return _.where( this.all(), predicate );
  },
  destroy: function(){
    var self = this;
    var all = _.filter( self.all(), function( o ){
      return o.id != self.id; 
    });
    localStorage.setItem( self.kind, JSON.stringify( all ) );
  },
  destroyAll: function(){
    localStorage.setItem( this.kind, "[]" );
  }
};