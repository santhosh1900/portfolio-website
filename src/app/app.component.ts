import { Component, OnInit} from '@angular/core';
declare const $: any;
declare var main : any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portfolio';

  ngOnInit(): void {
    main();
  }
}
