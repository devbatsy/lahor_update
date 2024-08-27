import { __SYD, __c, __p, __sC } from "../../sydneyLib/sydneyDom.js";
import "./styCom.js"

__SYD.sec_gallary_grid_parent = () =>{
    return __c(
        'div',
        {
            style:`height:fit-content;width:100%;display:flex;flex-direction:${__p(['hsec5_img_gallery_static','font'],'40px') === '40px' ? 'row' : 'column'}; row-gap:10px;column-gap:10px;align-items:center;justify-content:center;padding:10px;`
        },
        [
            __SYD.gallary_grid_child_1(),
            __c(
                'div',
                {
                    style:`display:flex;flex-direction:column;width:${__p(['hsec5_img_gallery_static','font'],'40px') === '40px' ? '70%' : '100%'};height:70vw;min-height:fit-content;max-height:470px;row-gap:inherit;column-gap:inherit;padding:10px;`
                },
                [
                    __SYD.gallary_grid_child_2(),
                    __c(
                        'div',
                        {
                            style:`display:flex;flex-direction:${__p(['hsec5_img_gallery_static','font'],'40px') === '40px' ? 'row' : 'column'};height:${__p(['hsec5_img_gallery_static','flex'],'40px') === '40px' ? '50%' : 'fit-content'};min-height:fit-content;width:100%;column-gap:10px;row-gap:10px;align-items:center;padding:5px;`
                        },
                        [
                            __SYD.gallary_grid_child_3(),
                            __SYD.gallary_grid_child_3()
                        ]
                    )
                ]
            )
        ],
        {
            createState:{
                stateName:'sec_gallary_grid_parent',
                state:{flex:true}
            },
            mediaQuery:{
                query:[{size:'<550px',prop:{flex:false}}],
                defState:{flex:true}
            }
        }
    )
}

__SYD.gallary_grid_child_1 = () =>{
    return __c(
        'div',
        {
            style:__sC['border-rad-15']()+`height:70vw;max-height:430px;width:${__p(['hsec5_img_gallery_static','font'],'40px') === '40px' ? '30%' : '70%'};max-width:320px;background-image:url("../assets/img.jpg");`
        },[],{genericStyle:['bg_cover']}
    )
}

__SYD.gallary_grid_child_2 = () =>{
    return __c(
        'div',
        {
            style:__sC['border-rad-15']()+'min-height:50%;width:100%;background-image:url("../assets/img.jpg");'
        },[],{genericStyle:['bg_cover']}
    )
}

__SYD.gallary_grid_child_3 = () =>{
    return __c(
        'div',
        {
            style:__sC['border-rad-15']()+`min-height:${__p(['hsec5_img_gallery_static','font'],'40px') === '40px' ? '100%' : '50vw'};width:${__p(['hsec5_img_gallery_static','font'],'40px') === '40px' ? '50%' : '100%'};background-image:url("../assets/img.jpg");`
        },[],{genericStyle:['bg_cover']}
    )
}

// setInterval(() => {
//     console.log(__p(['sec_gallary_grid_parent','flex'],true))
// }, 1000);