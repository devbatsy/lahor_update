import { __SYD, __c } from "../../sydneyLib/sydneyDom.js";
import "./icon.js"

__SYD.footer_main_parent = () =>{
    return __c(
        'div',
        {
            style:'height:fit-content;padding-top:50px;padding-bottom:20px;background:#151515;width:100%;display:flex;flex-direction:column;row-gap:40px;'
        },
        [
            __c(
                'div',
                {
                    style:'display:flex;column-gap:30px;flex-wrap:wrap;row-gap:30px;width:100%'
                },
                [
                    __SYD.footer_main_child1(),
                    __SYD.footer_main_child2(),
                    __SYD.footer_main_child3()
                ]
            ),
            __c('hr',{style:'height:2px;width:100%;background:lightgrey'}),
            __c(
                'div',
                {
                    style:'display:flex;padding:10px;justify-content:center;align-items:center'
                },
                [
                    __SYD.text_lib_type_p_glob_vmax({cnt:'© 2024 All Right Reserved',size:'14px',clr:'#fff'})
                ]
            )
        ]
    )
}

__SYD.footer_main_child1 = () =>{
    return __c(
        'div',
        {
            style:'display:flex;height:fit-content;width:30%;min-width:fit-content;background:unset;flex-direction:column;row-gap:30px;padding:10px;color:#fff'
        },
        [
            __SYD.iconify_png_50px({attr:'logo.JPG',inject:'min-height:70px;min-width:70px;'}),
            __c(
                'div',
                {style:'display:flex;column-gap:10px;padding:5px;width:fit-content;align-items:center'},
                [
                    __SYD.iconify_20px('email'),
                    __c('a',{href:"https://something000@gmail.com"},[__SYD.text_lib_type_p_glob_vmax({cnt:'something000@gmail.com', size:'14px' , w:'500',clr:'#fff'})]),
                ]
            ),

            __c(
                'div',
                {style:'display:flex;column-gap:10px;padding:5px;width:fit-content;align-items:center'},
                [
                    __SYD.iconify_20px('tel'),
                    __c('a',{href:"tel:0000000000"},[__SYD.text_lib_type_p_glob_vmax({cnt:'0000000000', size:'14px' , w:'500',clr:'#fff'})]),
                ]
            ),

            __c(
                'div',
                {style:'display:flex;column-gap:10px;padding:5px;width:fit-content;align-items:center;max-width:400px;'},
                [
                    __SYD.iconify_20px('house'),
                    __SYD.text_lib_type_p_glob_vfit({cnt:'PLOT NO. 10, CAD, ZONE 07-04 KUDURU DISTRICT, BWARI, FCT ABUJA', size:'14px' , w:'500',clr:'#fff'})
                ]
            ),
        ]
    )
}

__SYD.footer_main_child2 = () =>{
    return __c(
        'div',
        {
            style:'display:flex;height:fit-content;width:30%;min-width:fit-content;background:unset;flex-direction:column;padding:10px;row-gap:20px'
        },
        [
            __SYD.text_lib_type_h1_glob({cnt:'OUR PAGES' , size:'22px' , w:'700' , inject:'text-decoration:underline;',clr:'#fff'}),
            __c(
                'div',
                {
                    style:'display:flex;column-gap:50px'
                },
                [
                    __c(
                        'div',
                        {
                            style:'height:fit-content;width:fit-content;display:flex;flex-direction:column;row-gap:20px'
                        },[
                            __SYD.footer_main_hyperLink_txt({link:'/about',cnt:'About'}),
                            __SYD.footer_main_hyperLink_txt({link:'/all_apartment',cnt:'Apartments'}),
                            __SYD.footer_main_hyperLink_txt({link:'/service',cnt:'Our service'}),
                            __SYD.footer_main_hyperLink_txt({link:'/gallery',cnt:'Gallery'}),
                        ]
                    ),
                    __c(
                        'div',
                        {
                            style:'height:fit-content;width:fit-content;display:flex;flex-direction:column;row-gap:20px'
                        },[
                            __SYD.footer_main_hyperLink_txt({link:'/contact',cnt:'Contact us'}),
                            __SYD.footer_main_hyperLink_txt({link:'/blog',cnt:'Blog'}),
                            __SYD.footer_main_hyperLink_txt({link:'#',cnt:'Refund and Return Policy'}),
                            __SYD.footer_main_hyperLink_txt({link:'#',cnt:'Privacy Policy'}),
                        ]
                    )
                ]
            )
        ]
    )
}

__SYD.footer_main_hyperLink_txt = ({link = '' , cnt = ''} = {}) =>{
    return __c(
        'a',
        {
            href:link
        },
        [
            __SYD.text_lib_type_p_glob_vmax({cnt:cnt, size:'14px',w:'500',clr:'#fff'})
        ]
    )
}

__SYD.footer_main_child3 = () =>{
    return __c(
        'div',
        {
            style:'display:flex;height:fit-content;width:30%;min-width:fit-content;background:unset;flex-direction:column;padding:10px;column-gap:30px;row-gap:30px;'
        },
        [
            __SYD.text_lib_type_h1_glob({cnt:'STAY IN TOUCH' , size:'22px' , w:'700' , inject:'text-decoration:underline;',clr:'#fff'}),
            __c(
                'div',
                {
                    style:'display:flex;column-gap:20px'
                },
                [
                    __SYD.iconify_25px('fb'),
                    __SYD.iconify_25px('twitter'),
                    __SYD.iconify_25px('instagram'),
                    __SYD.iconify_25px('youtube')
                ]
            )
        ]
    )
}