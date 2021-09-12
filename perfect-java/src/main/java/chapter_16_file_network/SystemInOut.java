package chapter_16_file_network;

import java.io.IOException;

public class SystemInOut {
    public static void main(String[] args) {
        // Systemクラスを使った標準入出力
        try {
            var buf = new byte[4096];

            System.out.print("入力受付：");
            if (System.in.read(buf) != -1) {
                System.out.write(buf);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        // Consoleクラスを使った標準入出力
        // Consoleが存在するか否かはプラットフォーム依存のため、consoleメソッドがnullを返す可能性あり
        var console = System.console();
        if (console != null) {
            String line = console.readLine();
            console.printf(line);
        }
    }
}
