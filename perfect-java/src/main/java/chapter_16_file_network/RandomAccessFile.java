package chapter_16_file_network;

import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;
import java.nio.charset.StandardCharsets;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;
import java.util.EnumSet;

public class RandomAccessFile {
    static void exec(String filePath) {
        try (var file = FileChannel.open(Path.of(filePath),
                EnumSet.of(StandardOpenOption.READ, StandardOpenOption.WRITE))) {
            // ファイル末尾へ移動
            file.position(file.size());
            // ファイルの末尾へ書き込み
            file.write(ByteBuffer.wrap("zzz".getBytes()));

            // ファイルの先頭へ移動
            file.position(0);

            // ファイルの中身をすべて読み込む
            ByteBuffer buf = ByteBuffer.allocate(4096);
            while (file.read(buf) != -1) {
                // ByteBufferの有効データ領域をセット
                buf.flip();
                // ByteBufferのバイト列を文字列にして標準出力
                System.out.print(StandardCharsets.UTF_8.decode(buf));
                // ByteBufferの中身をクリア
                buf.clear();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        FileChar.write(Common.FILE_DUMMY_TEXT, "Random Access Test.");
        exec(Common.FILE_DUMMY_TEXT);
    }
}
