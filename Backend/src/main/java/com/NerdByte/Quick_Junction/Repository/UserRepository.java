package com.NerdByte.Quick_Junction.Repository;

import com.NerdByte.Quick_Junction.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
