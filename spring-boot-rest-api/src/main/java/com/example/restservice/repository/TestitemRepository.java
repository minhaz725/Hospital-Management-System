package com.example.restservice.repository;

import com.example.restservice.models.invoice.Testitem;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TestitemRepository extends MongoRepository<Testitem, String> {
}
