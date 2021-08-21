import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class ItemsDAO {
    public static List<Item> findByMinimumPrice(int price) {
        List<Item> items = new ArrayList<>();

        try (Connection connection = DriverManager.getConnection("jdbc:h2:~/example")) {
            PreparedStatement preparedStatement = connection.prepareStatement("SELECT NAME PRICE WEIGHT FROM ITEMS WHERE PRICE >= ?");
            preparedStatement.setInt(1, price);

            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                Item item = new Item();
                item.setName(resultSet.getString("NAME"));
                item.setPrice(resultSet.getInt("PRICE"));
                item.setWeight(resultSet.getInt("WEIGHT"));

                items.add(item);
            }

            resultSet.close();
            preparedStatement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return items;
    }
}
