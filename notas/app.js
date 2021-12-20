// Variables
const yargs = require('yargs');
const notes = require('./notes.js');

yargs.version('1.1.0');

// --- --- --- Creación de comandos --- --- --- //
// Comando 'add'
yargs.command({
    command: 'add',
    describe: 'Agregar nueva nota',
    builder: {
        title: {
            describe: 'Titulo',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Cuerpo del archivo',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
    }
});

// Comando 'remove'
yargs.command({
    command: 'remove',
    describe: 'Elimina una nota',
    builder: {
        title: {
            describe: 'Titulo',
            demanOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        notes.removeNote(argv.title);
    }
});

// Comando 'list'
yargs.command ({
    command: 'list',
    describe: 'Despliega lista de notas',
    handler(){
        notes.listNotes();
    }
});

// Comando 'read'
yargs.command ({
    command: 'read',
    describe: 'Muestra una nota',
    builder: {
        title: {
            describe: 'Titulo de la nota',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
});

yargs.parse();