System.register(['folderlocation'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var folderlocation_1, folderlocation_2, folderlocation_3, folderlocation_4;
    var booleanVar, numberVar, stringVar, arrayVar, jsonObjs, jsonObjsVar, jsonObjsAssociate, jsonObjsAssociateVar, annyVar, arraYAnnayVar, funcName, colors, letters, num1, num2, obj1, getArrowValue, employee, employees, displayColors, colorArray, firstname, lastname, person, tao, p, ln, personName, EMployee, fname, lname, gender, sex, firstnames, elements, fnames, lnames, genders, test, personss, f, g, usertt, greeet, colorArrayss, lettersss, CSfasdfa, pss, someclass, e, someclassA, varw, vart, varws, customClass, gm, setts, addadefaultset, chainset, settt, keys, mappp, obj11, obj12, mapaas, numm, weakmapss, Mygen, John, Peter;
    function functionName() {
    }
    function functionNameTest(a, b, c) {
        if (b === void 0) { b = a + 5; }
        if (c === void 0) { c = a + b; }
        return 0;
    }
    function createPerson(firstname, lastname, age) {
        var fullname = firstname + ' ' + lastname;
        return { firstname: firstname, lastname: lastname, fullname: fullname, isSenior: function () { return age > 60; } };
    }
    //exporting a function
    function functionname(test) {
    }
    exports_1("functionname", functionname);
    function arrayFunction(element, index, array) {
        console.log("log" + index + element);
    }
    function mapfunction(value, key, callingMap) {
        console.log("log" + key + value + callingMap);
    }
    function mapfunctions(value, key, callingSet) {
        console.log("log" + key + value + callingSet);
    }
    //Iterables ES6 only
    //Symbol ES6 only
    //generator ES6 only
    function createGenerator() {
        yield 1;
        console.log("after 1st yeild");
        yield 2;
    }
    return {
        setters:[
            function (folderlocation_1_1) {
                folderlocation_1 = folderlocation_1_1;
                folderlocation_2 = folderlocation_1_1;
                folderlocation_3 = folderlocation_1_1;
                folderlocation_4 = folderlocation_1_1;
            }],
        execute: function() {
            booleanVar = false;
            numberVar = 0;
            stringVar = "";
            arrayVar = [];
            (function (jsonObjs) {
                jsonObjs[jsonObjs["red"] = 0] = "red";
                jsonObjs[jsonObjs["blue"] = 1] = "blue";
            })(jsonObjs || (jsonObjs = {}));
            ;
            jsonObjsVar = jsonObjs.red;
            alert(jsonObjsVar);
            (function (jsonObjsAssociate) {
                jsonObjsAssociate[jsonObjsAssociate["red"] = 2] = "red";
                jsonObjsAssociate[jsonObjsAssociate["blue"] = 1] = "blue";
            })(jsonObjsAssociate || (jsonObjsAssociate = {}));
            ;
            jsonObjsAssociateVar = jsonObjsAssociate.red;
            alert(jsonObjsAssociateVar);
            annyVar = 'text';
            arraYAnnayVar = [];
            funcName = function (args) {
                return args + 5;
            };
            //loops
            colors = ['red', 'orange'];
            for (var index in colors) {
                colors[index];
            }
            for (var color in colors) {
                colors[color];
            }
            letters = 'abc';
            for (var letter in letters) {
                letters[letter];
            }
            num2 = 10;
            obj1 = {
                name: 'namestr'
            };
            obj1.name = "newname";
            //const you can assign a new value to the property
            getArrowValue = function (m) {
                return 0 * m;
            };
            employee = {
                id: 1,
                greet: function () {
                    var self = this;
                    setTimeout(function () {
                        console.log(self.id);
                    }, 100);
                }
            };
            employees = {
                id: 1,
                greet: function () {
                    var _this = this;
                    setTimeout(function () {
                        console.log(_this.id);
                    }, 100);
                }
            };
            employee.greet();
            employees.greet();
            //rest operator ... is to combine
            displayColors = function () {
                var stringsUnlimited = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    stringsUnlimited[_i - 0] = arguments[_i];
                }
                for (var i in stringsUnlimited) {
                    return stringsUnlimited[i];
                }
            };
            displayColors('string', 'string2');
            colorArray = ['orange', 'yellow'];
            displayColors.apply(void 0, colorArray);
            firstname = 'john';
            lastname = 'doe';
            person = {
                firstname: firstname,
                lastname: lastname
            };
            tao = {
                firstname: firstname,
                lastname: lastname
            };
            alert(person.firstname);
            alert(tao.firstname);
            p = createPerson('john', 'doe', 25);
            alert(p.firstname);
            alert(p.lastname);
            alert(p.fullname);
            alert(p.isSenior());
            ln = 'lastname';
            personName = (_a = {
                    'firstname': 'john'
                },
                _a[ln] = 'doe',
                _a
            );
            console.log(personName.firstname);
            //Destructing array
            EMployee = ['firstname', 'lastname', 'male'];
            fname = EMployee[0], lname = EMployee[1], gender = EMployee[2];
            alert(fname);
            sex = EMployee[2];
            alert(sex);
            firstnames = EMployee[0], elements = EMployee.slice(1);
            alert(elements);
            fnames = EMployee[0], lnames = EMployee[1], genders = EMployee[2], _b = EMployee[3], test = _b === void 0 ? 'value' : _b;
            alert(test);
            personss = {
                firstname: 'firstname',
                lastname: 'lastname'
            };
            //Destructing obj
            f = personss.firstname, g = personss.lastname;
            alert(folderlocation_2.varws);
            //string templates
            usertt = 'stringvalue';
            greeet = "welcome  usertt";
            alert(greeet);
            //For loop
            colorArrayss = ['orange', 'yellow'];
            for (var index in colorArrayss) {
                colorArrayss[index];
            }
            for (var _i = 0, colorArrayss_1 = colorArrayss; _i < colorArrayss_1.length; _i++) {
                var color = colorArrayss_1[_i];
                color;
            }
            lettersss = 'abc';
            for (var _c = 0, lettersss_1 = lettersss; _c < lettersss_1.length; _c++) {
                var letter = lettersss_1[_c];
                letter;
            }
            //class
            CSfasdfa = (function () {
                function CSfasdfa(name) {
                    this.name = name;
                }
                CSfasdfa.staticMethod = function () {
                };
                CSfasdfa.prototype.somfunct = function () {
                };
                return CSfasdfa;
            }());
            pss = new CSfasdfa('test'); //constructor runs rightway
            alert(typeof CSfasdfa);
            CSfasdfa.staticMethod();
            pss.somfunct();
            //inheritance
            someclass = (function (_super) {
                __extends(someclass, _super);
                function someclass() {
                    _super.apply(this, arguments);
                }
                return someclass;
            }(CSfasdfa));
            e = new someclass('test'); //CSfasdfa contructor is run
            someclassA = (function (_super) {
                __extends(someclassA, _super);
                function someclassA(name) {
                    _super.call(this, name);
                    //your logic to override the parent name
                }
                someclassA.prototype.somfunct = function () {
                    //this func automatically overrides the parent
                };
                return someclassA;
            }(CSfasdfa));
            //modules
            exports_1("varw", varw = 'string');
            exports_1("vart", vart = 'string');
            console.log("$(var1) $(var2)");
            console.log("$(s) $(v)");
            varws = 'string';
            exports_1("default",folderlocation_1.default);
            folderlocation_3.functionname("string");
            //exporting a class
            customClass = (function () {
                function customClass() {
                }
                customClass.prototype.customfunct = function () { };
                return customClass;
            }());
            exports_1("customClass", customClass);
            gm = new folderlocation_4.customClass();
            gm.customfunct();
            //sets
            setts = new Set(); //set can only add a unique value except for an object
            setts.add('hello');
            setts.add('2');
            setts.size;
            addadefaultset = new Set([1, 2, 3, 4, 5]);
            chainset = new Set().add('hello').add('1');
            console.log(chainset.has(1)); //to find value in a set
            console.log(chainset.delete(1)); //to delete value in a set
            //weakSet
            settt = new WeakSet();
            keys = {};
            settt.add(keys);
            settt.has(keys);
            //map - ordered list of key value pairs
            mappp = new Map();
            mappp.set('fname', 'string1');
            mappp.set('age', 30);
            mappp.get('fname');
            obj11 = {};
            obj12 = {};
            mappp.set(obj11, 10);
            mappp.set(obj12, 15);
            mappp.get(obj12);
            mappp.has(obj12); //to find key
            mappp.delete(obj12); //to delete key value
            mappp.clear();
            mapaas = new Map([
                ['fname', 'john'],
                ['lname', 'doe'],
            ]);
            for (var _d = 0, _e = mapaas.keys(); _d < _e.length; _d++) {
                var key = _e[_d];
                key;
            }
            for (var _f = 0, _g = mapaas.values(); _f < _g.length; _f++) {
                var value = _g[_f];
                value;
            }
            for (var _h = 0, _j = mapaas.entries(); _h < _j.length; _h++) {
                var entry = _j[_h];
                entry[0] + " - > " + entry[1];
            }
            for (var _k = 0, _l = mapaas.entries(); _k < _l.length; _k++) {
                var _m = _l[_k], key = _m[0], value = _m[1];
                key[0] + " - > " + value[0];
            }
            //ForEach
            numm = [2, 4, 6.8];
            numm.forEach(arrayFunction); //array
            mapaas.forEach(mapfunction); //maps
            mappp.forEach(mapfunctions); //sets
            //WeakMap
            weakmapss = new WeakMap();
            weakmapss.set(obj1, 'test');
            weakmapss.get(obj1);
            Mygen = createGenerator();
            Mygen.next();
            John = {
                title: "string",
                employeename: "string",
                age: 30,
            };
            Peter = {
                title: "string",
                employeename: "string",
            };
        }
    }
    var _a, _b, _m;
});
//# sourceMappingURL=typescripts-template.js.map