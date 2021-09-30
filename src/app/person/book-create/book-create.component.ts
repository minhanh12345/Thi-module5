import { Component, OnInit } from '@angular/core';
import {Book} from "../../model/book";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BookService} from "../../service/book.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-person-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  persons:Book[]=[];

  personForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    author: new FormControl(''),
    description : new FormControl('')
  })
  constructor(private personService:BookService,
              private router: Router,
              private http :HttpClient) { }

  ngOnInit(): void {

  }
  submit() {
    this.http.post<Book>('http://localhost:3030/books', this.personForm.value).subscribe((data) => {
      alert("create thành công  " )
      this.router.navigate(['/person/list']);
    })
  }
}
