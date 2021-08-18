var booleanVar: boolean = false;
var numberVar: number = 0;
var stringVar: string = "";
var arrayVar: number[] = [];

enum jsonObjs {red,blue};
var jsonObjsVar: jsonObjs = jsonObjs.red;
alert(jsonObjsVar);

enum jsonObjsAssociate {red = 2,blue = 1};
var jsonObjsAssociateVar: jsonObjsAssociate = jsonObjsAssociate.red;
alert(jsonObjsAssociateVar);


var annyVar: any = 'text';
var arraYAnnayVar: any[] = [];

function functionName(): void {

}

function functionNameTest(a: number, b = a + 5, c = a + b): number {
    return 0;
}

var funcName = (args) => { 
    return args + 5 
}

//loops
let colors = ['red', 'orange'];

for (let index in colors) {
     colors[index];
}

for (let color in colors) {
     colors[color];
}

var letters = 'abc';

for (let letter in letters) {
     letters[letter];
}

let num1;
const num2 = 10;
const obj1 = {
    name: 'namestr'
}

obj1.name = "newname";
//const you can assign a new value to the property

const getArrowValue = (m) => {
    return 0 * m;
}



var employee = {
    id:1,
    greet: function(){
        var self = this;
       setTimeout(function() {
           console.log(self.id)
       }, 100); 
    }
}

var employees = {
    id:1,
    greet: function(){
       setTimeout(() => {
           console.log(this.id)
       }, 100); 
    }
}

employee.greet();
employees.greet();

//rest operator ... is to combine
let displayColors = function(...stringsUnlimited){
    for(let i in stringsUnlimited){
        return stringsUnlimited[i];
    }
}

displayColors('string','string2');

let colorArray = ['orange', 'yellow'];
displayColors(...colorArray);


let firstname = 'john';
let lastname = 'doe';

let person =  {
    firstname: firstname,
    lastname: lastname
}

let tao =  {
    firstname,
    lastname
}

alert(person.firstname);
alert(tao.firstname);

function createPerson(firstname, lastname, age){
    let fullname = firstname + ' ' + lastname;
    return {firstname, lastname, fullname, isSenior:function(){ return age > 60}}
}

let p = createPerson('john', 'doe', 25);

alert(p.firstname);
alert(p.lastname);
alert(p.fullname);
alert(p.isSenior());

let ln = 'lastname';
let personName = {
    'firstname': 'john',
    [ln]: 'doe'
}

console.log(personName.firstname);

//Destructing array
let EMployee = ['firstname', 'lastname', 'male'];

let [fname, lname, gender] = EMployee;
alert(fname);
let [, , sex] = EMployee;
alert(sex);
let [firstnames, ...elements] = EMployee;
alert(elements);
let [fnames, lnames, genders, test='value'] = EMployee;
alert(test);

let personss =  {
    firstname: 'firstname',
    lastname: 'lastname'
}

//Destructing obj
let { firstname:f, lastname: g } = personss;
alert(f);


//string templates
let usertt = 'stringvalue';
let greeet = `welcome  usertt`;
alert (greeet);



//For loop
let colorArrayss = ['orange', 'yellow'];

for(let index in colorArrayss){
    colorArrayss[index];
}

for(let color of colorArrayss){
    color;
}

let lettersss = 'abc';
for(let letter of lettersss){
    letter;
}


//class
class CSfasdfa {
    constructor(public name: string){}
    static staticMethod(){

    }
    somfunct(){

    }
}

let pss = new CSfasdfa('test');//constructor runs rightway
alert(typeof CSfasdfa);
CSfasdfa.staticMethod();
pss.somfunct();

//inheritance
class someclass extends CSfasdfa{

}

let e = new someclass('test'); //CSfasdfa contructor is run

class someclassA extends CSfasdfa{
    constructor(name){
        super(name);
        //your logic to override the parent name
    }
    somfunct(){
        //this func automatically overrides the parent
    }
}

//modules
export let varw = 'string';
export let vart = 'string'
// same as export {varw,vart }
import {var1, var2 } from 'folderlocation'; //in imports you can only change properties value not the object value
console.log(`$(var1) $(var2)`);
import {var1 as s, var2 as v} from 'folderlocation';
console.log(`$(s) $(v)`);

let varws = 'string';
export default varws;
import varws from 'folderlocation'; //defaults dont need the bracess
import {varws as f}from 'folderlocation'; //defaults dont need the bracess

//exporting a function
export function functionname(test){

}
import {functionname} from 'folderlocation';
functionname("string");

//exporting a class
export class customClass {
    constructor(){}
    customfunct(){}
}

import {customClass} from 'folderlocation';
let gm = new customClass();
gm.customfunct();

//sets

let setts = new Set(); //set can only add a unique value except for an object
setts.add('hello');
setts.add('2');
setts.size;

let addadefaultset = new Set([1,2,3,4,5]); 
let chainset = new Set().add('hello').add('1'); 
console.log(chainset.has(1)); //to find value in a set
console.log(chainset.delete(1)); //to delete value in a set


//weakSet

let settt = new WeakSet();
let keys = {
}
settt.add(keys);
settt.has(keys); 

//map - ordered list of key value pairs
let mappp = new Map();
mappp.set('fname', 'string1');
mappp.set('age', 30);
mappp.get('fname');

let obj11 = {}
let obj12 = {}

mappp.set(obj11, 10);
mappp.set(obj12, 15);
mappp.get(obj12);
mappp.has(obj12); //to find key
mappp.delete(obj12); //to delete key value
mappp.clear();


let mapaas = new Map([
    ['fname', 'john'],
    ['lname', 'doe'],
]);

for (let key of mapaas.keys()){
    key;
}

for (let value of mapaas.values()){
    value;
}

for (let entry of mapaas.entries()){
    `${entry[0]} - > ${entry[1]}`;
}

for (let [key,value] of mapaas.entries()){
    `${key[0]} - > ${value[0]}`;
}

//ForEach

var numm = [2,4,6.8];
numm.forEach(arrayFunction);//array
function arrayFunction(element, index, array){
    console.log("log" + index + element);
}

mapaas.forEach(mapfunction);//maps
function mapfunction(value, key, callingMap){
     console.log("log" + key + value + callingMap);
}

mappp.forEach(mapfunctions); //sets
function mapfunctions(value, key, callingSet){
     console.log("log" + key + value + callingSet);
}


//WeakMap
let weakmapss = new WeakMap();
weakmapss.set(obj1, 'test');
weakmapss.get(obj1);


//Iterables ES6 only
//Symbol ES6 only

//generator ES6 only
function *createGenerator(){
    yield 1;
    console.log("after 1st yeild");
    yield 2;
}

let Mygen = createGenerator();
Mygen.next();


//interface
interface Job{
    title: string;
    employeename: string;
    age?: number; //? makes it optional
}

let John: Job = {
    title: "string",
    employeename: "string",
    age: 30,
}

let Peter: Job = {
    title: "string",
    employeename: "string",
}


