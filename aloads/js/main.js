$(document).ready(function(){

	function htmlEntities(str) {
    	return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
	}

	$(".item").on("click",function(){
		$("#modal").addClass("show");
		var css = $("pre", $(this)).html();
		var html = $("div", $(this)).prop('outerHTML');

		$("#modal .css-code pre").append(css);
		$("#modal .html-code pre").append(htmlEntities(html));
        $('body').css('overflow','hidden');
	});

    $(".icon-eye").on("click",function(){
        $(this).parent().find(".item").click();
    });

    $("#modal pre").on("dblclick",function(){
        if (this.select) {
            this.select();
        }
        else if (document.selection) {
            var range = document.body.createTextRange();
            range.moveToElementText(this);
            range.select();
        } else if (window.getSelection) {
            var range = document.createRange();
            range.selectNode(this);
            window.getSelection().addRange(range);
        }
    });

	$(".close").on("click",function(e){
        e.PreventDefault;
		$("#modal").removeClass("show");
		$("#modal pre").empty();
        $('body').css('overflow','auto');
	});

	$(".options .btn").on("click",function(e){
		e.PreventDefault;
		e.StopPropagation;
		$(".options .btn").removeClass("active");
		$(this).addClass("active");
		if ($(this).hasClass("light-btn")) {
			$(this).closest(".preloader").addClass("dark");
		} else {
			$(this).closest(".preloader").removeClass("dark");
		}
	});

})