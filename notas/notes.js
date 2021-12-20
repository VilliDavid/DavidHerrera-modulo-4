const fs = require ('fs');
const { compileFunction } = require('vm');

// --- --- --- Delcaracion de funciones --- --- --- //
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes (notes);
        console.log ('Nueva nota creada');
    } else {
        console.log ('Titulo en uso');
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if(notes.length > notesToKeep.length) {
        console.log ('Nota Removida');
        saveNotes(notesToKeep);
    } else {
        console.log ('Nota no encontrada');
    }
};

const listNotes = () => {
    const notes = loadNotes();

    console.log ('Estan son las notas');

    notes.forEach((notes) => {
        console.log (notes.title);
    })
};

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if (note) {
        console.log(note.title);
        console.log(note.body);
    } else {
        console.log('Note not found!');
    }
};

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};