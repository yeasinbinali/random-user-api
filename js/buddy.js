const loadBuddy = () => {
    fetch('https://randomuser.me/api/?results=6')
    .then(response => response.json())
    .then(data => displayBuddy(data))
}
loadBuddy();

const displayBuddy = data => {
    const buddies = data.results;
    const buddiesField = document.getElementById('buddies');
    for(const buddy of buddies){
        console.log(buddy);
        const p = document.createElement('p');
        p.classList.add('buddy');
        p.innerHTML = ` 
        <img src="${buddy.picture.large}">
        Name: ${buddy.name.first} ${buddy.name.last}<br>
        Age: ${buddy.dob.age}<br>
        Email: ${buddy.email}<br>
        Gender: ${buddy.gender}<br>
        Location: ${buddy.location.city}, ${buddy.location.country} <br>
        Cell: ${buddy.cell}`;
        buddiesField.appendChild(p);
    }
}