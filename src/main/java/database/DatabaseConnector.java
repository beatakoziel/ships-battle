package database;

import exception.DatabaseConnectionException;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

@Slf4j
@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class DatabaseConnector {
    private static Connection connection;
    private static String url;
    private static String username;
    private static String password;

    public static Connection getDbConnection() {
        loadConnectionProperties();
        try {
            if (connection == null)
                connection = DriverManager.getConnection(url, username, password);
            return connection;
        } catch (SQLException e) {
            throw new DatabaseConnectionException();
        }
    }

    private static void loadConnectionProperties() {
        url = "jdbc:mysql://localhost:3306/ships_battle?&serverTimezone=UTC&useSSL=false";
        username = "change me";
        password = "change me";
    }
}
