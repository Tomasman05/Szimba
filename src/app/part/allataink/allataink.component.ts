import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/services/base.service';

@Component({
  selector: 'app-allataink',
  templateUrl: './allataink.component.html',
  styleUrls: ['./allataink.component.css']
})
export class AllatainkComponent {
  szo = ""
  allatok: any
  lakohelyek: any
  gondozok: any
  oszlopok = [
    { key: "nev", text: "Név" },
    { key: "faj", text: "Faj" },
    { key: "erkezes", text: "Érkezés" },
    { key: "helye", text: "Lakóhely" },
    { key: "gondozo", text: "Gondozó" },

  ]
  constructor(private base: BaseService, private router:Router) {

    this.base.getData('allatok').subscribe(
      (adatok) => this.allatok = adatok
    )

    this.base.getData('lakhelyek').subscribe(
      (adatok) => this.lakohelyek = adatok
    )
    this.base.getData('gondozok').subscribe(
      (adatok) => this.gondozok = adatok
    )
  }

  keresElnevezes(mit: string, idhely: number, idgondozo: number): string {
    if(!this.lakohelyek || !this.gondozok || !this.allatok){
      return ""
    }
    if (mit == 'helye') {
      let id = idhely
      return this.lakohelyek.find(
        (sor: any) => sor.id == id
      ).lakhely
    }
    let id = idgondozo
    return this.gondozok.find(
      (sor: any) => sor.id == id
    ).nev
  }
  deleteAnimal(id: any) {
    this.base.deleteAnimal(id).subscribe(
      () => this.base.getData('allatok').subscribe(
        (adatok) => this.allatok = adatok
      ))
  }
  modifyAnimal(id:any){
    this.router.navigate(['/ujlako',id])
  }
}


