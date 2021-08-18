/*
Creating Lambda Code
Step 1: Write the code below
Step 2: Paste this in aws.amazon.com AWS Lambda Code 
Step 3: Click Actions Configure Test Event and paste event.json
Step 4: Copy ARN:  - arn:aws:lambda:us-east-1:920006450451:function:GreetingSkill
Step 5: https://developer.amazon.com/ in configuration: select lambda and north america
Step 6: Paste the ARN in North america and hit save
Step 7: In Test, Service Simulator paste: say hello to John 
Step 8: Test it with your amazon Echo

Testing Event.json Locally
1) Node install procedure for macOS/linux (reference https://github.com/creationix/nvm)
  >> curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
  >> source ~/.bash_profile
  >> nvm install v4.3.2

  For windows, please download node.js from https://nodejs.org/en/download

2) Lambda local setup (https://github.com/ashiina/lambda-local)
  >> npm install -g lambda-local

3) Local testing command
   >> lambda-local -l index.js -h handler -e event.json


Uploading Code From Command Line
1) AWS CLI setup
  >> $ pip install awscli //if it doesn't work Intall python and run this: $ sudo easy_install pip
  >> Create a user and give permissions at IAM Management console
    >> add existing policy - AWSLambdaFullAcess
  >> $ aws configure //paste the Access key ID from IAM to here. if aws command not found. $ brew install awscli 


2) Create publish.sh file and paste the code below
      zip -r lambda_upload.zip index.js
      //https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions/GreetingSkill
      aws lambda update-function-code --function-name GreetingSkill --zip-file fileb://lambda_upload.zip
   $ source publish.sh
*/
'use strict';

var http = require('http');
//Accepting the Event
//Step 1. Get the Event
exports.handler = function(event,context) {

  try {

    if(process.env.NODE_DEBUG_EN) {
      console.log("Request:\n"+JSON.stringify(event,null,2));
    }



    var request = event.request;
    var session = event.session;

    if(!event.session.attributes) {
      event.session.attributes = {};
    }

    /* 
      tutorial_final/Greetings/lambdaFun/event.json "type"
      i)   LaunchRequest       Ex: "Open greeter"
      ii)  IntentRequest       Ex: "Say hello to John" or "ask greeter to say hello to John"
      iii) SessionEndedRequest Ex: "exit" or error or timeout
    */
  /*  Step 2:
    if (request.type === "LaunchRequest") {
        Step 3: Return a Response
    } else if (request.type === "IntentRequest") {
        Step 3:
    } else if (request.type === "SessionEndedRequest") {
        Step 3:
    } else {
      throw "Unknown intent type";
    }
*/
    if (request.type === "LaunchRequest") {
      handleLaunchRequest(context);

    } else if (request.type === "IntentRequest") {

      if (request.intent.name === "HelloIntent") {

        handleHelloIntent(request,context);

      } else if (request.intent.name === "QuoteIntent") {

        handleQuoteIntent(request,context,session);

      } else if (request.intent.name === "NextQuoteIntent") {

        handleNextQuoteIntent(request,context,session);

      } else if (request.intent.name === "AMAZON.StopIntent" || request.intent.name === "AMAZON.CancelIntent") {
        context.succeed(buildResponse({
          speechText: "Good bye. ",
          endSession: true
        }));

      } else {
        throw "Unknown intent";
      }

    } else if (request.type === "SessionEndedRequest") {

    } else {
      throw "Unknown intent type";
    }
  } catch(e) {
    context.fail("Exception: "+e);
  }

}

function getQuote(callback) {
  var url = "http://api.forismatic.com/api/1.0/json?method=getQuote&lang=en&format=json";
  var req = http.get(url, function(res) {
    var body = "";

    res.on('data', function(chunk) {
      body += chunk;
    });

    res.on('end', function() {
      body = body.replace(/\\/g,'');
      var quote = JSON.parse(body);
      callback(quote.quoteText);
    });

  });

  req.on('error', function(err) {
    callback('',err);
  });
  
}

