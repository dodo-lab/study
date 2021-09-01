package chapter_09_operation;

public class OperationTest {
    private static void stringConvert() {
        // 片方のオペランドが文字列であれば、文字列結合になる
        System.out.println(1 + "2");    // 文字列"12"
        System.out.println(1.1 + "2");  // 文字列"1.12"
        System.out.println(true + "2"); // 文字列"true2"
        System.out.println(null + "-foo");  // 文字列"null-foo"

        // 文字リテラルは数値型のcharなので、片方のオペランドが数値型なら数値の加算演算になる
        System.out.println('a' + 1);    // 数値 98
        System.out.println('a' + 'b');  // 数値 195
    }

    private static void instanceOf(Object obj) {
        if (obj instanceof String) {
            System.out.println("String型：" + obj);
        } else if (obj instanceof StringBuilder) {
            System.out.println("StringBuilder型：" + obj);
        }
    }

    public static void main(String[] args) {
        stringConvert();
        instanceOf("string");
        instanceOf(new StringBuilder("string-builder"));
    }
}
