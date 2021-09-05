package chapter_13_enum_constant;

enum EnumClass {
    MAN("Man", 0),
    WIMAN("Woman", 1),
    OTHER("Other", 2);

    // 任意のフィールド変数を追加可能
    private final String nameForDisplay;
    private int valueForDb;

    EnumClass(String nameForDisplay, int valueForDb) {
        this.nameForDisplay = nameForDisplay;
        this.valueForDb = valueForDb;
    }

    // 必要に応じてtoStringメソッドをオーバーライドするのがenum型の定石
    @Override
    public String toString() {
        return nameForDisplay;
    }

    // 任意のメソッドを追加可能
    public int toDatabaseValue() {
        return valueForDb;
    }

    // サンプルコード以外ではほぼしないが、mainメソッドも持てる
    public static void main(String[] args) {
        System.out.println(MAN);
        System.out.println(MAN.toDatabaseValue());
    }
}
