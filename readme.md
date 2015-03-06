# Active Storage [![Build status indicator](https://travis-ci.org/jshawl/active-storage.svg)](https://travis-ci.org/jshawl/active-storage) [![Coverage Status](https://coveralls.io/repos/jshawl/active-storage/badge.svg)](https://coveralls.io/r/jshawl/active-storage)

## Usage

```html
<script src='active-storage.js'></script>
<script>
  var Post = Object.create( new ActiveStorage("Post") );
</script>
```

Link to the ActiveStorage Library and create a new model.

You now have access to your favorite ActiveRecord methods, powered by localStorage!

### `.new`

```js
var p = Post.new({name: "Jesse"});
```

### `.create`

```js
var p = Post.create({name: "Jesse"});
```

### `#save`

```js
p.save();
```

### `.find`

```js
Post.find( 1 );
```

### `.findBy`

```js
Post.findBy( {name: "Jesse"} );
```

### `.where`

```js
Post.where( {name: "Jesse"} );
```

### `.all`

```js
Post.all();
```
### `#destroy`

```js
p.destroy();
```

### `.destroyAll`

```js
Post.destroyAll();
```
