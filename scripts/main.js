document.querySelectorAll('#git li').forEach(li => {
    li.addEventListener('click', e => {
        // conssole.log(e);
        const confetti = document.createElement('img');
        confetti.setAttribute('src', './images/confetti.gif');
        confetti.style.position = 'absolute';
        confetti.style.top = e.pageY+'px';
        confetti.style.left = e.pageX+'px';
        confetti.style.zIndex = -1;
        confetti.style.transform = `translate(-50%,-50%)`;
        document.body.appendChild(confetti);
        setTimeout(() => { confetti.remove() }, 1900);
    });
});