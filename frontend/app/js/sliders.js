import {Swiper, Navigation} from "swiper";
import "swiper/css"
import Collection from "./utils/collection";
import 'swiper/css/navigation';

export class Slider {
    constructor(instance, options) {
        this.instance = instance;
        this.params = options;
        this.swiper = null;

        this.init()
    }
    init() {
        new Swiper(this.instance, this.params)
    }
}
export default class SlidersCollection extends Collection{
    defaultCFG = {
        speed: 400,
        modules: [Navigation]
    }

    sliders = [
        {
            selector: 'slider-hero',
            options: {
                slidesPerView: 1,

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            }
        },
        {
            selector: 'slider-secondary',
            options: {
                slidesPerView: 2
            }
        }
    ]
    
    
 constructor() {
     super();
     
     
     this.init()
 }
 init() {
     this.sliders.forEach(slider => {
         const sliderDOMEL = document.querySelector(slider.selector)
         sliderDOMEL.forEach(el =>{
             this.collection = new Slider(el, {...this.defaultCFG, ...slider.options})
         })


     })
 }
 }
 


