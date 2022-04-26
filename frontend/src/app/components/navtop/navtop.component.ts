import { Component, OnInit } from '@angular/core';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navtop',
  templateUrl: './navtop.component.html',
  styleUrls: ['./navtop.component.css']
})
export class NavtopComponent implements OnInit {

  faBars = faBars;
  faSearch = faSearch;

  constructor() { }

  ngOnInit(): void {
  }

}
