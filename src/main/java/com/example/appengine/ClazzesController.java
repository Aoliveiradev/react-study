package com.example.appengine;

import com.example.appengine.contracts.Clazz;
import com.example.appengine.contracts.ListClazzesResponse;
import com.example.appengine.contracts.ListStudentsResponse;
import com.example.appengine.contracts.Student;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController  // Faz com que o controle se comporte como rest
@RequestMapping("/api/clazzes") // Mapear o URL para este controller
public class ClazzesController {

    @RequestMapping(method = RequestMethod.GET)
    public ListClazzesResponse list() {

        ArrayList<Clazz> clazzes = new ArrayList<>();

        Clazz clazz1 = new Clazz();
        clazz1.setId(1);
        clazz1.setName("A");
        clazzes.add(clazz1);

        Clazz clazz2 = new Clazz();
        clazz2.setId(2);
        clazz2.setName("B");
        clazzes.add(clazz2);

        Clazz clazz3 = new Clazz();
        clazz3.setId(3);
        clazz3.setName("C");
        clazzes.add(clazz3);

        Clazz clazz4 = new Clazz();
        clazz4.setId(2);
        clazz4.setName("D");
        clazzes.add(clazz4);

        Clazz clazz5 = new Clazz();
        clazz5.setId(5);
        clazz5.setName("E");
        clazzes.add(clazz5);

        Clazz clazz6 = new Clazz();
        clazz6.setId(6);
        clazz6.setName("F");
        clazzes.add(clazz6);

        ListClazzesResponse response = new ListClazzesResponse();
        response.setClazzes(clazzes);

        return response;
    }
}
