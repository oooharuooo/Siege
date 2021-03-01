// I don't have enough time for the Copy Clipboard path. 
// However, if I have enough time, I will loop over all of the copy button, get the value from the Anchor tag
// Use a copy execCommand to copy those value then Alert command to the user

function myFunction() {
	/* Get the text field */
	const copyText = document.querySelector(".copy-link").href;


	/* Select the text field */
	copyText.select();

	/* Copy the text inside the text field */
	document.execCommand("copy");

	/* Alert the copied text */
	alert("Copied the text: " + copyText.value);
}



