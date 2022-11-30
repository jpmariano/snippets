import { Controller, Get, Post, Body, Req, Res, HttpStatus, Param } from '@nestjs/common';
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
  postUser(@Res() res:Response, @Body() body) {
    //return `Created a new post with values of ${JSON.stringify(body)} 🚀`;
    res.status(HttpStatus.CREATED).json({
      status: 'success',
      message: `test`,
      data:{
        body
      }
  }).send();
  }

  @Get(':id')
  getUser(@Param('id') id: number): string {
    //console.log(req);
    //console.log(res);
    return `user ${id}`;
    //return this.appService.getHello();
  }

  
  
  /*

  
  
  @Put(':id')
  putUser(@Req() req, @Res() res): string {
    console.log(req);
    console.log(res);
    return `updated`;
    //return this.appService.getHello();
  }
  @Delete(':id')
  deleteUser(@Req() req, @Res() res): string {
    console.log(req);
    console.log(res);
    return `user deleted`;
    //return this.appService.getHello();
  }
  @Get('/name') ///name?name=john
  getName(@Req() req, @Res() res): string {
    console.log(req);
    console.log(res);
    const myname = req.query['name'];
    return res.send(`<h1>hello ${myname}`);
  }*/
}
