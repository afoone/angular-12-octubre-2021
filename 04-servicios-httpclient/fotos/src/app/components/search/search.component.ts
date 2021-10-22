import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public search: string

  @Output() public doSearch : EventEmitter<string> = new EventEmitter()

  constructor() {
    this.search = "hola mundo"
   }

  ngOnInit(): void {
  }

  onSearch() {
    this.doSearch.emit(this.search)
  }

}
