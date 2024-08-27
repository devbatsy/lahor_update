import { __SYD, __c, __g, __p, __sC, __u } from "../../sydneyLib/sydneyDom.js"
import "../temps/text_lib.js"

__SYD.apsec4_top_text = () =>{
    return __c(
        'div',
        {
            style:__sC['hsec3_video_container']({method:'add',style:{background:"unset",rowGap:'10px'}})
        },
        [
            __SYD.text_lib_type_h1_glob({cnt:"Related Products",size:__p(['apsec4_top_text','font'],'40px'),clr:"#b99d75",w:'700',inject:"text-align:center;max-width:900px;padding:5px 15px;"}),

            // __SYD.text_lib_type_p_glob_vfit({cnt:'We believe that every traveler deserves an extraordinary experience. Our journey began with a simple yet profound vision: to redefine short-let accommodations by blending opulence with practicality..',size:'16px',clr:'grey',inject:'color:#fff;max-width:950px;text-align:center;line-height:25px;'}),

            __c(
                'div',
                {
                    style:'height:80vw;width:100%;max-height:calc(100vh - 130px);margin-top:10px;padding-bottom:10px'
                },
                [
                    __SYD.parent_child_s_non_scale_image_comp(),
                    __SYD.move_s_non_scale_image_comp()
                ]
            )
        ],
        {
            createState:{
                stateName:'apsec4_top_text',
                state:{
                    font:'40px'
                }
            },
            mediaQuery:{
                query:[{size:'<650px',prop:{font:'30px'}}],
                defState:{font:'40px'}
            }
        }
    )
}