package chapter_13_enum_constant;

import java.util.Objects;

// 不変オブジェクト
public class ImmutableObject {
    // 再代入の禁止を徹底するため、フィールド変数はprivate finalとする
    // また、フィールド値の変更メソッドを提供しない
    private final StringBuilder sb;

    public ImmutableObject(StringBuilder sb) {
        // 代入だとオブジェクト参照で外部から書き換えられる可能性があるため、クローンもしくは別オブジェクトを生成する
        this.sb = new StringBuilder(sb);
    }

    // StringBuilderオブジェクトのゲッターメソッドを提供すると、オブジェクト参照で書き換えられてしまうため、
    // 不変型のStringに変換してから返す
    public String getBuffer() {
        return sb.toString();
    }

    public static void main(String[] args) {
        var sb = new StringBuilder("abc");
        ImmutableObject object = new ImmutableObject(sb);

        sb.append("efg");
        System.out.println(object.getBuffer());
        System.out.println(sb);
    }
}
