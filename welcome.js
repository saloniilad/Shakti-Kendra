// Get the modal
var modal = document.getElementById("infoModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get all cards
var cards = document.querySelectorAll('.card');

// When the user clicks on a card, open the modal 
cards.forEach(card => {
    card.addEventListener('click', function() {
        var title = this.querySelector('.card-title').innerText;
        document.getElementById('modalText').innerText = `Learn more about ${title}. Sign in to get full access.`;
        modal.style.display = "block";
    });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
