# Angular 2+ Slider

[![PL|Plochie](https://github.com/Plochie/pl-slider/blob/master/src/assets/logo.png)](https://github.com/Plochie)

This slider is created using Angular 4. It is completely written in typescript and nowhere DOM is used to achieve effects. All effects are based on CSS transition and style binding with Algular components.

## Installation

First install package via npm
```sh
npm install pl-slider
```

After successfull installation import in `app.module.ts`
```
import { PLSlider } from 'pl-slider';

@NgModule({
  declarations: [
    ...,
    PLSlider
  ],
  ...
})
```

Now, use `<pl-slider></pl-slider>` in any component.

## Usage

1. This slider requires JSON array data as input. Create JSON array in respective components (.ts) file.
> All the fields in JSON are not necessary, only add those required.
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

2. Bind that array to `data` property of slider.
```html
<pl-slider [data]="itemData"></pl-slider>
```
	This will create basic slider with predefined values. (for default values refer Properties table)

3. For more customisations use following properties as needed.

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

## All Properties
|Property|Discription|Default Value|
|-|-|-|
|`height`|Height of slider (in any unit)| "400px" |
|`items`|items to display in one frame| 5 |
|`margin`|margin between each item| 0.1 |
|`slidesToMove`|Number of slides to move for next or prev event.| 1 |
|`extraInfo`|Addition information after hover on element.| false |
|`autoSlide`|Slider will auto slide with default interval of 1500ms.| false |
|`pauseOnHover`|Slider will pause when mouse hover over slider container and resume when mouse leaves contaienr.|false |
|`slideDuration`|Interval for autoSlide.|1500|

## For any bug or issue
Please raise issue in case of any bug. For detailed disccusion drop me 
email at pareshlomate@gmail.com

License
-
MIT

**Free Software, Hell Yeah!**