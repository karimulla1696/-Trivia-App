import { Component, OnInit } from '@angular/core';
import { ResultService } from '../services/result.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  constructor(private resultService: ResultService, private route: Router) { }

  formData = {
    Name: "",
    Q1: "",
    A1: "",
    Q2: "",
    A2: ""
  };

  ngOnInit() {
    const name = sessionStorage.getItem('name');
    const q1 = JSON.parse(sessionStorage.getItem('q1'));
    const q2 = JSON.parse(sessionStorage.getItem('q2'));
    this.formData = {
      Name: name,
      Q1: q1.title,
      A1: q1.answer,
      Q2: q2.title,
      A2: q2.answer.join(', ')
    }
  }

  submit() {
    this.resultService.submit(this.formData).subscribe(res => {
      sessionStorage.clear();
      alert('Results saved successfully');
      this.route.navigate(['/']);
    },err => {
      alert(err.error.error);
    });
  }

}
