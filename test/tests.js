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
})()
