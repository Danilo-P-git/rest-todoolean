$(document).ready(function() {

  //Read

$.ajax(
  {
    "url": "http://157.230.17.132:3028/todos",
    "method": "GET",
    "success": function(data){
      render(data);
    },
    "error": function(){
      alert("errore");
    }
  }
);

// delete

$("#list").on('click', ".delete", function() {
  var elemento = $(this).parent();
  var id = elemento.attr("id");
  $.ajax(
   {
   "url": "http://157.230.17.132:3028/todos/"+id,
   "method": "DELETE",
   "success": function(data){
     elemento.remove();
     },
   "error": function(){
     }
   }
  );


});

// CREATE

$(".add-object").click(function(){
  var val = $("#input-object").val();

  if (val != "") {
    $.ajax(
     {
     "url": "http://157.230.17.132:3028/todos/",
     "method": "POST",
     "data": {
       "text": val
     },
     "success": function(data){
       var elementoCreato = [];
       elementoCreato.push(data);
       render(elementoCreato);
      },
     "error": function(){
       alert("errore");
      }
     }
  );
  }

})






});


function render(data) {
  var source = $("#todo-template").html();
  var template = Handlebars.compile(source);

  var context = {
    "data": data
  };
  var html = template(context);
  $("#list").append(html);
}
