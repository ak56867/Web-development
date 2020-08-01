//check click on todos
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

//click on X(delete button)
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();		//to stop event bubbling 
});

$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		//taking new todo task as input
		var todoText = $(this).val();
		$(this).val("");
		//appending the new task as li
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+todoText+"</li>");
	}
});

$(".fa-pen").click(function(){
	$("input[type='text']").fadeToggle();
});