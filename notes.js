const notes = [
    {
        id: 1,
        subject: "GitHub",
        date: "July 14, 2021",
        feeling: "lost",
        timeSpent: 300
    },
    {
        id: 2,
        subject: "DevTools",
        date: "July 13, 2021",
        feeling: "still confused",
        timeSpent: 15
    }
];

const noteAboutToday = {
    id: 3,
    subject: "adding objects to arrays",
    date: "July 16, 2021",
    feeling: "pretty good",
    timeSpent: 240
};

notes.push(noteAboutToday);


for (const note of notes) {
    console.log(note)
};

for (const note of notes) {
    console.log(`When learning ${note.subject}, I realize I still feel ${note.feeling}, even though I spent ${note.timeSpent} minutes on ${note.date} trying to learn more.`)
}