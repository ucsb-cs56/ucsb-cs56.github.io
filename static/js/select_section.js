


$( document ).ready(function() {
    console.log("select_section.js");
    var offering = localStorage.getItem("offering");
    console.log("offering=" + offering);

    $(".offerings-dropdown-item").click(
	function(){
	    console.log("offering was clicked");
	    var elem = $(this);
	    var text = elem.text();
	    var url = elem.data("url");
	    console.log("text: " + text);
	    console.log("url: " + url);
	    var offering = {
		"text" : text,
		"url" : url
	    };
	    localStorage.setItem("offering",
				 JSON.stringify(offering));
	}
    );
    
});
