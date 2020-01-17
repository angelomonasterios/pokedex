import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.search.valueChanges
    .pipe(
      debounceTime(300)
    ).subscribe(value => this.searchEmiter.emit(value));
  }
search = new FormControl("");
@Output('search') searchEmiter = new EventEmitter<string>();
}
