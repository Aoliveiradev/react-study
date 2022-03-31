package com.example.appengine;

import com.example.appengine.contracts.Degree;
import com.example.appengine.contracts.ListDegreesResponse;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController  // Faz com que o controle se comporte como rest
@RequestMapping("/api/degrees") // Mapear o URL para este controller
public class DegreesController {

    @RequestMapping(method = RequestMethod.GET)
    public ListDegreesResponse list() {

        ArrayList<Degree> degrees = new ArrayList<>();

        Degree degree1 = new Degree();
        degree1.setId(1);
        degree1.setName("Ensino Fundamental");
        degrees.add(degree1);

        Degree degree2 = new Degree();
        degree2.setId(2);
        degree2.setName("1° ano do ensino médio");
        degrees.add(degree2);

        Degree degree3 = new Degree();
        degree3.setId(3);
        degree3.setName("2° ano ensino médio");
        degrees.add(degree3);

        Degree degree4 = new Degree();
        degree4.setId(4);
        degree4.setName("3° ano do ensino médio");
        degrees.add(degree4);

        Degree degree5 = new Degree();
        degree5.setId(5);
        degree5.setName("Cursinho");
        degrees.add(degree5);

        Degree degree6 = new Degree();
        degree6.setId(6);
        degree6.setName("Estudo em Casa");
        degrees.add(degree6);


        Degree degree7 = new Degree();
        degree7.setId(7);
        degree7.setName("Outros");
        degrees.add(degree7);

        Degree degree8 = new Degree();
        degree8.setId(8);
        degree8.setName("4º ano do ensino fundamental");
        degrees.add(degree8);

        Degree degree9 = new Degree();
        degree9.setId(9);
        degree9.setName("5º ano do ensino fundamental");
        degrees.add(degree9);

        Degree degree10 = new Degree();
        degree10.setId(10);
        degree10.setName("6º ano do ensino fundamental");
        degrees.add(degree10);

        Degree degree11 = new Degree();
        degree11.setId(11);
        degree11.setName("7º ano do ensino fundamental");
        degrees.add(degree11);

        Degree degree12 = new Degree();
        degree12.setId(12);
        degree12.setName("8º ano do ensino fundamental");
        degrees.add(degree12);

        Degree degree13 = new Degree();
        degree13.setId(13);
        degree13.setName("9º ano do ensino fundamental");
        degrees.add(degree13);



        ListDegreesResponse response = new ListDegreesResponse();
        response.setDegrees(degrees);

        return response;
    }
}
