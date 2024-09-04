document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isVisible = answer.style.display === 'block';

            // Alterna a visibilidade da resposta
            answer.style.display = isVisible ? 'none' : 'block';

            // Alterna a classe do botão
            this.classList.toggle('active');
        });
    });
});
