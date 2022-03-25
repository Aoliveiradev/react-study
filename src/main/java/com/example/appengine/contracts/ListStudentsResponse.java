package com.example.appengine.contracts;

import java.util.List;

public class ListStudentsResponse {
    private List<Student> students;

    public List<Student> getStudents() {
        return students;
    }

    public void setStudents(List<Student> students) {
        this.students = students;
    }
}
