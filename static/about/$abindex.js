import{ __SYD, __c, __m, __sC, __sS , __p , __g , __u} from "../../sydneyLib/sydneyDom.js"
import "../temps/s_image.js"
import "../temps/s_simp_img.js"
import "../temps/gallary_grid.js"
import "../temps/styCom.js"
import "../temps/checkAvail.js"
import "../temps/footer.js"
import "../temps/testimonial.js"
import "../temps/navbar.js"
import "../temps/s_image_non_scale.js"
// import "./scroll_mod.js"
import "./asec1.js"
import "./asec2.js"
import "./asec3.js"
import "./asec4.js"
import "./asec5.js"

__SYD.container = () =>{
    return __c(
        'div',
        {
            style:__sC['container']()
        },
        [
            __SYD.navBar(),
            __SYD.a_page_1_cont(),
            __SYD.asec3_static_overlay_image(),
            __SYD.asec4_static_overlay_image(),
            __SYD.asec5_all_services_grid(),
            __SYD.asec2_top_text(),
            __SYD.footer_main_parent()
        ]
    )
}

__m(__SYD.container())