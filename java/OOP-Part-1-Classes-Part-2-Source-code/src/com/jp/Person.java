package com.timbuchalka;

//Person.java
public class Person {

    private String name;
    private int age;
    private float height;

    public Person(String name, int age, float height) {
        this.name = name.toLowerCase();
        this.age = age;
        this.height = height;
    }

    public void setName(String name) {
        String validModel = name.toLowerCase();
        this.model = validModel;
    }

    public String getName() {
        return this.name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getAge() {
        return this.age;
    }

    public void setHeight(float height) {
        this.height = height;
    }

    public String getHeight() {
        return this.height;
    }
}
