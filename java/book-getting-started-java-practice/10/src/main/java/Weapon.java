/**
 * 武器クラス
 */
public class Weapon extends Item {
    private int power;

    /**
     * 武器を使う
     */
    @Override
    public void use() {
        System.out.println(getName() + "で攻撃する");
    }
}
