import { Component, OnInit } from '@angular/core';
import { Testitem } from '../../../classes/testitem';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TestitemService } from '../../../services/testitem.service';

@Component({
  selector: 'app-testitem-details',
  templateUrl: './testitem-details.component.html',
  styleUrls: ['./testitem-details.component.css']
})

export class TestitemDetailsComponent implements OnInit {

  testitemId: string;
  testitem: Testitem;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private testitemService: TestitemService) {
  }

  ngOnInit(): void {
    this.testitem = new Testitem();
    this.route.params.subscribe(
      (params: Params) => {
        this.testitemId = params['id'.toString()];
        this.testitemService.getTestitem(this.testitemId).subscribe(
          testitemData => {
            this.testitem = testitemData;
          }
        );
      }
    );
  }

  deleteTestitem(id: string) {
    this.testitemService.deleteTestitem(id).subscribe(
      data => {
        this.testitemService.sendListUpdateAlert('Deleted');
      },
      error => console.log(error)
    );
    this.router.navigate([ 'testitems' ]);
  }

  updateTestitem(id: string) {
    this.router.navigate([ 'testitems/update', id ]);
  }
}
