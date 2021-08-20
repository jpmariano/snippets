
// Regular Function
var lordify = function(firstname) {
    return `${firstname} of Canterbury`
}
console.log( lordify("Dale") )

//Arrow functions
//variablenane = parameter => actions/returns
var lordify = firstname => `${firstname} of Canterbury`

var lordify = function(firstName, land) {
    return `${firstName} of ${land}`
}

var lordify = (firstName, land) => `${firstName} of ${land}`

console.log( lordify("Dale", "Maryland") )

//If Arrow function
// Function

var lordify = function(firstName, land) {
    if (!firstName) {
        throw new Error('A firstName is required to lordify')
    }

    if (!land) {
        throw new Error('A lord must have a land')
    }

    return `${firstName} of ${land}`
}

console.log( lordify("Kelly", "Sonoma") )
console.log( lordify("Dave") )

var lordify = (firstName, land) => {

    if (!firstName) {
      throw new Error('A firstName is required to lordify')
    }

    if (!land) {
      throw new Error('A lord must have a land')
    }

    return `${firstName} of ${land}`
}

console.log( lordify() )

//Object literal
// Function
var tahoe = {
    resorts: ["Kirkwood","Squaw","Alpine","Heavenly","Northstar"],
    print: function(delay=1000) {
        setTimeout(function() {
        console.log(this.resorts.join(","))
        }.bind(this), delay)

    }
}

tahoe.print()

var tahoe = {
    resorts: ["Kirkwood","Squaw","Alpine","Heavenly","Northstar"],
    print: function(delay=1000) {
      setTimeout(
        () => console.log(this.resorts.join(",")),
        delay
      )

    }
  }
 
  // Arrow Functions gone too far, this means window
  var tahoe = {
    resorts: ["Kirkwood","Squaw","Alpine","Heavenly","Northstar"],
    print: (delay=1000) => {

      setTimeout(() => {
        console.log(this.resorts.join(","))
      }, delay)

    }
  }

  var tahoe = {
    resorts: ["Kirkwood","Squaw","Alpine","Heavenly","Northstar"],
    print: function(delay=1000) {

      setTimeout(() => {
        console.log(this === window)
      }, delay)

    }
  }

  tahoe.print(); // true

  export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion