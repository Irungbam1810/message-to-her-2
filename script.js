function handleResponse(response) {
    if (response === 'yes') {
        window.location.href = 'thank-you.html';
    } else if (response === 'no') {
        window.location.href = 'emotional-message.html'; // Takes her to the emotional message page
    }
}
