var fs = require('fs');

// GET FILES ON /DATA FOLDER
function getFiles() {
    fs.readdir('./data', function(err, files) {
        if (err) throw err;
        console.log(files);
    });
}

// getFiles();


// MERGE FILES
function mergeFiles() {
    fs.readdir('./data', function(err, files) {
        if (err) throw err;
        var content = '';
        files.forEach(function(file) {
            content += fs.readFileSync('./data/' + file, 'utf8');
        });
        console.log(content);
    });
}

mergeFiles();