import dataGrid from '../../../blog.json' with { type: 'json' };

dataGrid__aux = dataGrid;

// console.log(dataGrid__aux)

const data = Object.keys(dataGrid).filter(val =>{return dataGrid[val].title.split(' ').join('').toLowerCase() === title_info})

mainData = data.length > 0 ? dataGrid[data[0]] : {};

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
import "./bppsec1.js"
import "./bppsec2.js"
import "./bppsec3.js"


__SYD.container = () =>{
    return __c(
        'div',
        {
            style:__sC['container']({method:'add',style:{rowGap:'30px'}})
        },
        [
            __SYD.navBar(),
            __SYD.bpp_page_1_cont(),
            __SYD.bpp_sec2_blog(),
            __SYD.bppsec3_top_text(),
            __SYD.footer_main_parent()
        ]
    )
}

__m(__SYD.container())