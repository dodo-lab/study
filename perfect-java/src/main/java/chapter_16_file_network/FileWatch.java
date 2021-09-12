package chapter_16_file_network;

import java.io.IOException;
import java.nio.file.FileSystems;
import java.nio.file.Path;
import java.nio.file.Paths;

import static java.nio.file.StandardWatchEventKinds.*;

public class FileWatch {
    // 指定ディレクトリ内のファイルの変更監視
    static void watch(String directory) {
        var path = Paths.get(directory);

        try (var watchService = FileSystems.getDefault().newWatchService()) {
            // 監視サービスに登録
            path.register(watchService, ENTRY_CREATE, ENTRY_DELETE, ENTRY_MODIFY);

            // 変化があるまで停止する (pollメソッドだと停止しない)
            System.out.println(directory + "を監視");
            var key = watchService.take();
            // 変更検知した情報を出力
            for (var event : key.pollEvents()) {
                System.out.println(event.kind());
                System.out.println(event.context());
            }
            // 監視鍵をリセット
            key.reset();
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        FileChar.write(Common.FILE_DUMMY_TEXT, "File Watch Test.");
        watch("./tmp/");
    }
}
