import java.io.Serializable;

public class Department implements Serializable {
    private static final long serialVersionUID = 8192398183820L;

    final String name;
    final Employee leader;

    public Department(String name, Employee leader) {
        this.name = name;
        this.leader = leader;
    }
}
