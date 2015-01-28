(function(){
  test('can be created', function( assert ){
    var Post = Object.create( new ActiveStorage() );
    assert.notEqual( Post, undefined);
  });
  test('has class methods', function( assert ){
    var Post = Object.create( new ActiveStorage() );
    assert.notEqual( Post.new, undefined);
    assert.notEqual( Post.create, undefined);
    assert.notEqual( Post.find, undefined);
  });
  test('has instance methods', function( assert ){
    var Post = Object.create( new ActiveStorage() );
    var p = Post.new();
    assert.notEqual( p.save, undefined);
    assert.notEqual( p.destroy, undefined);
  });
  test('find', function( assert ){
    var Post = Object.create( new ActiveStorage() );
    Post.destroyAll();
    Post.create({name: "Jesse"});
    var p = Post.find( 1 );
    assert.equal( p, Post);
  });
})()
