CREATE TABLE IF NOT EXISTS userRole (
   userRoleId INT AUTO_INCREMENT PRIMARY KEY,
   userRoleName VARCHAR(255) NOT NULL 
);

CREATE TABLE IF NOT EXISTS user (
	userId INT AUTO_INCREMENT PRIMARY KEY,
	login VARCHAR(255) NOT NULL,
	passwordHash VARCHAR(255) NOT NULL,
    userRoleId INT NOT NULL,
    FOREIGN KEY(userRoleId) REFERENCES userRole(userRoleId) ON UPDATE RESTRICT ON DELETE RESTRICT
);

-- To delete tables.
DROP TABLE user;
DROP TABLE userRole;

-- To retrieve rows selected from tables.
SELECT * FROM user;
SELECT * FROM userRole;

-- Example values to insert to tables.
INSERT INTO userRole(userRoleName) VALUES('admin');
INSERT INTO userRole(userRoleName) VALUES('moderator');
INSERT INTO user(login, passwordHash, userRoleId) VALUES('admin', 'h3xASgf3Hvcpa8Y',1);

-- To disable safe mode - if you would like to update or delete rows. 
SET SQL_SAFE_UPDATES = 0;
