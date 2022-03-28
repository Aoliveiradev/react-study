package com.example.appengine;

import com.example.appengine.contracts.Clazz;
import com.example.appengine.contracts.Degree;
import com.example.appengine.contracts.ListStudentsResponse;
import com.example.appengine.contracts.Student;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController  // Faz com que o controle se comporte como rest
@RequestMapping("/api/students") // Mapear o URL para este controller
public class StudentsController {

    @RequestMapping(method = RequestMethod.GET)
    public ListStudentsResponse list() {

        ArrayList<Student> students = new ArrayList<>();

        Degree degree1 = new Degree();
        degree1.setId(1);
        degree1.setName("Ensino Fundamental");

        Degree degree2 = new Degree();
        degree2.setId(2);
        degree2.setName("1° ano do ensino médio");

        Degree degree3 = new Degree();
        degree3.setId(3);
        degree3.setName("2° ano ensino médio");

        Degree degree4 = new Degree();
        degree4.setId(4);
        degree4.setName("3° ano do ensino médio");

        Degree degree6 = new Degree();
        degree6.setId(6);
        degree6.setName("Estudo em Casa");

        Clazz clazz1 = new Clazz();
        clazz1.setId(1);
        clazz1.setName("A");

        Clazz clazz2 = new Clazz();
        clazz2.setId(2);
        clazz2.setName("B");

        Student student1 = new Student();
        student1.setId(1);
        student1.setRa(12346);
        student1.setName("Nome do Aluno 1");
        student1.setDegree(degree1);
        student1.setClazz(clazz1);
        students.add(student1);

        Student student2 = new Student();
        student2.setId(2);
        student2.setRa(456789);
        student2.setName("Nome do Aluno 2");
        student2.setDegree(degree2);
        student2.setClazz(clazz1);
        students.add(student2);

        Student student3 = new Student();
        student3.setId(3);
        student3.setRa(752156);
        student3.setName("Nome do Aluno 3");
        student3.setDegree(degree3);
        student3.setClazz(clazz2);
        students.add(student3);

        Student student4 = new Student();
        student4.setId(4);
        student4.setRa(852348);
        student4.setName("Nome do Aluno 4");
        student4.setDegree(degree4);
        student4.setClazz(clazz2);
        students.add(student4);

        Student student5 = new Student();
        student5.setId(5);
        student5.setRa(456643);
        student5.setName("Nome do Aluno 5");
        student5.setDegree(degree6);
        student5.setClazz(clazz2);
        students.add(student5);

        Student student6 = new Student();
        student6.setId(6);
        student6.setRa(454643);
        student6.setName("Nome do Aluno 6");
        student6.setDegree(degree1);
        student6.setClazz(clazz1);
        students.add(student6);

        ListStudentsResponse response = new ListStudentsResponse();
        response.setStudents(students);

        return response;
    }
}
