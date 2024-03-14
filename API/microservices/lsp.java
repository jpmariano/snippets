public interface Bird{
    public void walk();
    public void fly();
}

public class Parrot implements Bird{
    public void walk(){ // to do }
    public void fly(){ // to do}
}// ok 

public class FlyingFish implements Bird{
    public void fly(){ // to do }
    public void walk(){ // to do }
}

public interface Animal{
    // to do;
}
public interface FlyingAnimal extends Animal{
    public void fly(){}
}
public interface WalkingAnimal extends Animal{
    public void walk(){}
}
public interface SwimmingAnimal extends Animal{
    public void swim(){}
}
public class Parrot  implements FlyingAnimal, WalkingAnimal {
    public void fly(){ // to do}
    public void walk(){ // to do }
}
public class FlyingFish implements FlyingAnimal, SwimmingAnimal {
    public void walk(){ // to do }
}