package com.timbuchalka;

public class Main {

    public static void main(String[] args) {

        //Primitive Types
        //1 byte –128 to 127
        byte byteValue = 10;
        //short 2 bytes –32,768 to 32,767
        short shortValue = 20;
        //4 bytes –2,147,483,648 to 2,147,483, 647 (just over 2 billion)
        int intValue = 50;
        //8 bytes –9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
        long longTotal = 50000L + 10L * (byteValue + shortValue + intValue);
        // width of float = 32 (4 bytes) approximately ±3.40282347E+38F (6–7 significant decimal digits)
        float myFloatValue = 5f / 3f;
        // width of double = 64 (8 bytes) approximately ±1.79769313486231570E+308 (15 significant decimal digits)
        double myDoubleValue = 5d / 3d;
        // width of 16 (2 bytes) \u0000 to \uFFFF https://unicode-table.com/en/#control-character
	    char myChar = '\u00A9';
        //true or false
        boolean myBoolean = false;
        boolean isMale = true;

        short shortTotal = (short) (1000 + 10 * (byteValue + shortValue + intValue));
        System.out.println("longTotal = " + longTotal);
        System.out.println("shortTotal = " + shortTotal);

        /*
        https://way2java.com/casting-operations/view-all-for-65-types-of-conversions/
        Conversion:
        byte to short to int to long
        int to double
        float to double
        char to int
        //May lose precission
        int to float
        long to float
        long to double
        */


        //if-then and if-then-else Statements https://docs.oracle.com/javase/tutorial/java/nutsandbolts/if.html
        // Example 1
        int myVariable = 50;
        if (myVariable == 50) {
            System.out.println("Printed");
        }
        myVariable++;
        myVariable--;
        System.out.println("This is a test");
        System.out.println("This is" +
                " another" +
                " still more.");
        int anotherVariable = 50;
        myVariable--;
        System.out.println("This is another one");
        
        //Example 2
        // a mile is equal to 1.609344 kilometers
        double kilometers = (100 * 1.609344);
        int highScore = 50;

        if(highScore == 50) {
            System.out.println("This is an expression");

        }

        // In the following code that I will type below, write down what parts of the code
        // are expressions.
        int score = 100;
        if (score > 99) {
            System.out.println("You got the high score");
            score = 0;
        }



    }
}