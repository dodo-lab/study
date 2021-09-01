package chapter_10_control_structure;

public class LabelJump {
    public static void main(String[] args) {
        System.out.println("main");

        outer_loop:
        while (true) {
            System.out.println("loop1");
            while (true) {
                System.out.println("loop2");
                break outer_loop;
            }
        }

        System.out.println("loop end");
    }
}
