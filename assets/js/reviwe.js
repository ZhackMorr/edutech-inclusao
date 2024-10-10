document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Captura o comentário e avaliação do formulário
    const comment = document.getElementById('comment').value;
    const stars = document.querySelector('input[name="stars"]:checked').value;

    // Cria o elemento do novo comentário
    const commentList = document.getElementById('commentList');
    const newComment = document.createElement('li');
    newComment.innerHTML = `
        <div class="stars">${'★'.repeat(stars)}</div>
        <p>${comment}</p>
    `;

    // Adiciona o comentário à lista
    commentList.appendChild(newComment);

    // Limpa o formulário
    document.getElementById('reviewForm').reset();
});

    // Estrelas de avaliação do livro

document.querySelectorAll('.star-rating .icon').forEach((star) => {
    star.addEventListener('mouseover', function () {
        const value = this.getAttribute('data-value');
        highlightStars(value);
    });

    star.addEventListener('mouseout', function () {
        resetStars();
    });

    star.addEventListener('click', function () {
        const value = this.getAttribute('data-value');
        setRating(value);
    });
});

function highlightStars(value) {
    document.querySelectorAll('.star-rating .icon').forEach((star) => {
        if (star.getAttribute('data-value') <= value) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

function resetStars() {
    document.querySelectorAll('.star-rating .icon').forEach((star) => {
        if (!star.classList.contains('selected')) {
            star.classList.remove('active');
        }
    });
}

function setRating(value) {
    document.querySelectorAll('.star-rating .icon').forEach((star) => {
        star.classList.remove('selected');
        if (star.getAttribute('data-value') <= value) {
            star.classList.add('selected');
        }
    });
}
