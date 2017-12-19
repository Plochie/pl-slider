# Angular 2+ Slider
This slider is created using Angular 4. It is completely written in typescript and nowhere DOM is used to achieve effects. All effects are based on CSS transition and style binding with Algular components.


Customisation
* height => Height of slider (in any unit)
* items => items to display in one frame
* margin => margin between each item
* slidesToMove => Number of slides to move for next or prev event.
* extraInfo => Addition information after hover on element.
* autoSlide => Slider will auto slide with default interval of 1500ms.
* pauseOnHover => Slider will pause when mouse hover over slider container and resume when mouse leaves contaienr.
* slideDuration => Interval for autoSlide.

|Property|Discription|Default Value|
|-|-|-|
|height|Height of slider (in any unit)| "400px" |
|items|items to display in one frame| 5 |
|margin|margin between each item| 0.1 |
|slidesToMove|Number of slides to move for next or prev event.| 1 |
|extraInfo|Addition information after hover on element.| false |
|autoSlide|Slider will auto slide with default interval of 1500ms.| false |
|pauseOnHover|Slider will pause when mouse hover over slider container and resume when mouse leaves contaienr.|false |
|slideDuration|Interval for autoSlide.|1500|

```html
<pl-slider [data]="itemData"
            height="400px"
            items=5
            margin=0.1
            slidesToMove=1
            extraInfo=true
            autoSlide=false
            pauseOnHover=false
            slideDuration=1500>
</pl-slider>
```

```javascript
itemData = [
    { image: '/path/slide1.jpg', title: 'Title 1'}, 
    { image: '/path/slide2.jpg', info: 'Some Information Without Title'},
    { image: '/path/slide3.jpg', title: 'Title 3', info: 'Information With Title'},
    { image: '/path/slide4.jpg', title: 'Title 4'},
    { image: '/path/slide5.jpg', title: 'Title 5'},
    { image: '/path/slide6.jpg', title: 'Title 6'},
    { image: '/path/slide7.jpg', title: 'Title 7'},
    { image: '/path/slide8.jpg', title: 'Title 8'}
]
```

## For any bug or issue
Please raise issue in case of any bug. For detailed disccusion drop me 
email at pareshlomate@gmail.com