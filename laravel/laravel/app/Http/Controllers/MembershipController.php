<?php

namespace App\Http\Controllers;


use Illuminate\Routing\Controller as BaseController;


class MembershipController extends BaseController
{
    public function enterMember(){
         return view('membership'); 
    }
}
