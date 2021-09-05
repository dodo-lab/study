package chapter_13_enum_constant;

import java.time.*;
import java.time.chrono.ChronoLocalDate;
import java.time.chrono.Chronology;
import java.time.chrono.JapaneseEra;
import java.time.format.TextStyle;
import java.time.temporal.ChronoField;
import java.time.temporal.TemporalAdjuster;
import java.time.temporal.TemporalAdjusters;
import java.util.Date;
import java.util.Locale;

public class DateLibrary {
    public static void main(String[] args) {
        // 共有コンテキストの準備
        ZoneId jst = ZoneId.of("JST", ZoneId.SHORT_IDS);    // 日本(JST)のタイムゾーン
        ZoneId est = ZoneId.of("EST", ZoneId.SHORT_IDS);    // 米国(EST)のタイムゾーン

        Locale jpLocale = new Locale("ja", "JP", "JP"); // 日本のロケール
        Chronology wareki = Chronology.ofLocale(jpLocale);  // 和暦
        // Chronology wareki = Chronology.of("Japanese");  // 上記2行の代替例

        // 入力数値からZonedDateTime(内部時刻)に変換
        // 想定例：利用者は日本タイムゾーンで日時を入力
        ZonedDateTime myTime = ZonedDateTime.of(2014, 1, 31, 10, 0, 0, 0, jst);

        // ZonedDateTime(内部時刻)から表示
        // 想定例：利用者は日本タイムゾーンでの日時表示を期待
        System.out.format("%d, %d, %d\n", myTime.getYear(), myTime.getMonthValue(), myTime.getDayOfMonth());
        System.out.println(myTime);

        // ZonedDateTimeを使う日付計算
        // 単純な計算はplusMonthsやminusMonthsなどのメソッドを使う
        // 少し複雑な計算はTemporalAdjustersを使う
        // 例：2014.1.31 => [1カ月後の最初の土曜日は？] => 2014.3.1
        ZonedDateTime deadline = myTime.plusMonths(1).with(TemporalAdjusters.next(DayOfWeek.SATURDAY));
        System.out.format("%d, %d, %d\n", deadline.getYear(), deadline.getMonthValue(), deadline.getDayOfMonth());

        // 時刻の比較
        if (myTime.compareTo(deadline) < 0) {
            System.out.println("before deadline");
        }

        // 日数計算
        // 例：締切りまで残り何日か？
        Duration duration = Duration.between(myTime, deadline);
        System.out.printf("%d days until deadline\n", duration.toDays());

        // JST時刻からEST時刻に変換
        ZonedDateTime ustime = myTime.withZoneSameInstant(est);
        System.out.format("%d, %d, %d\n", ustime.getYear(), ustime.getMonthValue(), ustime.getDayOfMonth());
        System.out.println(ustime);

        // ZonedDateTimeを和暦出力
        ChronoLocalDate heisei = wareki.date(myTime);
        System.out.printf("%s, %d, %d, %d\n", heisei.getEra(),
                heisei.get(ChronoField.YEAR_OF_ERA), heisei.get(ChronoField.MONTH_OF_YEAR), heisei.get(ChronoField.DAY_OF_MONTH));
        System.out.println(heisei.getEra().getDisplayName(TextStyle.FULL, jpLocale));

        // 和暦年号から西暦年号へ変換
        JapaneseEra jpEra = JapaneseEra.HEISEI;
        ChronoLocalDate heisei2 = wareki.date(jpEra, 26, 3, 15);
        System.out.println("A.D. " + heisei2.get(ChronoField.YEAR));

        // タイムゾーンに依存しない日
        LocalDate xmasDay = LocalDate.of(2014, 12, 25);

        // 旧API(java.util.Date)との変換
        // java.util.Date => Date/Time API
        Date now = new Date();
        ZonedDateTime ztime = ZonedDateTime.ofInstant(now.toInstant(), jst);
        System.out.println(ztime);
        // Date/Time API => java.util.Date
        ZonedDateTime znow = ZonedDateTime.now();
        Date dateNow = Date.from(Instant.from(znow));
        System.out.println(dateNow);
    }
}
