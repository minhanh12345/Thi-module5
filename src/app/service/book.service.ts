import {Injectable} from '@angular/core';
import {Book} from "../model/book";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  persons: Book[] = [];

  constructor(private http: HttpClient) {
  }


  getProduct() {
    this.http.get<Book[]>('http://localhost:3000/books').subscribe((data) => {
      this.persons = data;
    })
  }


  // getAll(){
  //   return this.persons;
  // }
  //
  // saveProduct(person: Book) {
  //   this.persons.push(person);
  // }
  //
  //
  // findById(id: number | undefined) {
  //   return this.persons.find(person =>
  //     person.id === id
  //   )
  //
  // }
  //
  // updateProduct(id: number | undefined, product: any) {
  //   for (let i = 0; i < this.persons.length; i++) {
  //     if (this.persons[i].id === id) {
  //       this.persons[i] = product;
  //     }
  //   }
  // }
}
