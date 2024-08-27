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
import "./gsec1.js"
import "./gsec2.js"

__SYD.container = () =>{
    return __c(
        'div',
        {
            style:__sC['container']({method:'add' , style:{rowGap:'30px'}})
        },
        [
            __SYD.navBar(),
            __SYD.g_page_1_cont(),
            __SYD.gsec2_galleryGrid(),
            __SYD.footer_main_parent()
        ]
    )
}

__m(__SYD.container());