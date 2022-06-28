const thumbnail = document.querySelectorAll('.thumbnail img');

thumbnail.forEach( e => {
    e.addEventListener('click', () => {
        console.log('test')
    })
})