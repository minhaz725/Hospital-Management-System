import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { TestitemService } from '../../../services/testitem.service';
import { Testitem } from '../../../classes/testitem';


@Component({
  selector: 'app-testitem-add',
  templateUrl: './testitem-add.component.html',
  styleUrls: ['./testitem-add.component.css']
})



export class TestitemAddComponent implements OnInit {
  testitem = new Testitem();
  testitemId: string;
  submitted = false;

  // Build Report Form
  testitemForm = this.fb.group({
    testname: [ '', Validators.required ],
    unitprice: [ '', Validators.required ],
    quantity: [ '', Validators.required ],
    priceamount: [ '', Validators.required ]
  });

  constructor(private testitemService: TestitemService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
  }

  save() {
    this.testitem = this.testitemForm.value;
    this.testitemService.createTestitem(this.testitem).subscribe(
      testitemData => {
        this.testitem = testitemData;
        console.log(this.testitem);
        this.testitemId = this.testitem.id;
        this.testitem = new Testitem();
        this.testitemService.sendListUpdateAlert('Added');
        this.goToList();
      }, error => console.log(error)
    );
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goToList() {
    this.router.navigate([ 'testitems/details', this.testitemId ]);
  }

  cancelAdd() {
    this.router.navigate([ 'testitems' ]);
  }

}
