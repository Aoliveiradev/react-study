package com.example.appengine.contracts;

import java.util.List;

public class ListDegreesResponse {
    private List<Degree> degrees;

    public List<Degree> getDegrees() {
        return degrees;
    }

    public void setDegrees(List<Degree> degrees) {
        this.degrees = degrees;
    }
}
