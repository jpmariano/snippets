import {Component} from 'angular2/core';
import {SlideNavigationService} from './services/slideNavigation.service';

@Component({
    selector: 'menu',
    templateUrl: "./app/common/menu.component.html",
})

export class Menu {
    name: string;

    constructor(private slideNavigationService:SlideNavigationService) {
        this.name = 'Menu';
    }
    
    goToSlide(intSlideNumber){
        this.slideNavigationService.goToSlide(intSlideNumber);
    }
    
}
