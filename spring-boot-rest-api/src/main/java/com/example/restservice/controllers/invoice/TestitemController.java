package com.example.restservice.controllers.invoice;

import com.example.restservice.models.invoice.Testitem;
import com.example.restservice.repository.TestitemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api")

public class TestitemController {

    @Autowired
    TestitemRepository testitemRepository;

    @GetMapping("/testitems")
    public ResponseEntity<List<Testitem>> getAllTestitems() {
        try {
            List<Testitem> testitems = new ArrayList<Testitem>();
            testitemRepository.findAll().forEach(testitems::add);

            if (testitems.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(testitems, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/testitems/{id}")
    public ResponseEntity<Testitem> getTestitem(@PathVariable("id") String id) {
        Optional<Testitem> testitemData = testitemRepository.findById(id);
        if (testitemData.isPresent()) {
            return new ResponseEntity<>(testitemData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/testitems")
    public ResponseEntity<Testitem> createTestitem(@RequestBody Testitem testitem) {
        try {
            Testitem _testitem = testitemRepository.save(new Testitem(
                    testitem.getTestname(),
                    testitem.getUnitprice(),
                    testitem.getQuantity()
            ));
            return new ResponseEntity<>(_testitem, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/testitems/{id}")
    public ResponseEntity<Testitem> updateTestitem(@PathVariable("id") String id, @RequestBody Testitem testitem) {
        Optional<Testitem> testitemData = testitemRepository.findById(id);
        if (testitemData.isPresent()) {
            Testitem _testitem = testitemData.get();
            _testitem.setTestname(testitem.getTestname());
            _testitem.setUnitprice(testitem.getUnitprice());
            _testitem.setQuantity(testitem.getQuantity());
            testitem.setPriceamount(testitem.getPriceamount());
            return new ResponseEntity<>(testitemRepository.save(_testitem), HttpStatus.OK);
        } else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/testitems/{id}")
    public ResponseEntity<HttpStatus> deleteTestitem(@PathVariable("id") String id) {
        try {
            testitemRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
