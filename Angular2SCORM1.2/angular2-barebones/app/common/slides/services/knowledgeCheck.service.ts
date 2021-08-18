import {Component, Inject} from 'angular2/core';
import { DOCUMENT } from 'angular2/platform/browser';
declare var $ any;

export class KnowledgeCheckService implements OnInit { 
    private sessionKey: string;
    private isCompleted = sessionStorage.getItem(this.sessionKey);
    private attempts: number;
    private maxAttempts: number;
    private attemptCompleted: boolean; 
    private rightAnswer: string;
    private correct: boolean;
    private disable: string;



    private ttlQuestions: number  = 0;
    private feedback1: string = "<p>You are correct. Please select the X or anywhere outside the box, then click the Next button to continue.</p>";
    private feedback2: string = "<p>That is incorrect. Please select the X or anywhere outside the box to try again.</p>";
    private feedback3: string = "<p>Feedback 3</p>";
    

    constructor(@Inject(DOCUMENT) private document) {
        this.attempts = 0;
        
    }

    // implement OnInit's `ngOnInit` method
    ngOnInit(strSessionKey, intMaxAttempts) {  
        this.sessionKey = strSessionKey;
        if(!this.isCompleted){
                this.isCompleted = 0;
        }
        this.maxAttempts = intMaxAttempts;
        this.correct = false;
        this.attemptCompleted = false;
    }

  
    submit(strRightAnswer, strRadioButtonModel) {
            /* This works
            $(this.document).find('.kc-quiz-button').on('click', function() { 
                console.log(this); 
            });
            */

            this.attempts++;
            this.correct = this.evaluateAnswers(strRightAnswer, strRadioButtonModel);
            this.attemptCompleted = this.checkMaxAttempts();
            
            if (this.correct === true){
                this.disable = '';  
            }
             
       }

       evaluateAnswers(strRightAnswer, strRadioButtonModel){
         if (strRightAnswer === strRadioButtonModel){
             return true;
         } else {
             return false;
         }
       }

       checkMaxAttempts(){
           if (this.attempts >= this.maxAttempts){
                return true;
           } else {
                return false;
           }
       }

       enableButton(){
           return this.disable;
       }

       resetEnableButton(){
           this.disable = null;
       }
   
    
}

