<?php

namespace App\Http\Controllers;


use Illuminate\Routing\Controller as BaseController;


class AboutController extends BaseController
{
    public function showAbout(){
         return view('aboutcontroller'); 
    }
    public function showSubject($theSubject){
        return $theSubject.'ABOUT PAGE';
    }
}
