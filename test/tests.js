(function(){
  module("Post", {
    beforeEach: function(){
      this.Post = Object.create( new ActiveStorage("Post") );
      this.Post.destroyAll();
    }
  })
  test('can be created', function( assert ){
    assert.notEqual( this.Post, undefined);
  });
  test('has class methods', function( assert ){
    assert.notEqual( this.Post.new, undefined);
    assert.notEqual( this.Post.create, undefined);
    assert.notEqual( this.Post.find, undefined);
  });
  test('has instance methods', function( assert ){
    var p = this.Post.new();
    assert.notEqual( p.save, undefined);
    assert.notEqual( p.destroy, undefined);
  });
  test('find', function( assert ){
    this.Post.create({name: "Jesse"});
    var p = this.Post.find( 1 );
    assert.equal( p, this.Post );
    p = this.Post.find( 100 );
    assert.equal( p, undefined );
  });
  test('create', function( assert ){
    var p = this.Post.create({name: "Jesse"});
    assert.equal( p, this.Post );
  });
  test('destroy', function( assert ){
    var p = this.Post.create({name: "Jesse"});
    p.destroy();
    var len = this.Post.all().length;
    assert.equal( len, 0 );
  });
  test('all', function( assert ){
    this.Post.create({name: "Jesse"});
    assert.equal( this.Post.all().length, 1 );
    this.Post.create({name: "Jesse"});
    assert.equal( this.Post.all().length, 2 );
  });
  test('destroyAll', function( assert ){
    var p = this.Post.create({name: "Jesse"});
    this.Post.destroyAll();
    var len = this.Post.all().length;
    assert.equal( len, 0 );
  });
})()
