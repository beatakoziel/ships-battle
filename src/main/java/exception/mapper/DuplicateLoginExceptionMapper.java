package exception.mapper;


import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;
import java.sql.SQLIntegrityConstraintViolationException;

import static utility.ExceptionMessages.USERNAME_SHOULD_BE_UNIQUE_MESSAGE;

@Provider
public class DuplicateLoginExceptionMapper implements ExceptionMapper<SQLIntegrityConstraintViolationException> {

    @Override
    public Response toResponse(SQLIntegrityConstraintViolationException e) {
        return Response
                .status(Response.Status.BAD_REQUEST)
                .entity(USERNAME_SHOULD_BE_UNIQUE_MESSAGE)
                .build();
    }
}
