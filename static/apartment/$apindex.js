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
import "./apsec1.js"
import "./apsec2.js"
import "./apsec3.js"
import "./apsec4.js"
import "./apsec5.js"

__SYD.container = () =>{
    return __c(
        'div',
        {
            style:__sC['container']({method:'add',style:{fontFamily:'Marcellus'}})
        },
        [
            __SYD.navBar(),
            __SYD.ap_page_1_cont(),
            __SYD.apsec2_apartment_features(),
            __SYD.apsec3_book_tab_section(),
            __SYD.apsec5_description_text(),
            __SYD.apsec4_top_text(),
            __SYD.footer_main_parent(),
        ]
    )
}

__m(__SYD.container())