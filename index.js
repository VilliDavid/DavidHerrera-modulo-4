// Obtiene el valor mandado desde comando y analiza si es add o remove
const command = process.argv[2];

if (command === 'add') {
    console.log ('Adding note!');
} else if (command === 'remove') {
    console.log ('Removing note!')
}

// Provando que yargs funcione correctamente obteniendo el comando add
const yargs = require ('yargs');
yargs.version('1.1.0');
/* yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log ('Adding a new note!');
    }
});
console.log (yargs.argv); */

// Crea una nota con comando yargs
// Con esto se puede usar el comando --title y --body

yargs.command({
    command: 'add',
    describe: 'Add a new command',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log ('Title: ' + argv.title);
        console.log ('Body: ' + argv.body);
    }
});
console.log (yargs.argv);

// Convertir una cadena JSON con JSON.stringify y JSON.parse
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
};
// Convierte JSObject en JSON string
const bookJson = JSON.stringify(book);
//Convierte un JSON string en JSObject
const bookObject = JSON.parse(bookJson);
console.log(bookObject.title);