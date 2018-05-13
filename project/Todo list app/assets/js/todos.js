// check off specific todos by clicking
$("ul").on ("click","li",function(){
	$(this).toggleClass("completed");

});
// click in X to delete Todo
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
      $(this).remove();
	});
	event.stopPropagation();
	});

$("input [type='text']").keypress(function(event){
	if(event.which===13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></span> " + todoText +"</li>")
}
});