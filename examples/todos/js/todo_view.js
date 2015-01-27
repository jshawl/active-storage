var TodoView = function( model, params ){
  this.list = document.querySelector( params.list )
  this.form = document.querySelector( params.form )
  this.model = model;
  this.render();
  this.form.addEventListener("submit", this.create.bind(this) );
  this.form.addEventListener("submit", this.create.bind(this) );
}

TodoView.prototype = {
  render: function(){
    this.list.innerHTML = '';
    var i = 0,
      len = Todo.all().length;
    for( ; i < len; i++ ){
      var li = document.createElement("li");
      li.innerHTML = Todo.all()[i].description;
      this.list.appendChild( li );
    }
  },
  create: function( event ){
    event.preventDefault();	  
    val = this.form.querySelector("input").value;
    Todo.create({ description: val });
    this.render();
  }
}