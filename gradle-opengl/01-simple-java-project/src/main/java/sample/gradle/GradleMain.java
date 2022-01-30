package sample.gradle;

public class GradleMain {
  public static void main(String[] args) {
    System.out.println("Hello Gradle!");

    for (int i = 0; i < args.length; i++) {
      System.out.println(args[i]);
    }
  }
}