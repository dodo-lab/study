package chapter_14_exception;

// エラーハンドラを組み込んだクラス
public class ErrorHandlerTest {
    // エラーハンドラ用のインターフェース
    interface ErrorHandler {
        void onError(String error);
    }

    // エラーハンドラの実装クラス
    static class ErrorHandlerImpl implements ErrorHandler {
        @Override
        public void onError(String error) {
            System.out.println("error:" + error);
        }
    }

    private final ErrorHandler errorHandler;

    public ErrorHandlerTest(ErrorHandler errorHandler) {
        this.errorHandler = errorHandler;
    }

    public void exec() {
        final boolean error = true;
        if (error) {
            if (errorHandler != null) {
                errorHandler.onError("something wrong happened");
            }
        }
    }

    public static void main(String[] args) {
        var errorHandlerTest = new ErrorHandlerTest(new ErrorHandlerImpl());
        errorHandlerTest.exec();
    }
}
