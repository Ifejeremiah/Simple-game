const character = document.querySelector('#character');
const block = document.querySelector('#block');

function jump() {
    if (character.classList != 'animate') {
        character.classList.add('animate');
    }

    setTimeout(function () {
        character.classList.remove('animate');
    }, 500)
}

const checkDead = setInterval(function () {
    const characterTop =
        parseInt(window.getComputedStyle(character).getPropertyValue('top'));

    const blockLeft =
        parseInt(window.getComputedStyle(block).getPropertyValue('left'));

    if (blockLeft < 20 && characterTop >= 130) {
        block.style.animation = 'none';
        block.style.display = 'none';
        alert('Oh no. You lose! \nYou should have been faster.\nRefresh page to start again.');
    }
}, 10);

