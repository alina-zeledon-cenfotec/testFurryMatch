package com.prueba01.repository;

import com.prueba01.domain.Breed;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the Breed entity.
 */
@SuppressWarnings("unused")
@Repository
public interface BreedRepository extends JpaRepository<Breed, Long> {}
