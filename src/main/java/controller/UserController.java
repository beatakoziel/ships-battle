package controller;

import command.RegisterUserCommand;
import service.UserService;

import javax.ejb.EJB;
import javax.mvc.Controller;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.sql.SQLException;

import static utility.Constants.CONTROLLER_TEST_MASSAGE;

@Path("user")
@Controller
public class UserController {

    @EJB
    private UserService us;

    @GET
    @Path("test")
    @Produces(MediaType.APPLICATION_JSON)
    public String getTestMessage() {
        return CONTROLLER_TEST_MASSAGE;
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllUsers() throws SQLException {
        return Response.ok(us.getUsersLoginList()).build();
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response registerUser(RegisterUserCommand user) throws SQLException {
        return Response.ok(us.registerUser(user)).build();
    }
}
