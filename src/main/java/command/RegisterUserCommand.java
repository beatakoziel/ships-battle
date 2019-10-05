package command;

import lombok.Value;

import javax.json.bind.annotation.JsonbCreator;
import javax.json.bind.annotation.JsonbProperty;

@Value
public class RegisterUserCommand {
    private String login;
    private String password;

    @JsonbCreator
    public RegisterUserCommand(@JsonbProperty(value = "login") String login,
                               @JsonbProperty(value = "password") String password) {
        this.login = login;
        this.password = password;
    }
}
