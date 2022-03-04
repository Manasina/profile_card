// button
const poste = document.querySelector('.poste')
const surPerson = document.querySelector('.propos')

//content

const surContent = document.querySelector('.about')
const posteContent = document.querySelector('.intro-content')

poste.onclick = () => {
    surContent.classList.add('disappear')
    surContent.classList.remove('marge')
    surContent.classList.remove('appear')
    posteContent.classList.add('appear')
    posteContent.classList.add('marge')
    surPerson.classList.remove('active')
    poste.classList.add('active')
}

surPerson.onclick = () => {
    posteContent.classList.remove('appear','marge')
    posteContent.classList.add('disappear')
    surContent.classList.add('appear','marge')
    surPerson.classList.add('active')
    poste.classList.remove('active')
}