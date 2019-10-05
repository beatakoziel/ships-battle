package exception;

import static utility.ExceptionMessages.QUERY_NOT_EXECUTED_PROPERLY_MESSAGE;

public class SqlQueryNotExecutedProperlyException extends RuntimeException {
    public SqlQueryNotExecutedProperlyException(String sqlQuery) {
        super(String.format(QUERY_NOT_EXECUTED_PROPERLY_MESSAGE, sqlQuery));
    }
}
