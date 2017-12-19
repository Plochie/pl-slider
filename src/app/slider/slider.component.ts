import { Component, AfterViewInit, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pl-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class PLSlider implements OnInit, AfterViewInit {

  @Input('height') height:string = "400px";
  @Input('items') itemsInView:any = 6;
  @Input('margin') itemMargin:any = 0.1;
  @Input('slidesToMove') slidesToMove:any = 2;
  @Input('extraInfo') extraInfo:string = "false";
  @Input('data') itemData: any [];
  @Input('autoSlide') autoSlideStatus:string = "false";
  @Input('pauseOnHover') pauseOnHover: string = "false";
  @Input('slideDuration') duration: number = 1500;

  private slideTransform:number = 0;
  private locationWrapperWidth:number = 100;
  private itemWidth:number = 16;

  private itemRemaining:number = 0;
  private sliderCounter:number = 0;
  private sliderTimer:any;

  ngOnInit() {

    // Convert all values to integer
    this.itemsInView = parseInt(this.itemsInView);
    this.itemMargin = parseFloat(this.itemMargin);
    this.slidesToMove = parseInt(this.slidesToMove);

    // value of item width w.r.t 100% width of div or screen
    var rawItemWidth = 100/this.itemsInView;
    // locationWrapperWidth is width which can cantain all the images provided
    // this div is one long div inside 100% wrapper.
    this.locationWrapperWidth = rawItemWidth * this.itemData.length;

    // itemWidth is width corresponding to each item in slider.
    // suppose for 6 items the width should be 100/6 for div of 100%
    // then this will calculate itemWidth proportional to above w.r.t locationWrapperWidth
    this.itemWidth = (100 / this.locationWrapperWidth) * rawItemWidth;
    
    // after remove margins widths between items to get final item width
    // consider right and left margins
    this.itemWidth -= (2 * this.itemMargin);

    // number of slides remainig after the view.
    this.itemRemaining = this.itemData.length - this.itemsInView;
  }

  ngAfterViewInit() {
    if(this.autoSlideStatus == "true")
      this.autoSlide();
  }

  private autoSlide() {
    this.sliderTimer = setInterval(() => {

      if(this.sliderCounter >= this.itemRemaining) {

        while(this.sliderCounter != 0) {
          this.slidePrev();
        }
        // extra prev as couter becomes zero
        this.slideTransform += ((this.itemWidth + ( 2 * this.itemMargin)) * this.slidesToMove );
        this.sliderCounter -= this.slidesToMove;
      }
      this.slideNext();
    }, this.duration);
  }

  private pauseSlider(status) {
    if(this.autoSlideStatus == "true" && this.pauseOnHover == "true") {
      if(status == true)
        clearInterval(this.sliderTimer);
      else
        this.autoSlide();
    }
  }


  private locationWrapperStyles() {
    let styles = {
      'transform': 'translateX(' + this.slideTransform + '%)',
      'width' : this.locationWrapperWidth + '%'
    };
    return styles;
  }

  private locationContainerStyles(data) {
    let styles = {
      'background-image': 'url(' + data.image + ')',
      'width' : this.itemWidth + '%',
      'height': this.height,
      'margin-right': this.itemMargin + '%',
      'margin-left': this.itemMargin + '%'
    };
    return styles;
  }

  private slideNext() {
    if(this.sliderCounter < this.itemRemaining) {
      // shift to itemwidth plus 2 times margin
      // right margin and left margin
      this.slideTransform += -((this.itemWidth + ( 2 * this.itemMargin)) * this.slidesToMove );
      this.sliderCounter += this.slidesToMove;
    }
  }

  private slidePrev() {
    // if nothing to left stop sliding.
    if(this.sliderCounter > 0) {
      // shift to itemwidth plus 2 times margin
      // right margin and left margin
      this.slideTransform += ((this.itemWidth + ( 2 * this.itemMargin)) * this.slidesToMove );
      this.sliderCounter -= this.slidesToMove;
    }
  }
}