package exception;

import static utility.ExceptionMessages.CONNECTION_TO_DATABASE_FAILED_MESSAGE;

public class DatabaseConnectionException extends RuntimeException {
    public DatabaseConnectionException() {
        super(CONNECTION_TO_DATABASE_FAILED_MESSAGE);
    }
}
