package com.example.restservice.models.invoice;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "testitems")
public class Testitem {
    @Id
    private String id;
    private String testname;
    private Double unitprice;
    private Double quantity;
    private Double priceamount;

    public Testitem(String testname, Double unitprice, Double quantity) {
        this.testname = testname;
        this.unitprice = unitprice;
        this.quantity = quantity;
        this.priceamount = unitprice*quantity;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTestname() {
        return testname;
    }

    public void setTestname(String testname) {
        this.testname = testname;
    }

    public Double getUnitprice() {
        return unitprice;
    }

    public void setUnitprice(Double unitprice) {
        this.unitprice = unitprice;
    }

    public Double getQuantity() {
        return quantity;
    }

    public void setQuantity(Double quantity) {
        this.quantity = quantity;
    }

    public Double getPriceamount() {
        return priceamount;
    }

    public void setPriceamount(Double priceamount) {
        this.priceamount = priceamount;
    }

    @Override
    public String toString() {
        return "Testitem{" +
                "testname='" + testname + '\'' +
                ", unitprice=" + unitprice +
                ", quantity=" + quantity +
                ", priceamount=" + priceamount +
                '}';
    }
}
