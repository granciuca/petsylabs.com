'use strict'

function faqDrop()
{
    const faqContainer = document.querySelector('.faq-items');

    const faqItem = faqContainer.querySelectorAll('.item');

    faqItem.forEach(element => {
        element.addEventListener('click', () => {
            element.classList.toggle('active');
        }, false)
    });
}

faqDrop();