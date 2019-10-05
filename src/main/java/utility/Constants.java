package utility;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class Constants {
    public static final String INSERT_USER_QUERY = "INSERT INTO ships_battle.User(login,passwordHash,roleName) VALUES ('%s','%s','%s')";
    public static final String SELECT_USER_WITH_CONDITION_QUERY = "SELECT * FROM ships_battle.User WHERE login='%s'";
    public static final String SELECT_USER_QUERY = "SELECT * FROM ships_battle.User";

    public static final String USER_LOGIN_COLUMN_NAME = "login";
    public static final String USER_ID_COLUMN_NAME = "userId";

    public static final String PROPERTIES_FILE_PATH = "src\\main\\resources\\application.properties";
    public static final String URL_PROPERTY = "datasource.url";
    public static final String USERNAME_PROPERTY = "datasource.username";
    public static final String PASSWORD_PROPERTY = "datasource.password";

    public static final String ERROR = "-1";
    public static final String CONTROLLER_TEST_MASSAGE = "CONTROLLER TEST";
}
