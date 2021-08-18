import {Component} from 'angular2/core';
import {Menu} from './menu.component';
import {Slide0} from './slides/slide0.component';
import {Slide1} from './slides/slide1.component';
import {Slide2} from './slides/slide2.component';
import {Slide3} from './slides/slide3.component';
import {Slide4} from './slides/slide4.component';
import {Slide5} from './slides/slide5.component';
import {SlideNavigationService} from './services/slideNavigation.service';
import {MenuNavigationService} from './services/menuNavigation.service';
import {SlideRequiredService} from './services/SlideRequired.service';

@Component({
    selector: 'container',
    template: `
    <menu id="menu" class="menu {{openMenu}}">
    </menu>
    <slide [ngSwitch]="slideNumber">
            <template [ngSwitchWhen]="0"><slide0></slide0></template>
	    	<template [ngSwitchWhen]="1"><slide1></slide1></template>
	    	<template [ngSwitchWhen]="2"><slide2></slide2></template>
	    	<template [ngSwitchWhen]="3"><slide3></slide3></template>
	    	<template [ngSwitchWhen]="4"><slide4></slide4></template>
	    	<template [ngSwitchWhen]="5"><slide5></slide5></template>
	    	<template ngSwitchDefault><slide0></slide0></template>
    </slide>
    `,
    directives: [Menu, Slide0, Slide1, Slide2, Slide3, Slide4, Slide5]
})
export class Container implements OnInit, DoCheck{
    private name: string;
    private openMenu: string;
    

    private slideNumber: number;
    constructor(private slideNavigationService:SlideNavigationService, private menuNavigationService:MenuNavigationService) {
        this.name = 'container';
    }
    ngOnInit(){
        this.slideNumber = this.slideNavigationService.getSlide();
        this.disabled = 'disabled';
    }
    ngDoCheck() {
        if(this.slideNumber != this.slideNavigationService.getSlide()) {
            this.slideNumber = this.slideNavigationService.getSlide();
        }
        if(this.openMenu != this.menuNavigationService.getOpenMenu()) {
            this.openMenu  = this.menuNavigationService.getOpenMenu();
        }
    }
     
}
