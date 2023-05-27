const webp = require('webp-converter')
const sharp = require('sharp') 
const jpeg = require('jpeg-js')
const file = require('fs')
const path = require('path')
const { readdir, stat } = require('fs/promises');
const dirSize = async directory => {
  const files = await readdir( directory );
  const stats = files.map( file => stat( path.join( directory, file ) ) );

  return ( await Promise.all( stats ) ).reduce( ( accumulator, { size } ) => accumulator + size, 0 );
}


// Create a 'webps' folder if there's not one already
if(file.readdirSync('.').indexOf('webps') == -1) {
  file.mkdir('./webps', (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('Created webps folder');
})
}
// The folder to run this script from should contain a 'jpegs'  folder. Images should be numbered with ' - ' before the original file name
// For each image in the jpegs folder
let images = file.readdirSync('Images')
for (let path of images) {
  let image = `Images/${path}`
  // find out their data
  let imageData = jpeg.decode(file.readFileSync(image))
  // resize them and make them webps
  sharp(image)
    .toFile(`webps/${path.split(' - ')[0].split('.')[0]}.webp`)
}