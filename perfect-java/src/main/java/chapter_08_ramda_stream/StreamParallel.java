package chapter_08_ramda_stream;

import java.time.Instant;
import java.util.List;

public class StreamParallel {
    public static void main(String[] args) {
        var list = List.of("abc", "def", "123", "456", "789");

        System.out.println("-- start parallel stream --");

        list.parallelStream().forEach(s -> {
            System.out.println(Instant.now() + " -> start : " + s);

            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            System.out.println(Instant.now() + " -> end : " + s);
        });

        System.out.println("-- end parallel stream --");
    }
}
