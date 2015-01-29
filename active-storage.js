var ActiveStorage = (function(){

  var ActiveStorage = function( kind ){ 
    this.kind = kind;
  }

  function propify( self, data ){
    for( var prop in data ){
      self[prop] = data[prop]; 
    }
    return self;     
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
      return propify( this, data );
    },
    save: function(){
      var all = this.all();
      if( !this.id ){
	this.id = all.length + 1;
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
      return this.save();
    },
    update: function( data ){
      return propify( this, data ).save();
    },
    find: function( id ){
      var obj = _.where( this.all(), {id: id} )[0];
      if( obj ){
	return propify( this, obj );
      } else {
	return undefined;
      }
    },
    findBy: function( predicate ){
      var obj = _.find( this.all(), predicate ); 
      if( obj ){
	return propify( this, obj );
      } else {
	return undefined;
      }
    },
    where: function( predicate ){
      var all = _.where( this.all(), predicate );
      var self = this;
      return _.map( all, function( o ){
        return propify( self, o ); 
      });
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
  return ActiveStorage;
})();