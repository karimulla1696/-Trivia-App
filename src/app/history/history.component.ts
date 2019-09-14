import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ResultService } from '../services/result.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private resultService: ResultService, private route:Router) { }

  history = [];

  ngOnInit() {
    this.resultService.history().subscribe(res => {
      this.history = res['response'];
    }, err => {
      alert(err['error']['error']);
      this.route.navigate(['/']);
    });
  }
}
