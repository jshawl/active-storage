# Active Storage

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

### `.find_by`

```js
Post.find_by( {name: "Jesse"} );
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

### `.destroy_all`

```js
Post.destroy_all();
```