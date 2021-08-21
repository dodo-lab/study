import lombok.Data;

import java.io.Serializable;

@Data
public class Hero implements Serializable {
    private static final long serialVersionUID = 8192398183821L;
    private String name;
    private int hp;
    private int mp;

    public Hero(String name, int hp, int mp) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
    }
}
