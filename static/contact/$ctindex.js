import{ __SYD, __c, __m, __sC, __sS , __p} from "../../sydneyLib/sydneyDom.js"
import "../temps/s_image.js"
import "../temps/s_simp_img.js"
import "../temps/gallary_grid.js"
import "../temps/styCom.js"
import "../temps/checkAvail.js"
import "../temps/footer.js"
import "../temps/testimonial.js"
import "../temps/navbar.js"
import "../temps/s_image_non_scale.js"
import "../temps/inputsLib.js"
import "./ctsec1.js"
import "./ctsec2.js"
import "./ctsec3.js"

__SYD.container = () =>{
    return __c(
        'div',
        {
            style:__sC['container']({method:'add',style:{}})//background:'#000'
        },
        [
            __SYD.navBar(),
            __SYD.ct_page_1_cont(),
            __SYD.ctsec2_map_iframe_comp(),
            __SYD.ctsec3_info_comp(),
            __SYD.footer_main_parent()
        ]
    )
}

__m(__SYD.container())