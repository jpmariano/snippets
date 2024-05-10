package com.timbuchalka;

public class Main {

    public static void main(String[] args) {
	    Person porsche = new Person();
        Car holden = new Car();
        porsche.setModel("911");
        System.out.println("Model is " + porsche.getModel());
    }
}

