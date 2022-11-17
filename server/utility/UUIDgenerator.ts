const short = require('short-uuid');

export default function generateUUID(){
    return short.generate();
}