import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {BookService} from "../../service/book.service";
import {HttpClient} from "@angular/common/http";
import {Book} from "../../model/book";

@Component({
  selector: 'app-person-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  personForm!: FormGroup;
  id!: number;


  constructor(private personService: BookService,
              private activatedRoute: ActivatedRoute,
              private http :HttpClient,
              private router :Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = parseInt(<string>paramMap.get('id'));
      this.getProduct(this.id);
    });
  }

  ngOnInit() {

  }

  getProduct(id: number) {
    this.http.get<Book>(` http://localhost:3000/books/${id}`).subscribe((data) => {
      this.personForm = new FormGroup({
        id: new FormControl(data.id),
        title: new FormControl(data.title),
        author: new FormControl(data.author),
        description: new FormControl(data.description)

      });
    })
  }

  saveProduct(id: number) {
    this.http.put<Book>(` http://localhost:3000/books/${id}`, this.personForm.value).subscribe((data) => {
      alert("edit thành công  " )
      this.router.navigate(['/person/list']);
    })
  }


}
