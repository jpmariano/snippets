import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import {KnowledgeCheckService}  from './services/knowledgeCheck.service';
import {ButtonRadio}  from './directives/buttonRadio.directive';




@Component({
    selector: 'slide1',
    templateUrl: "./app/common/slides/slide1.component.html",
    directives: [ButtonRadio, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class Slide1 implements OnInit, DoCheck { 
    name: string;
    form;
    radioButtonModel: string;
    rightAnswer: string = "Porsche";
    sessionKey: string = "kc1";
    maxAttempts: number = 3;

     //Switch button or toggle button contains 1 or 0
    //private switchButtonModel:string = '1';
    //Radio button contains one value from a set of pre defined values
    //private radioButtonModel:string = 'Maserati';
    //Set multiple values
    //public checkButtonModel:any = {bmw: false, audi: true, volkswagen: false};
    constructor(private knowledgeCheckService:KnowledgeCheckService) {
       this.name = 'Slide1';
       
    }
    //private this.knowledgeCheck.run();
    ngDoCheck(){
        this.knowledgeCheckService.ngOnInit(this.sessionKey, this.maxAttempts);  
    }

     ngOnInit(){
       this.radioButtonModel = 'nullls';
       sessionStorage.warningMessage = 'this warning for slide 2';
    }

    submit(strRadioButtonModel) {
       // this.knowledgeCheck.run();
        //this.knowledgeCheck.submit();
        /*
        if (this.rightAnswer = strRadioButtonModel){
            alert('true');
        }
        this.rightAnswer;*/
        //console.log(strRadioButtonModel);
        this.knowledgeCheckService.submit(this.rightAnswer, strRadioButtonModel );
    }
   
}
