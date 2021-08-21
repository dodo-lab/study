public class Pocket<E> {
    private E data;
    public void put(E data) {
        this.data = data;
    }
    public E get() {
        return data;
    }

    public static <T> Pocket<T> createPocket(T data) {
        Pocket<T> p = new Pocket<>();
        p.put(data);
        return p;
    }
}
