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
  test('findBy', function( assert ){
    this.Post.create({name: "Jesse"});

    var p = this.Post.findBy( {name: "Jesse"} );
    assert.equal( p, this.Post, "it can be found");

    p = this.Post.findBy({name:"Meow"});
    assert.equal( p, undefined, "it can be found if it exists");
  });
  test('create', function( assert ){
    var p = this.Post.create({name: "Jesse"});
    assert.equal( p, this.Post, "it should be a post");
    assert.equal( p.id, 1, "it should have an id");
  });
  test('destroy', function( assert ){
    var p = this.Post.create({name: "Jesse"});
    var len = this.Post.all().length;
    p.destroy();
    assert.equal( len, 1 );
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
  test('save', function( assert ){
    var p = this.Post.new({name: "Jesse"});
    assert.equal( p.id, undefined );

    p.save();

    assert.equal( p.id, 1, "it should have an id");
    assert.equal( this.Post.all().length, 1, "it should be in the collection");
  });
  test('where', function( assert ){
    this.Post.create({name: "Jesse"});
    var where = this.Post.where({name: "Jesse"});
    assert.equal( where.constructor, Array, "it should return an array");
    assert.equal( where[0], this.Post, "it should return an array of posts");
  });
  test('update', function( assert ){
    var p = this.Post.create({name: "Jesse"});
    p.update({name: "Adam"});
    assert.equal( p.name, "Adam", "it should update existing attributes");
    p.update({age: 23});
    assert.equal( p.name, "Adam", "it should not remove existing attributes");
    assert.equal( this.Post.all()[0].name, "Adam", "it should save to localstorage");
  });
})()
