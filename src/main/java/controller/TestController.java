package controller;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

import static utility.Constants.CONTROLLER_TEST_MASSAGE;

@Path("test")
public class TestController {
    @GET
    public String getTestMessage() {
        return CONTROLLER_TEST_MASSAGE;
    }
}
