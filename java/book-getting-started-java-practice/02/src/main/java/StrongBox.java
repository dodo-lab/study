public class StrongBox<T> {
    private  T item;
    private KeyType keyType;
    private int counter;

    public StrongBox(KeyType keyType) {
        this.keyType = keyType;
    }

    public void put(T item) {
        this.item = item;
    }

    public T get() {
        ++counter;
        int[] max = {1024, 10000, 30000, 1000000};
        if( max[keyType.ordinal()] > counter ) {
            return null;
        }
        counter = 0;

        return item;
    }

    public enum KeyType {
        PADLOK,
        BUTTON,
        DIAL,
        FINGER
    }
}
