import java.sql.*;

public class StudyJdbc {
    private static Connection connection = null;

    // 静的初期化ブロック（クラスがJVM内にロードされた時に一度だけ自動的に実行される）
    static {
        /*
         * 事前準備
         * JDBCドライバの配置と有効化
         */
        try {
            Class.forName("org.h2.Driver");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    public static void exec() {
        connect();
//        delete();
        select();
        disconnect();
    }

    private static void transaction() {
        try {
            connection.setAutoCommit(false);

            /* **** メインのDB処理 **** */

            connection.commit();
        } catch (SQLException e) {
            try {
                connection.rollback();
            } catch (SQLException e2) {
                e2.printStackTrace();
            }
            e.printStackTrace();
        }
    }

    private static void select() {
        try {
            PreparedStatement preparedStatement = connection.prepareStatement("SELECT * FROM MONSTERS WHERE HP >= ?");
            preparedStatement.setInt(1, 10);
            ResultSet resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                System.out.println(resultSet.getString("NAME"));
            }

            resultSet.close();
            preparedStatement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private static void delete() {
        try {
            PreparedStatement preparedStatement = connection.prepareStatement("DELETE FROM MONSTERS WHERE HP <= ? OR NAME = ?");

            // ひな形に値を設定
            preparedStatement.setInt(1, 10);
            preparedStatement.setString(2, "ゾンビ");
            // SQL文を送信
            int result = preparedStatement.executeUpdate();
            if (result != 0) {
                System.out.println(result + "件のモンスターを削除しました");
            } else {
                System.out.println("該当するモンスターはありませんでした");
            }
            // 後片付け
            preparedStatement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private static void connect() {
        try {
            connection = DriverManager.getConnection("jdbc:h2:~/example");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private static void disconnect() {
        if (connection != null) {
            try {
                connection.close();
                System.out.println("Disconnected");
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
