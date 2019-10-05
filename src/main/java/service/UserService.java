package service;

import command.RegisterUserCommand;
import database.DatabaseConnector;
import exception.SqlQueryNotExecutedProperlyException;
import model.User;
import model.enums.UserRole;
import org.apache.commons.codec.digest.DigestUtils;

import javax.ejb.LocalBean;
import javax.ejb.Stateless;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import static utility.Constants.*;

@LocalBean
@Stateless
public class UserService {

    private static Connection conn = DatabaseConnector.getDbConnection();

    public Integer registerUser(RegisterUserCommand userCommand) throws SQLException {
        User user = buildUserModelFromCommand(userCommand);
        String sqlQuery = buildInsertQuery(user);
        int result = conn.createStatement().executeUpdate(sqlQuery);
        checkIfInsertQueryExecutedProperly(sqlQuery, result);
        return getRegisteredUserId(user);
    }

    public List<String> getUsersLoginList() throws SQLException {
        List<String> usersLogin = new ArrayList<>();
        try (ResultSet resultSet = conn.createStatement().executeQuery(SELECT_USER_QUERY)) {
            while (resultSet.next()) {
                usersLogin.add(resultSet.getString(USER_LOGIN_COLUMN_NAME));
            }
        }
        return usersLogin;
    }

    private Integer getRegisteredUserId(User user) throws SQLException {
        String selectQuery = String.format(SELECT_USER_WITH_CONDITION_QUERY, user.getLogin());
        String userId = ERROR;
        try (ResultSet resultSet = conn.createStatement().executeQuery(selectQuery)) {
            while (resultSet.next())
                userId = resultSet.getString(USER_ID_COLUMN_NAME);
        }
        return Integer.parseInt(userId);
    }

    private void checkIfInsertQueryExecutedProperly(String sqlQuery, int result) {
        if (result != 1)
            throw new SqlQueryNotExecutedProperlyException(sqlQuery);
    }

    private String buildInsertQuery(User user) {
        return String.format(
                INSERT_USER_QUERY,
                user.getLogin(),
                user.getPasswordHash(),
                user.getRoleName().toString()
        );
    }

    private User buildUserModelFromCommand(RegisterUserCommand userCommand) {

        return User.builder()
                .login(userCommand.getLogin())
                .passwordHash(userCommand.getPassword())
                .passwordHash(DigestUtils.md5Hex(userCommand.getPassword()))
                .roleName(UserRole.PLAYER)
                .build();
    }
}
