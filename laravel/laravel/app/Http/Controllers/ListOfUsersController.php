<?php

namespace App\Http\Controllers;


use Illuminate\Routing\Controller as BaseController;
use App\MemberInfo;
use DB;

class ListOfUsersController extends BaseController
{
    public function getListofUsers(){
        //$memberInfo =  MemberInfo::find(1);
        //return view('listofusers')->with( ['memberInfo' => $memberInfo ]); 
        
        //$memberInfo =  MemberInfo::all();
        //return view('listofusers')->with( ['memberInfo' => $memberInfo ]); 

        //$memberInfo =  MemberInfo::find(1);
        //$memberInfo->name = 'John Paul Mariano'; 
        //$memberInfo->save();
        //return view('listofusers')->with( ['name' => $memberInfo->name ]); 

        //$memberInfo =  MemberInfo::where('state', '=', 'AL')->get();
        //return view('listofusers')->with( ['memberInfo' => $memberInfo ]); 

        $memberInfo =  DB::table('memberinfo')->select()->get();
        return view('listofusers')->with( ['names' => $memberInfo ]); 

         
    }

    public function deleteUser($id){
        $user = User::find($id);    
        $user->delete();
        //Session::flash('flash_message_delete','Office successfully deleted.');
        $memberInfo =  DB::table('memberinfo')->select()->get();
        return view('listofusers')->with( ['names' => $memberInfo ]); 
    }
}
