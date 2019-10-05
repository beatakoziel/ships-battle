package model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import model.enums.UserRole;

import javax.persistence.*;

@Data
@Builder
@Table(name = "user")
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;
    @Column(unique = true)
    private String login;
    private String passwordHash;
    private UserRole roleName;
}
