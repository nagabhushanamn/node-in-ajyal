
import java.util.Scanner;

public class NewApp{
    public static void computation(){
        System.out.println(Thread.currentThread().getName() +" :  started computation");
        boolean b=true;
        while(b){}
        System.out.println(Thread.currentThread().getName() +" :  finished computation");
    }
     public static void io(){
         System.out.println(Thread.currentThread().getName() +" :  started IO");
         Scanner sc=new Scanner(System.in);
         System.out.println("Enter ur name ?");
         String name=sc.nextLine();
         System.out.println("hello "+name);
         System.out.println(Thread.currentThread().getName() +" :  finished IO");
     }
    public static void main(String[] args){
      
       Thread thread1=new Thread(()->{
            // task1: io
            io();
        },"ASMA");

        Thread thread2=new Thread(()->{
            // task2: computation
            computation();
        },"MARIAM");
       

        thread1.start();
        thread2.start();
        //...

    }
}