package com.example.appengine;

import com.example.appengine.datastore.DatastoreAdapter;
import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.cloud.datastore.Datastore;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public DatastoreService datastoreService() {
        return DatastoreServiceFactory.getDatastoreService();
    }

    @Value("${spring.cloud.gcp.datastore.project-id}")
    public String projectId;

    @Bean
    public Datastore datastore(DatastoreService datastoreService) {
        return new DatastoreAdapter(datastoreService, projectId);
    }
}
