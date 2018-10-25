import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-banner',
  templateUrl: './image-banner.component.html',
  styleUrls: ['./image-banner.component.scss']
})
export class ImageBannerComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  public showLargebanner() {
    return this.router.isActive("home", true)
  }


}
