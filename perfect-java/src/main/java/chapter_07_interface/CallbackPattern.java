package chapter_07_interface;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.List;

public class CallbackPattern {
    interface MyFilter {
        String doJob(String input);
    }

    static class ReplaceFilter implements MyFilter {
        private final String oldStr;
        private final String newStr;

        ReplaceFilter(String oldStr, String newStr) {
            this.oldStr = oldStr;
            this.newStr = newStr;
        }

        @Override
        public String doJob(String input) {
            return input.replaceAll(oldStr, newStr);
        }
    }

    static class CapitalizeFilter implements MyFilter {
        @Override
        public String doJob(String input) {
            return input.toUpperCase();
        }
    }

    static class MyEcho {
        private final List<MyFilter> myFilters;

        MyEcho(List<MyFilter> myFilters) {
            this.myFilters = myFilters;
        }

        void exec() {
            try (var stdin = new BufferedReader(new InputStreamReader(System.in))) {
                System.out.println("Input any text");
                String output = stdin.readLine();
                for (var filter : myFilters) {
                    output = filter.doJob(output);
                }

                System.out.println("You said, " + output);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public static void main(String[] args) {
        MyEcho echo = new MyEcho(List.of(
                new ReplaceFilter("he", "she"),
                new CapitalizeFilter()
        ));
        echo.exec();
    }
}
