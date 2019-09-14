import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { 
    
  }
  currentQuestion;
  questions = [
    {
      id:1,
      title:"Who is the best cricketer in the world?",
      answer:""
    },
    {
      id:2,
      title:"What are the colors in the Indian national flag?",
      answer:[]
    }
  ];
  favs = ["Sachin Tendulkar", "Virat Kolli", "Adam Gilchirst", "Jacques Kallis"];
  colors = ["White", "Yellow", "Orange", "Green"];

  allChecked = false;

  updateCheck(event, value) {
    if(event.target.checked) {
        this.currentQuestion.answer.includes(value) ? '' : this.currentQuestion.answer.push(value);
        this.allChecked = this.currentQuestion.answer.length == this.colors.length ? true : false;
    }else {
        const index = this.currentQuestion.answer.indexOf(value);
        index > -1 ? this.currentQuestion.answer.splice(index, 1) : '';
        this.allChecked = false;
    }
  }

  selectAll(event) {
    this.currentQuestion.answer = event.target.checked ? [...this.colors] : [];
  }

  next() {
    const itemKey = `q${this.currentQuestion.id}`;
    sessionStorage.setItem(itemKey, JSON.stringify(this.currentQuestion));
    if(this.currentQuestion.id === 1) {
      this.router.navigate(['/question/2'])
    } else {
      this.router.navigate(['/final']);
    }
  }

  ngOnInit() {
    const name = sessionStorage.getItem('name');
    if(!name) {
      this.router.navigate(['/']);
    }
    this.route.params.subscribe(params => {
      const q1 = JSON.parse(sessionStorage.getItem('q1'));
      const id = parseInt(params.id);
      if(id === 2 && q1 && q1.answer) {
        this.currentQuestion = this.questions.find(x => x.id === 2);
      } else if(id === 1) {
        this.currentQuestion = this.questions.find(x => x.id === 1);
      } else {
        this.router.navigate(['/question/1']);
      }
    });    

  }

}
