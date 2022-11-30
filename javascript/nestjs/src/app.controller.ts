import { Controller, Get, Req, Res, Param } from '@nestjs/common';
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

  @Get(':id')
  getUser(@Param('id') id: number): string {
    //console.log(req);
    //console.log(res);
    return `user ${id}`;
    //return this.appService.getHello();
  }

  
  /*

  
  @Post()
  postUser(@Req() req, @Res() res): string {
    console.log(req);
    console.log(res);
    return `created`;
    //return this.appService.getHello();
  }
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
