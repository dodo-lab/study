package chapter_13_enum_constant;

import java.time.DayOfWeek;
import java.util.EnumMap;
import java.util.EnumSet;
import java.util.Map;

public class EnumSetMap {
    private static void enumSet(DayOfWeek week) {
        var holidays = EnumSet.of(DayOfWeek.SUNDAY, DayOfWeek.SATURDAY);

        // EnumSetを使うことで条件式が簡略化できる
        if (holidays.contains(week)) {
            System.out.println(week + " is day off");
        } else {
            System.out.println(week + " is workday");
        }
    }

    private static void enumMap(DayOfWeek week) {
        var weeks = new EnumMap<DayOfWeek, String>(DayOfWeek.class);
        weeks.put(DayOfWeek.SUNDAY, "日曜");
        weeks.put(DayOfWeek.MONDAY, "月曜");
        weeks.put(DayOfWeek.TUESDAY, "火曜");
        weeks.put(DayOfWeek.WEDNESDAY, "水曜");
        weeks.put(DayOfWeek.THURSDAY, "木曜");
        weeks.put(DayOfWeek.FRIDAY, "金曜");
        weeks.put(DayOfWeek.SATURDAY, "土曜");

        var japaneseWeek = weeks.get(week);
        System.out.println(week + " is " + japaneseWeek);
    }

    public static void main(String[] args) {
        enumSet(DayOfWeek.MONDAY);
        enumSet(DayOfWeek.SUNDAY);

        enumMap(DayOfWeek.TUESDAY);
        enumMap(DayOfWeek.WEDNESDAY);
    }
}
