public class Hero implements Cloneable {
    private  String name;
    private  int hp, mp;

    public Hero(String name, int hp, int mp) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
    }

    @Override
    public String toString() {
        return "勇者（名前=" + name + "/HP=" + hp + "/MP=" + mp + "）";
    }

    @Override
    public Hero clone() {
        Hero result = new Hero(name, hp, mp);
        return result;
    }
}
