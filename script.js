function analyzeContent() {
    const urlInput = document.getElementById("url-input").value;
    const urlValidation = document.getElementById("url-validation");
    const contentLength = document.getElementById("content-length");
    const wordCount = document.getElementById("word-count");

    // Clear previous results
    contentLength.innerHTML = '';
    wordCount.innerHTML = '';
    urlValidation.innerHTML = '';

    // Validate URL
    if (!isValidUrl(urlInput)) {
        urlValidation.innerHTML = 'Please enter a valid URL.';
        return;
    }

    urlValidation.innerHTML = 'Valid URL: ' + urlInput;

    // Fetch the content of the URL
    fetch(urlInput)
        .then(response => response.text())
        .then(data => {
            // Analyze content
            const length = data.length;
            const words = data.split(/\s+/).length;

            contentLength.innerHTML = `Content Length: ${length} characters`;
            wordCount.innerHTML = `Word Count: ${words} words`;
        })
        .catch(error => {
            console.error('Error fetching URL:', error);
            urlValidation.innerHTML = 'Error fetching the URL. Please check the URL.';
        });
}

// Validate URL format
function isValidUrl(url) {
    const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return regex.test(url);
}
