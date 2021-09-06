package chapter_14_exception;

import java.io.IOException;

public class ExceptionTranslate {
    // アプリケーション独自の例外を定義
    static class AppException extends Exception {
        public AppException(Throwable cause) {
            super(cause);
        }
    }

    // AppException例外に例外翻訳するコード
    private void exec() throws AppException {
        try {
            System.out.println("IO処理");
            throw new IOException();
        } catch (IOException e) {
            throw new AppException(e);
        }
    }

    public static void main(String[] args) {
        var exceptionTranslate = new ExceptionTranslate();
        try {
            exceptionTranslate.exec();
        } catch (AppException e) {
            e.printStackTrace();
        }
    }
}
