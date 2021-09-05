package util;

import java.io.IOException;

public class Try {
    private static void func1(Exception exception) {
        System.out.println("----- " + exception.toString());

        try {
            System.out.println("func1 : try start");
            func2(exception);
            System.out.println("func1 : try end");
        } catch (NullPointerException e) {
            System.out.println("func1 : catch(NullPointerException)");
            e.printStackTrace();
        } catch (Exception e) {
            System.out.println("func1 : catch(Exception)");
            e.printStackTrace();
        } finally {
            System.out.println("func1 : finally");
        }
    }

    private static void func2(Exception exception) throws Exception {
        try {
            System.out.println("func2 : try start");
            func3(exception);
            System.out.println("func2 : try end");
        } catch (IOException e) {
            System.out.println("func2 : catch(IOException)");
            e.printStackTrace();
        } finally {
            System.out.println("func2 : finally");
        }
    }

    private static void func3(Exception exception) throws Exception {
        try {
            System.out.println("func3 : try start");
            throw exception;
        } catch (UnsupportedOperationException e) {
            System.out.println("func3 : catch(UnsupportedOperationException)");
            e.printStackTrace();
        } finally {
            System.out.println("func3 : finally");
        }
    }

    // ループ処理でのcontinueやbreakでもfinallyは実行される
    private static void finallyTest() {
        for (var i = 0; i < 2; ++i) {
            try {
                continue;
            } finally {
                System.out.println("finally : continue");
            }
        }

        for (var i = 0; i < 2; ++i) {
            try {
                break;
            } finally {
                System.out.println("finally : break");
            }
        }
    }

    public static void main(String[] args) {
        func1(new UnsupportedOperationException());
        func1(new IOException());
        func1(new NullPointerException());
        func1(new IllegalArgumentException());

        finallyTest();
    }
}
