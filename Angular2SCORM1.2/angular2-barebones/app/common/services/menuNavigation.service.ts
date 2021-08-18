import {Component} from 'angular2/core';

export class MenuNavigationService{ 
   private openMenu: string;
   
   constructor(){
       this.openMenu = '';
   }

   toggleOpenMenu(){
       if (this.openMenu == ''){
           this.openMenu = 'open';
       } else {
           this.openMenu = '';
       }
   }

   getOpenMenu(){
       return this.openMenu;
   }
}