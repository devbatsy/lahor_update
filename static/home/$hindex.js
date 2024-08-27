import{ __SYD, __c, __m, __sC, __sS , __p, __g, __u} from "../../sydneyLib/sydneyDom.js"
import "../temps/s_image.js"
import "../temps/s_simp_img.js"
import "../temps/gallary_grid.js"
import "../temps/styCom.js"
import "../temps/checkAvail.js"
import "../temps/footer.js"
import "../temps/testimonial.js"
import "../temps/navbar.js"
import "./scroll_mod.js"
import "./hsec1.js"
import "./hsec2.js"
import "./hsec3.js"
import "./hsec4.js"
import "./hsec5.js"
import "./hsec6.js"
import "./hsec7.js"
import "./hsec8.js"
import "./hsec9.js"

__SYD.container = () =>{
    return __c(
        'div',
        {
            style:__sC['container']()
        },
        [
            __SYD.navBar(),
            __SYD.h_page_1_cont(),
            __SYD.hsec2_increment_counter_parent(),
            __SYD.hsec3_video_container(),
            __SYD.hsec8_static_overlay_image(),
            __SYD.hsec9_static_overlay_image(),
            __SYD.hsec4_img_gallery_main_1(),
            __SYD.hsec6_text_img_array(),
            __SYD.hsec5_img_gallery_static(),
            // __SYD.parent_child_simp_image_comp()
            // __SYD.parent_child_s_image_comp()
            // __SYD.gallary_grid_parent()
            __SYD.hsec7_tetimonial_temp_comp(),
            __SYD.footer_main_parent()
        ]
    )
}

__m(__SYD.container());

// setTimeout(() => {
//     console.log(document.querySelectorAll('.clickable_components_home')) 
    
//     document.querySelectorAll('.clickable_components_home').forEach((val,i) =>{
//         val.addEventListener('click' , e =>{
//             const state = __g('hsec5_img_gallery_static');
//             console.log(i)
//             state.currentIndex = i;
//             console.log('hello world')
//             __u('hsec5_img_gallery_static',{type:'a',value:state});
//         })
//     })
// }, 2000);