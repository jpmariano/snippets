import { Controller, Get, Post, Put, Delete, Body, Req, Res, HttpStatus, Param } from '@nestjs/common';
import express, {Request, Response} from 'express';
import { AppService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get('name') ///name?name=john
  getName(@Req() req, @Res() res): string {
    console.log(req);
    console.log(res);
    const myname = req.query['name'];
    return res.send(`<h1>hello ${myname}</h1>`);
  }
  

  @Get()
  getAllUser() {
    return [];
    //return this.appService.getHello();
  }

  @Post()
  postUser(@Res() res: Response, @Body() body) {
    //return `Created a new post with values of ${JSON.stringify(body)} 🚀`;
    res.status(HttpStatus.CREATED).json({
      status: 'success',
      message: `user created`,
      data: {
        body
      }
    }).send();
  }

  @Put(':id')
  putUser(@Res() res: Response, @Param('id') id: number, @Body() body) {
    res.status(HttpStatus.OK).json({
      status: 'success',
      message: `user updated`,
      data: {
        id,
        body
      }
    }).send();
    //return this.appService.getHello();
  }

  @Delete(':id')
  deleteUser(@Res() res: Response, @Param('id') id: number) {
    res.status(HttpStatus.OK).json({
      status: 'success',
      message: `user deleted`,
      data: {
        id
      }
    }).send();
    //return this.appService.getHello();
  }

  @Get(':id')
  getUser(@Param('id') id: number): string {
    return `user ${id}`;
    //return this.appService.getHello();
  }

  
  
  /*
  https://camo.githubusercontent.com/c26df6d372790e9f24d7e16d2cfa16a142985109b237bbc0f482c47a717019fe/68747470733a2f2f7261776769746875622e636f6d2f666f722d4745542f687474702d6465636973696f6e2d6469616772616d2f6d61737465722f6874747064642e66736d2e706e67
  */
}
