package chapter_05_class;

public class FactoryPattern {
    // コンストラクタは直接コールできないようにprivateにする
    private FactoryPattern() {
    }

    // ファクトリメソッド
    static FactoryPattern getInstance() {
        return new FactoryPattern();
    }
}
