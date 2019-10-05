package exception.mapper;

import javax.ws.rs.NotFoundException;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

import static utility.ExceptionMessages.RESOURCE_COULD_NOT_BE_FOUND_MESSAGE;

@Provider
public class NotFoundExceptionMapper implements ExceptionMapper<NotFoundException> {

    @Override
    public Response toResponse(NotFoundException e) {
        return Response
                .status(Response.Status.NOT_FOUND)
                .entity(RESOURCE_COULD_NOT_BE_FOUND_MESSAGE)
                .build();
    }
}
