package com.example.appengine;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.PrintWriter;
import java.io.StringWriter;

@RestController
@RequestMapping("/")
public class HelloController {
    private final DatastoreService datastoreService;

    public HelloController(DatastoreService datastoreService) {
        this.datastoreService = datastoreService;
    }

    @GetMapping(value = "/{id}", produces = "text/plain")
    @ResponseBody
    public String index(@PathVariable String id) {
        try {
            Entity gaeando = datastoreService.get(KeyFactory.createKey("gaeando", id));

            if (gaeando == null) {
                return "ERROR";
            }

            return (String) gaeando.getProperty("message");
        } catch (Throwable e) {
            StringWriter stringWriter = new StringWriter();
            PrintWriter printWriter = new PrintWriter(stringWriter);
            e.printStackTrace(printWriter);

            return "BLA: " + stringWriter;
        }
    }

    @GetMapping(value = "/pqp123/{id}", produces = "text/plain")
    public String save(@PathVariable String id) {
        try {
            Entity gaeando = new Entity("gaeando", id);
            gaeando.setProperty("message", id);
            Key gaeandoKey = datastoreService.put(gaeando);

            if (gaeandoKey == null) {
                return "ERROR";
            }

            return String.format("Saved: [ " +
                            "Namespace: %s" +
                            "Kind: %s,  " +
                            "Name: %s" +
                            " ]",
                    gaeandoKey.getNamespace(),
                    gaeandoKey.getKind(),
                    gaeandoKey.getName());
        } catch (Throwable e) {
            StringWriter stringWriter = new StringWriter();
            PrintWriter printWriter = new PrintWriter(stringWriter);
            e.printStackTrace(printWriter);

            return "BLA: " + stringWriter;
        }
    }

    @GetMapping(value = "/test", produces = "application/json")
    public String test() {
        return "{\"message\": \"Hello, World!\"}";
    }
}
