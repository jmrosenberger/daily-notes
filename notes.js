const searchTerm = "still confused";


const notes = [
    {
        id: 1,
        date: "July 14, 2021",
        subject: "GitHub",
        timeSpent: 300,
        feeling: "lost"
    },
    {
        id: 2,
        date: "July 13, 2021",
        subject: "DevTools",
        timeSpent: 15,
        feeling: "still confused"
    }
];

const noteAboutToday = {
    id: 3,
    date: "July 16, 2021",
    subject: "adding objects to arrays",
    timeSpent: 240,
    feeling: "pretty good"
};

notes.push(noteAboutToday);


// ----commented out to reduce output in terminal
//     without overwriting previous work----

// for (const note of notes) {      
//     console.log(note)
// };




// ----commented out to reduce output in terminal
//     without overwriting previous work----

// for (const note of notes) {
//     console.log(`When learning ${note.subject}, I realize I still feel ${note.feeling}, even though I spent ${note.timeSpent} minutes on ${note.date} trying to learn more.`)
// }



// ----commented out to reduce output in terminal
//     without overwriting previous work----


// for (const note of notes) {
//     console.log(`Note ${note.id}
    
//     ${note.date}
//     I learned ${note.subject}
//     I spent ${note.timeSpent} working on it
//     I felt ${note.feeling}
    
//     ----------
//     `)
    
// }




for (const note of notes) {
    if (searchTerm === note.feeling) {
        console.log(note)
    } else {
        console.log("try again buddy")
    }
}



const createNote = (note) => {
    const lastIndex = notes.length - 1 
    const currentLastNote = notes[lastIndex]
    const maxId = currentLastNote.id
    const idForNewNote = maxId + 1

    note.id = idForNewNote
    note.dateCreated = new Date()
    notes.push(note)

}

const newNote = {
    date: "July 18, 2021",
    subject: "adding more objects to arrays",
    timeSpent: 40,
    feeling: "pretty good"
}
const newestNote = {
    date: "July 19, 2021",
    subject: "adding dateCreated object, assessment",
    timeSpent: 40,
    feeling: "pretty great"
}



createNote(newNote)
createNote(newestNote)


console.log(notes)