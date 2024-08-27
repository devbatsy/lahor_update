import { __SYD, __c, __g, __p, __sC, __u } from "../../sydneyLib/sydneyDom.js"
import "../temps/text_lib.js"


__SYD.ssec2_static_overlay_image = () =>{
    return __c(
        'div',
        {
            style:__sC['hsec3_video_container']({method:'add',style:{rowGap:'50px',background:'transparent',flexDirection:'row',justifyContent:'center',alignItems:'flex-start',flexWrap:'wrap',columnGap:'10px'}})
        },
        [
            // __SYD.text_lib_type_h1_glob({cnt:"Choose Your Apartment Type",size:__p(['asec4_static_overlay_image','font'],'40px'),clr:'#b99d75',w:'700',inject:"text-align:left;width:100%;padding:5px 15px;padding-left:10px;"}),
            __c(
                'div',
                {
                    style:`width:${__p(['ssec2_static_overlay_image','font'],'40px') === '40px' ? 'revert-layer' : '100%'};height:fit-content;min-height:300px;min-width:300px;text-align:center;` + __sC['page3FloatText']({method:'add',style:{justifyContent:'flex-start'}}),
                    class:'hsec8_static_overlay_image_child2'
                },
                [
                    __c(
                        'div',
                        {
                            style:`font-size:${__p(['ssec2_static_overlay_image','font'],'40px') === '40px' ? '50px' : '25px'};font-weight:700;padding:5px;text-align:left;width:100%;color:#b99d75`
                        },
                        [
                            'The Services We Offer At Lahor Luxury Apartment'
                        ]
                    ),
                    __c(
                        'ul',
                        {
                            style:'display:flex;flex-direction:column;row-gap:15px;padding:10px;'
                        },
                        [
                            __SYD.ssec2_static_overlay_image_ul_list(),
                            __SYD.ssec2_static_overlay_image_ul_list(),
                            __SYD.ssec2_static_overlay_image_ul_list(),
                            __SYD.ssec2_static_overlay_image_ul_list(),
                            __SYD.ssec2_static_overlay_image_ul_list(),
                        ]
                    )
                ]
            ),
            __c(
                'div',
                {
                    style:'height:80vw;max-height:600px;min-height:400px;min-width:300px;position:relative;overflow:hidden;',
                    class:'hsec8_static_overlay_image_child1 div_text_hover_feature'
                },
                [
                    __c(
                        'div',
                        {
                            style:`position:absolute;top:0;right:0;height:100%;width:100%;background-image:url("../assets/img.jpg");background-position:center 0;`,
                            class:'thin_border circle_ball_design'
                        },[],{genericStyle:['bg_cover']}
                    ),
                    // __c(
                    //     'div',
                    //     {
                    //         style:`position:absolute;top:50%;right:20%;height:calc(100% - 50%);width:calc(100% - 20%);background-image:url("../assets/img.jpg");background-position:center 0;`,
                    //         class:'thin_border'
                    //     },[],{genericStyle:['bg_cover']}
                    // )
                ]
            )
        ],
        {
            mediaQuery:{
                query:[{size:'<650px',prop:{font:'30px'}}],
                defState:{font:'40px'}
            },
            createState:{
                stateName:'ssec2_static_overlay_image',
                state:{font:'40px'}
            }
        }
    )
}

__SYD.ssec2_static_overlay_image_ul_list = ({cnt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, incidunt officia.'} = {}) =>{
    return __c(
        'li',
        {
            style:""
        },
        [
            __SYD.text_lib_type_p_glob_vfit({cnt:cnt,inject:'font-size:16px;padding:5px;text-align:left;width:100%;line-height:25px;',clr:'#fff'})
        ]
    )
}