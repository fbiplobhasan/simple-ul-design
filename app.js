const people = [
    {
        id: 1,
        name: "Rakib Hasan",
        occupation: "Teacher",
        contact: "01711-123456",
        address: "House #12, Road #4, Dhanmondi, Dhaka",
        hobbies: ["Reading", "Traveling", "Listening to music"],
    },
    {
        id: 2,
        name: "Sabrina Afrin",
        occupation: "Data Analyst",
        contact: "01822-654321",
        address: "Chattogram Road, Agrabad, Chattogram",
        hobbies: ["Reading books", "Drawing", "Blogging"],
        city: "Chattogram"
    },
    {
        id: 3,
        name: "Mohammad Imran",
        occupation: "Freelancer",
        contact: "01933-987654",
        address: "Shaheed Minar Road, Rajshahi",
        hobbies: ["Photography", "Gaming", "Cooking"],
    },
    {
        id: 4,
        name: "Tania Akter",
        occupation: "Student",
        contact: "01644-876543",
        address: "Khulna Sadar, Khulna",
        hobbies: ["Dancing", "Singing", "Crafting"],
    },
    {
        id: 5,
        name: "Saiful Islam",
        occupation: "Businessman",
        contact: "01555-432198",
        address: "Nandipara, Kurigram",
        hobbies: ["Gardening", "Fishing", "Watching movies"],
        city: "Kurigram"
    }
];


const peopleList = document.getElementById('people-list')
const personInfo = document.getElementById('person-info')
// console.log(peopleList);

// Step-1 readData
const renderPeopleList = (people) => {
    people.map((person) => {
        // console.log(person.name);

        // Step-2 createElement
        const li = document.createElement('li')

        li.classList.add('cursor-pointer', "text-blue-500", 'p-2')
        li.textContent = person.name;

        // Step-4 addEventlistener
        li.addEventListener('click', () => {
            handlePersonClick(person.id)
        })

        peopleList.appendChild(li)
    })
}

// Step-5 displayPersonIfo
const displayPersonIfo = (person) => {
    // console.log(person);

    // removeAttribute
    personInfo.classList.remove('hidden')

    // add hiddenAttribute
    document.getElementById('person-selection').classList.add('hidden')

    // create and displayInfo
    personInfo.innerHTML = `

       <h2 class="text-xl font-bold mb-2">
       ${person.name}
       </h2>
       <p> City: ${person?.city || "N/A"} </p>
       <p> Occupation: ${person?.occupation || "N/A"} </p>
       <p> Mobil No. ${person?.contact || "N/A"} </p>
       <p> House Information: ${person?.address || "N/A"} </p>
       <p> Hobbies: ${person?.hobbies?.join(", ") || "N/A"} </p>
   `
    //    <p> Hobbies: ${person?.hobbies.map((hobby) => hobby)} </p>

}


// Step-3 findId
const handlePersonClick = (id) => {
    const person = people.find((p) => p.id == id)
    displayPersonIfo(person);
}

renderPeopleList(people);
