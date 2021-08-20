/* Example 1*/

// A car 'class'
function Car(model) {
		this.model = model;
		this.color = 'silver';
		this.year = '2012';
		this.getInfo = function () {
		return this.model + ' ' + this.year;
	}
}

var myCar = new Car('ford');
myCar.year = '2010';
console.log(myCar.getInfo());

/* End Example 1 */

/* Example 2*/

function Apple (type) {
    this.type = type;
    this.color = "red";
    this.getInfo = getAppleInfo;
}
 
// anti-pattern! keep reading...
function getAppleInfo() {
    return this.color + ' ' + this.type + ' apple';
}

var apple = new Apple('macintosh');
apple.color = "reddish";
alert(apple.getInfo());

/* End Example 2 */

/* Example 3 Methods defined internally*/
function Apple (type) {
    this.type = type;
    this.color = "red";
    this.getInfo = function() {
        return this.color + ' ' + this.type + ' apple';
    };
}
/* End Example 3 */

/* Example 4 Methods added to the prototype*/
function Apple (type) {
    this.type = type;
    this.color = "red";
}
 
Apple.prototype.getInfo = function() {
    return this.color + ' ' + this.type + ' apple';
};
/* End Example 4 */

/* Example 5 Using object literals*/
var apple = {
    type: "macintosh",
    color: "red",
    getInfo: function () {
        return this.color + ' ' + this.type + ' apple';
    }
}

apple.color = "reddish";
alert(apple.getInfo());
/* End Example 5 */



/* Example 6 Using object literals*/
var apple = new function() {
    this.type = "macintosh";
    this.color = "red";
    this.getInfo = function () {
        return this.color + ' ' + this.type + ' apple';
    };
}

apple.color = "reddish";
alert(apple.getInfo());
/* End Example 6 */
