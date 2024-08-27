import { __SYD, __c, __g, __p, __sC, __u } from "../../sydneyLib/sydneyDom.js"
import "../temps/text_lib.js"

__SYD.apsec5_description_text = () =>{
    const render_el = () =>{
        const element = [];

        apartment_main_content.split('\n').forEach(content => {
            element.push(
                __SYD.text_lib_type_p_glob_vfit({cnt:content , clr:'#fff' , size:'14px'})
            )
        });

        return element
    }
    return __c(
        'div',
        {
            style:'height:fit-content;width:100%;padding:0 10px;margin-top:50px',
        },
        [
            __c(
                'div',
                {
                    style:'height:fit-content;padding:20px 10px;padding-top:40px;width:100%',
                    class:'thin_border description_section_style'
                },
                [
                    ...render_el()
                ]
            )

        ]
    )
}