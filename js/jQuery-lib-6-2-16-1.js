// Get the modal-log
var modal-log = document.getElementById('id01');

// When the user clicks anywhere outside of the modal-log, close it
window.onclick = function(event) {
    if (event.target == modal-log) {
        modal-log.style.display = "none";
    }
}

// Get the modal2-to-fp
var modal2-to-fp = document.getElementById('id02');

// When the user clicks anywhere outside of the modal2-to-fp, close it
window.onclick = function(event) {
    if (event.target == modal2-to-fp) {
        modal2-to-fp.style.display = "none";
    }
}

$(document).ready(function(){
    $(".bgimg-1").scrolltop(function(){
        $(".bortime").animate({position: 'fixed', width: '100%'});
    });
});


	
	