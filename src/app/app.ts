import { Component, signal } from '@angular/core';
import { Db } from './db';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tester');
  // products:any[]=[]

  // constructor(private db:Db){
  //   this.db.getData().subscribe(x=>{
  //     this.products = x;
  //   })
  // }
}
