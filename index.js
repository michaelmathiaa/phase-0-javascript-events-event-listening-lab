function addingEventListener() {
    const input = document.getElementById('button');

    input.addEventListener('click', clickAlert);
}

const clickAlert = () => alert('I was clicked!')

addingEventListener();
