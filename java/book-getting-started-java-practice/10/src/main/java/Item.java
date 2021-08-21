/**
 * アイテムクラス
 */
public class Item {
    private String name;

    /**
     * アイテムを使用する
     */
    public void use() {
        System.out.println(name + "を使用する");
    }

    /**
     * 名前取得
     *
     * @return 名前
     */
    public String getName() {
        return name;
    }
}
