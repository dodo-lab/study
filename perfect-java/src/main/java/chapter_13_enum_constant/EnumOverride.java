package chapter_13_enum_constant;

public enum EnumOverride {
    MAN("Man") {
        @Override
        void exec() {
            System.out.println("man");
        }
    },
    WOMAN("Woman") {
        @Override
        void exec() {
            System.out.println("woman");
        }
    },
    OTHER("Other") {
        @Override
        void exec() {
            System.out.println("unknown");
        }
    };

    // 個別実装させたいメソッドを抽象メソッドで用意する
    abstract void exec();

    private final String displayName;

    EnumOverride(String displayName) {
        this.displayName = displayName;
    }

    @Override
    public String toString() {
        return displayName;
    }

    public static void main(String[] args) {
        // valuesメソッドはenum値の記述順序を保証する
        for (var gender : EnumOverride.values()) {
            System.out.println(gender);
            gender.exec();
        }
    }
}
