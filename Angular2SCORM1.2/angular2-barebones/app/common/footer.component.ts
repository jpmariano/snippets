import {Component, Input, SimpleChange} from 'angular2/core';
import {SlideNavigationService} from './services/slideNavigation.service';
import {SlideRequiredService} from './services/SlideRequired.service';
import {SlideCompletionService} from './services/slideCompletion.service';
import {KnowledgeCheckService} from './slides/services/knowledgeCheck.service';
import {MenuNavigationService} from './services/menuNavigation.service';

@Component({
    selector: 'footer',
    template: `
        <div class="col-xs-6">
        <button type="button" class="btn btn-default btn-md" (click)="openMenu()">
            <span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span> Menu
        </button>
        </div>
    
        <div class="col-xs-6" [ngSwitch]="currentSlideNum">
            <template [ngSwitchWhen]="0">
                <button type="button" class="btn  btn-default next-btn {{disabled}}" (click)="nextSlide()">Next Button
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                </button>
            </template>
            <template [ngSwitchWhen]="totalSlides">
                <button type="button" class="btn previous-btn btn-default" (click)="previousSlide()">Previous Button</button>
            </template>
            <template ngSwitchDefault>
                <button type="button" class="btn btn-default next-btn {{disabled}} " (click)="nextSlide()">Next Button
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                </button>
                <button type="button" class="btn btn-default previous-btn" (click)="previousSlide()">Previous Button</button>
            </template>
         </div>
       `
    })
export class Footer implements DoCheck{
    name: string;
    currentSlideNum: number;
    nextSlideNum: number;
    prevSlideNum: number;
    totalSlides: number;
    disabled: string;
 
    constructor(private slideNavigationService:SlideNavigationService, private slideRequiredService:SlideRequiredService, private knowledgeCheckService:KnowledgeCheckService, private slideCompletionService:SlideCompletionService, private menuNavigationService:MenuNavigationService  ) {
        this.nextSlideNum = slideNavigationService.getNextSlide();
        this.prevSlideNum = slideNavigationService.getPreviousSlide();
        this.currentSlideNum = slideNavigationService.getSlide();
        this.totalSlides  = slideNavigationService.getTotalSlides();
        this.name = 'Footer';
    }
    nextSlide(){
        if (this.disabled != 'disabled'){
            this.slideNavigationService.addSlideNum();
            this.nextSlideNum = this.slideNavigationService.getSlide();
            this.currentSlideNum = this.slideNavigationService.getSlide();
        
            if (this.slideRequiredService.isSlideRequired(this.nextSlideNum) === true){
                this.disabled = 'disabled';
            } else {
                this.disabled = '';
            }
            this.slideCompletionService.isSlideComplete();
        } else {
            alert(sessionStorage.warningMessage);
        }      
    }
    previousSlide(){
        this.slideNavigationService.removeSlideNum();
        this.prevSlideNum = this.slideNavigationService.getSlide();
        this.currentSlideNum = this.slideNavigationService.getSlide();
        this.disabled = '';
    }

    openMenu() {
        this.menuNavigationService.toggleOpenMenu();
    }


    ngDoCheck() {
       //alert(this.knowledgeCheckService.enableButton());
        if(( this.disabled == 'disabled') && (this.knowledgeCheckService.enableButton() != null )) {
            //alert('disabled');
            this.disabled  = '';
            this.slideRequiredService.removeFromRequiredSlide(this.currentSlideNum);
            this.knowledgeCheckService.resetEnableButton();
        }
        
        this.currentSlideNum = this.slideNavigationService.getSlide();
    }


}