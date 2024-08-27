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
import "./ssec1.js"
import "./ssec2.js"
import "./ssec3.js"
import "./ssec4.js"
import "../contact/ctsec3.js"

__SYD.container = () =>{
    return __c(
        'div',
        {
            style:__sC['container']()
        },
        [
            __SYD.navBar(),
            __SYD.s_page_1_cont(),
            __SYD.ssec2_static_overlay_image(),
            __SYD.ssec4_all_services_grid(),
            __SYD.ssec3_top_text(),
            __SYD.ctsec3_info_comp(),
            __SYD.footer_main_parent()
        ]
    )
}

__m(__SYD.container())