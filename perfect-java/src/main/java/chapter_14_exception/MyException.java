package chapter_14_exception;

// 自作の例外クラス
public class MyException extends Exception {
    // 自作例外クラスの定石コンストラクタ４点
    // 引数無しコンストラクタ
    public MyException() {
        super();
    }

    // 原因文字列を受け取るコンストラクタ
    public MyException(String message) {
        super(message);
    }

    // 原因例外オブジェクトを受け取るコンストラクタ
    public MyException(Throwable cause) {
        super(cause);
    }

    // 原因文字列と原因例外を受け取るコンストラクタ
    public MyException(String message, Throwable cause) {
        super(message, cause);
    }

    // 任意のフィールドやメソッドを追加可能
    // ただし、上記コンストラクタだけで例外の役割としては十分機能する
    private int errorCode;

    public MyException(int errorCode) {
        this.errorCode = errorCode;
    }

    public void showErrorCode() {
        System.out.println(errorCode);
    }

    public static void main(String[] args) {
        try {
            throw new MyException();
        } catch (MyException e) {
            e.printStackTrace();
        }

        try {
            throw new MyException("unknown error");
        } catch (MyException e) {
            e.printStackTrace();
        }

        try {
            throw new MyException(new NullPointerException());
        } catch (MyException e) {
            e.printStackTrace();
        }

        try {
            throw new MyException("nullpo", new NullPointerException());
        } catch (MyException e) {
            e.printStackTrace();
        }

        var myException = new MyException(109);
        myException.showErrorCode();
    }
}
