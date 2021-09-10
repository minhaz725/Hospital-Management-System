import {Component, OnDestroy, OnInit} from '@angular/core';
import { TestitemService } from '../../../services/testitem.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Testitem } from '../../../classes/testitem';


@Component({
  selector: 'app-testitem-list',
  templateUrl: './testitem-list.component.html',
  styleUrls: [ './testitem-list.component.css' ]
})
export class TestitemListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  testitems: Observable<Testitem[]>;

  constructor(private testitemService: TestitemService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.reloadData();
    this.subscription = this.testitemService.getListUpdateAlert().subscribe(
      (message) => {
        if (message) {
          this.reloadData();
        }
      }
    );
  }

  reloadData() {
    this.testitems = this.testitemService.getAllTestitem();
  }

  testitemDetails(id: string) {
    this.router.navigate([ 'details', id ], { relativeTo: this.route });
  }

  addTestitem() {
    this.router.navigate([ 'add' ], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
