import java.io.Serializable;

public class Employee implements Serializable {
    private static final long serialVersionUID = 8192398183823L;
    final String name;
    final int age;

    public Employee(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
