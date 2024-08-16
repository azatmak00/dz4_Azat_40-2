//FIRST PART
const people = document.getElementById('people');

const persons = new XMLHttpRequest()

persons.onload = () => {
    const data = JSON.parse(persons.response);
    data.forEach(person => {
        const card = document.createElement('div');
        card.classList.add('person_card');
        card.innerHTML = `<h2>${person.name}</h2>
        <img src="${person.photo}" alt="${person.photo}" class="person_photo">
        <span>${person.age}</span>`;
        people.appendChild(card);

    })
}

persons.open("GET","persons.json");
persons.setRequestHeader("Content-type", "application/json");
persons.send()



//SECOND PART
const button = document.getElementById('btn');
button.classList.add("btn")
button.addEventListener('click', () => {
    const request = new XMLHttpRequest();

    request.open("GET","data.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send()
    request.onload = () => {
        const data = JSON.parse(request.response);
        data.forEach(person => {
            console.log(person);
        })
    }
})