function getWish() {
  var myDate = new Date();
  var hours = myDate.getUTCHours() - 8;
  if (hours < 0) {
    hours = hours + 24;
  }

  if (hours < 12) {
    return "Good Morning. ";
  } else if (hours < 18) {
    return "Good afternoon. ";
  } else {
    return "Good evening. ";
  }
  
}


function buildResponse(options) {

  if(process.env.NODE_DEBUG_EN) {
    console.log("buildResponse options:\n"+JSON.stringify(options,null,2));
  }
  //tutorial_final/Greetings/lambdaFun/response.json
  var response = {
    version: "1.0",
    response: {
      outputSpeech: {
        //https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference
        type: "SSML",
        ssml: "<speak>"+options.speechText+"</speak>"
      },
      shouldEndSession: options.endSession
    }
  };

  if(options.repromptText) {
    response.response.reprompt = {
      outputSpeech: {
        type: "SSML",
        ssml: "<speak>"+options.repromptText+"</speak>"
      }
    };
  }

  if(options.cardTitle) {
    response.response.card = {
      type: "Simple",
      title: options.cardTitle
    }

    if(options.imageUrl) {
      response.response.card.type = "Standard";
      response.response.card.text = options.cardContent;
      response.response.card.image = {
        smallImageUrl: options.imageUrl,
        largeImageUrl: options.imageUrl
      };

    } else {
      response.response.card.content = options.cardContent;
    }
  }




  if(options.session && options.session.attributes) {
    response.sessionAttributes = options.session.attributes;
  }

  if(process.env.NODE_DEBUG_EN) {
    console.log("Response:\n"+JSON.stringify(response,null,2));
  }

  return response;
}

//Step 3: A
function handleLaunchRequest(context) {
  let options = {};
  options.speechText =  "Welcome to Greetings skill. Using our skill you can greet your guests. Whom you want to greet? ";
  options.repromptText = "You can say for example, say hello to John. ";
  options.endSession = false;
  //Step 3: B
  context.succeed(buildResponse(options));
}

function handleHelloIntent(request,context) {
  let options = {};
  let name = request.intent.slots.FirstName.value;
  //https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference
  //https://developer.amazon.com/edw/home.html#/skill/amzn1.ask.skill.7d968601-863a-448d-afe1-6f041e2db679/en_US/testing
  options.speechText = `Hello <say-as interpret-as="spell-out">${name}</say-as> ${name}. `;
  options.speechText += getWish();

  options.cardTitle = `Hello ${name}!`;

  getQuote(function(quote,err) {
    if(err) {
      context.fail(err);
    } else {
      options.speechText += quote;
      options.cardContent = quote;
      options.imageUrl = "https://upload.wikimedia.org/wikipedia/commons/5/5b/Hello_smile.png";
      options.endSession = true;
      context.succeed(buildResponse(options));
    }
  });
}

function handleQuoteIntent(request,context,session) {
  let options = {};
  options.session = session;

  getQuote(function(quote,err) {
    if(err) {
      context.fail(err);
    } else {
      options.speechText = quote;
      options.speechText += " Do you want to listen to one more quote? ";
      options.repromptText = "You can say yes or one more. ";
      options.session.attributes.quoteIntent = true;
      options.endSession = false;
      context.succeed(buildResponse(options));
    }
  });

}

function handleNextQuoteIntent(request,context,session) {
  let options = {};
  options.session = session;

  if(session.attributes.quoteIntent) {
    getQuote(function(quote,err) {
      if(err) {
        context.fail(err);
      } else {
        options.speechText = quote;
        options.speechText += " Do you want to listen to one more quote? ";
        options.repromptText = "You can say yes or one more. ";
        //options.session.attributes.quoteIntent = true;
        options.endSession = false;
        context.succeed(buildResponse(options));
      }
    });
  } else {
    options.speechText = " Wrong invocation of this intent. ";
    options.endSession = true;
    context.succeed(buildResponse(options));
  }

}
