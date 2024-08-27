import { __SYD, __c, __g, __p, __sC, __u } from "../../sydneyLib/sydneyDom.js"
import "../temps/text_lib.js"

__SYD.h_page_1_cont = () =>{
    return __c(
        'div',
        {
            style:__sC['home_large_image']() + `background-image:url(../assets/${__p(['h_page_1_cont','bgImg'],'a1.jpg')});transition:background linear .5s;background-position:center 0;min-height:100vh;height:fit-content;max-height:unset;align-items:center;padding-top:${__p(['h_page_1_cont','font'],'45px') === '45px' ? '120px' : '160px'};background-attachment:fixed;flex-direction:column;row-gap:20px;`,
            class:' bg_overlay'
        },
        [
            __c(
                'div',
                {
                    style:'display:flex;flex-direction:column;row-gap:20px;align-items:center;z-index:10;padding:0 10px;'
                },
                [
                    // __p(['h_page_1_cont','mode'],'1') === '1' ? __SYD.h_page_1_cont_text_cont_1() : __SYD.h_page_1_cont_text_cont_2(),
                    __SYD.h_page_1_cont_text_cont_1(),
                    __SYD.checkAvail_main_parent()
                ]
            )
        ],
        {
            createState:{
                stateName:'h_page_1_cont',
                state:{font:'45px',mode:'1',bgImg:'a1.jpg',flex:true}
            },
            mediaQuery:{
                query:[{size:'<800px',prop:{font:'39px' , flex:false}}],
                defState:{font:'45px',flex:true}
            },
            genericStyle:['bg_cover']
        }
    )
}

__SYD.h_page_1_cont_text_cont_1 = () =>{
    return __c(
        'div',
        {
            style:'display:flex;flex-direction:column;row-gap:10px;justify-content:center;height:fit-content;color:#fff;text-align:center;align-items:center;perspective:600px;'
        },
        [
            __SYD.text_lib_type_h1_glob({cnt:'Welcome to LAHOR Luxury Apartments',size:__p(['h_page_1_cont','font'],'45px') === '45px' ? '18px' : '16px' , w:'900' , inject:'font-family:cursive;text-transform:capitalize;line-height:60px' , clr:'#b99d75' , cls:'drop_down_incoming_css_animation'}),
            __SYD.text_lib_type_h1_glob({cnt:'some description about the platform',size:__p(['h_page_1_cont','font'],'45px') , w:'500' , inject:'text-transform:capitalize;line-height:60px;max-width:900px;width:100%;animation-delay:.7s;' , clr:'inherit' ,cls:'rotateZ_incoming_css_animation'}),
        ]
    )
}

__SYD.h_page_1_cont_text_cont_2 = () =>{
    return __c(
        'div',
        {
            style:'display:flex;flex-direction:column;row-gap:15px;justify-content:center;height:100%;width:100%;color:#fff;text-align:left;align-items:center;padding-left:50px;'
        },
        [
            __SYD.text_lib_type_h1_glob({cnt:'Another content title here',size:__p(['h_page_1_cont','font'],'45px') === '45px' ? '30px' : '22px' , w:'900' , inject:'line-height:60px;text-transform:capitalize;width:100%;' , clr:'inherit' , cls:'left_incoming_css_animation'}),

            __SYD.text_lib_type_h1_glob({cnt:'description',size:__p(['h_page_1_cont','font'],'45px') , w:'700' , inject:'text-transform:capitalize;line-height:60px;width:100%;animation-delay:.7s;' , clr:'inherit' , cls:'left_incoming_css_animation'}),
            __c(
                'div',
                {style:'width:100%;display:flex;column-gap:50px;align-items:center'},
                [
                    __SYD.text_lib_type_h1_glob({cnt:'some content to put here something',size:__p(['h_page_1_cont','font'],'45px') === '45px' ? '16px' : '14px' , w:'500' , inject:'line-height:30px;text-transform:capitalize;min-width:max-content;animation-delay:1.4s;' , clr:'inherit' , cls:'left_incoming_css_animation'}),

                    __c('div',{style:`max-height:20px;height:100%;width:100%;background-position:right center;background-size:${__p(['h_page_1_cont','font'],'52px') === '52px' ? 'contain' : 'contain'};background-repeat:no-repeat;background-image:url("../assets/slider-img.png");animation-delay:1.4s;`,class:'right_incoming_css_animation_custom_slider'})
                ]
            )
        ]
    )
}

setInterval(() => {
    const state = __g('h_page_1_cont');
    // state.mode = state.mode === '1' ? '2' : '1';
    state.bgImg = state.bgImg === 'a1.jpg' ? 'a2.jpg' : 'a1.jpg';
    __u('h_page_1_cont',{type:'a',value:state});
}, 7000);
