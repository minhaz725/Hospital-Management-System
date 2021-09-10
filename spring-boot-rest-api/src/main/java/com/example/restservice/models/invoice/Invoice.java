package com.example.restservice.models.invoice;

import com.example.restservice.models.report.Medicine;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;

import java.util.Date;
import java.util.List;

public class Invoice {
    @Id
    private String id;
    private String patientid;
    private String doctorid;
    @CreatedDate
    private Date createddate;
    private List<Testitem> testitems;
    private String paymentmethod;
    private Double totalamount;

    public Invoice(String patientid, String doctorid, Date createddate, List<Testitem> testitems, String paymentmethod, Double totalamount) {
        this.patientid = patientid;
        this.doctorid = doctorid;
        this.createddate = createddate;
        this.testitems = testitems;
        this.paymentmethod = paymentmethod;
        this.totalamount = totalamount;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPatientid() {
        return patientid;
    }

    public void setPatientid(String patientid) {
        this.patientid = patientid;
    }

    public String getDoctorid() {
        return doctorid;
    }

    public void setDoctorid(String doctorid) {
        this.doctorid = doctorid;
    }

    public Date getCreateddate() {
        return createddate;
    }

    public void setCreateddate(Date createddate) {
        this.createddate = createddate;
    }

    public List<Testitem> getTestitems() {
        return testitems;
    }

    public void setTestitems(List<Testitem> testitems) {
        this.testitems = testitems;
    }

    public String getPaymentmethod() {
        return paymentmethod;
    }

    public void setPaymentmethod(String paymentmethod) {
        this.paymentmethod = paymentmethod;
    }

    public Double getTotalamount() {
        return totalamount;
    }

    public void setTotalamount(Double totalamount) {
        this.totalamount = totalamount;
    }
}
