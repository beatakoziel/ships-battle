package utility;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class ExceptionMessages {
    public static final String USERNAME_SHOULD_BE_UNIQUE_MESSAGE = "Username should be unique";
    public static final String RESOURCE_COULD_NOT_BE_FOUND_MESSAGE = "Resource could not be found";
    public static final String CONNECTION_TO_DATABASE_FAILED_MESSAGE = "Connection to database failed";
    public static final String QUERY_NOT_EXECUTED_PROPERLY_MESSAGE = "Query - %s - not executed properly";
}
