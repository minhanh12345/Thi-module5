import {Component, OnInit} from '@angular/core';
import {BookService} from "../../service/book.service";
import {Book} from "../../model/book";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-person-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  persons: Book[] = [];

  constructor(private personService: BookService,
              private http : HttpClient) {
  }

  ngOnInit(): void {
   this.getProduct();
  }

  deleteProduct(id: any) {
    this.http.delete(`http://localhost:3000/books/${id}`).subscribe((data) => {
      alert("xóa thành công");
      this.getProduct();
    })
  }

  getProduct() {
    this.http.get<Book[]>('http://localhost:3000/books').subscribe((data) => {
      this.persons = data;
    })
  }


}
