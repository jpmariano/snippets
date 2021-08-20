<?php

namespace App\Http\Controllers;


use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Input;
use Schema;
use App\MemberInfo;

class SuccessfulController extends BaseController
{
    public function saveMemberInfo(){

        $name = Input::get('name');
        $email = Input::get('email');
        $street = Input::get('street');
        $city = Input::get('city');
        $state = Input::get('state');
        $phone = Input::get('phone');
      
        /* Make sure this runs one time only
        Schema::create('memberinfo', function($table)
        {
            $table->increments('id');
            $table->char('name', 35 );
            $table->string('email', 35);
            $table->string('street', 100);
            $table->string('city', 20);
            $table->string('state', 2 );
            $table->string('phone', 10);
        }); 
        
        //adding a field
        Schema::table('memberinfo', function($field)
        {
            $field->boolean('test');
        });
        
        //deleting a field
        Schema::table('memberinfo', function($field)
        {
            $field->dropColumn('test');
        }); 

        //Drop Table
        Schema::dropifExists('memberinfo');
        */
        //Input new Data to database
        $memberInfo = new MemberInfo();
        $memberInfo->name = $name;
        $memberInfo->email = $email;
        $memberInfo->street = $street;
        $memberInfo->city = $city;
        $memberInfo->state = $state;
        $memberInfo->phone = $phone;
        $memberInfo->save();

        return view('successful')->with(['name' => $name, 'email' => $email, 'street' => $street, 'city' => $city, 'state' => $state, 'phone' => $phone]); 
     
    }
}
