import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Banner } from 'src/app/model/banner';
import { BannerService } from 'src/app/service/banner.service';

@Component({
  selector: 'app-newbanner',
  templateUrl: './newbanner.component.html',
  styleUrls: ['./newbanner.component.css']
})
export class NewbannerComponent implements OnInit {
  imagenB: string;

  constructor(private bannerS: BannerService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const banner = new Banner(this.imagenB);
    this.bannerS.save(banner).subscribe(
      data => {
        alert ("Banner creado correctamente")
        this.router.navigate(['']);
      }, err => {
        alert ("Fallo al crear el banner")
        this.router.navigate(['']);
      }
    )
  }
}
