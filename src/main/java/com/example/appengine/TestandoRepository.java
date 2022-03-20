package com.example.appengine;

import org.springframework.cloud.gcp.data.datastore.repository.DatastoreRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TestandoRepository extends DatastoreRepository<Testando, String> {
    List<Testando> findByName(String name);
}
