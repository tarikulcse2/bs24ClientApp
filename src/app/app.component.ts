import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Bs Test App';
  posts: any[] = [];
  constructor(private http: HttpClient) {
    
    
  }
  ngOnInit() {
    this.http.get('http://localhost:5000/api/post').subscribe(r=> {
      this.posts = (r as any[]) || [];
    })
  }
}
