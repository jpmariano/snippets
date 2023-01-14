import { Controller, Get, Res, HttpStatus, Param } from '@nestjs/common';
import express, {Request, Response} from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get() ///name?name=john
  getHome(@Res() res) : Response {
    return res.render('index', {title: "test"});
  }
  

  /*
  https://camo.githubusercontent.com/c26df6d372790e9f24d7e16d2cfa16a142985109b237bbc0f482c47a717019fe/68747470733a2f2f7261776769746875622e636f6d2f666f722d4745542f687474702d6465636973696f6e2d6469616772616d2f6d61737465722f6874747064642e66736d2e706e67
  */
}
