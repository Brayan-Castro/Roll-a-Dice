var loadFile = function(event) {
	var pdf = document.getElementById('output');
	pdf.data = URL.createObjectURL(event.target.files[0]);
};