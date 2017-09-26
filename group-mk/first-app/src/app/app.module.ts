import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainComponent, COMPONENTS } from "./";
import {AccordionModule} from "ngx-bootstrap";
let moduleInfo = {
  declarations: [
    MainComponent,
    ...COMPONENTS
  ],
  imports: [
    BrowserModule,
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [ MainComponent ]
};

@NgModule(moduleInfo)
export class AppModule { }


var a ={};
var b = {...a};
b= {};

let arr1=[a,b];
let arrCopy = [...arr1];