//person.js
const person = {
    name: 'Max'
}

export default person

//utilitu.js
export const clean = () => {

}
export const basseData = 10;

//app.js
import person from './person.js'
import {clean} from './utility.js'
import {basseData} from './utility.js'