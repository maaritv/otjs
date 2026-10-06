


const fslibrary = require('node:fs');

function show_file(path) {
  try {
    const data = fslibrary.readFileSync(path, 'utf8');
    console.log(data);
  } catch (err) {
      throw new Error(`Showing the file content failed because ${err.message}`)
  }
}

  try {
    show_file('./myfile.txt');
  } catch (err) {
    console.error(err);
  }




