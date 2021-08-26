package chapter_06_collection;

import java.util.Map;
import java.util.NavigableMap;
import java.util.TreeMap;

import static util.UtilFunctions.safeApply;

public class NavigableMapTest {
    public static void main(String[] args) {
        // NavigableMapインターフェースは近いキーの検索が可能。
        // TreeMapクラスはNavigableMapインターフェースを実装している。
        var map = new TreeMap<String, String>();
        map.put("ichi", "one");
        map.put("ni", "two");
        map.put("san", "three");

        safeApply(map.ceilingEntry("ic"), v -> System.out.println("ceilingEntry -> " + v.getKey() + " : " + v.getValue()));
        safeApply(map.higherEntry("ic"), v -> System.out.println("higherEntry -> " + v.getKey() + " : " + v.getValue()));
        safeApply(map.floorEntry("sa"), v -> System.out.println("floorEntry -> " + v.getKey() + " : " + v.getValue()));
        safeApply(map.lowerEntry("sa"), v -> System.out.println("lowerEntry -> " + v.getKey() + " : " + v.getValue()));

        System.out.println("tailMap");
        map.tailMap("ic").forEach((key, value) -> System.out.println(key + " : " + value));
        System.out.println("headMap");
        map.headMap("sa").forEach((key, value) -> System.out.println(key + " : " + value));
    }
}
