var fs = require('fs');

export default function img2base64(path: string){
   var image = fs.readFileSync(path);

   return image.toString('base64');
}