import { __c , __sC , __SYD , __p} from "../../sydneyLib/sydneyDom.js"

let intervel_sec2_count;

__SYD.hsec4_img_gallery_main_1 = () =>{
    return __c(
        'div',
        {
            style:__sC['hsec3_video_container']({method:'add',style:{rowGap:'15px',background:'#151515'}})
        },
        [
            __SYD.text_lib_type_h1_glob({cnt:"Choose Your Apartment Type",size:__p(['hsec4_img_gallery_main_1','font'],'40px'),clr:'#b99d75',w:'700',inject:"text-align:left;width:100%;padding:5px 15px;padding-left:10px;"}),

            __SYD.text_lib_type_p_glob_vfit({cnt:'Check out some of our shortlet apartments in Lekki, shortlet apartments in Ibeju Lekki, short let apartments in Epe and our shortlet apartments in Dangote Refinery.',size:'14px',clr:'#fff',inject:'line-height:25px;width:100%;text-align:left;padding-left:10px;'}),

            __c(
                'div',
                {
                    style:'height:80vw;width:100%;max-height:calc(100vh - 130px);margin-top:10px;padding-bottom:10px'
                },
                [
                    __SYD.parent_child_s_image_comp(),
                    __SYD.move_s_image_comp()
                ]
            )
        ],
        {
            createState:{
                stateName:'hsec4_img_gallery_main_1',
                state:{font:'40px',
                    init_count:() =>{
                        intervel_sec2_count = setInterval(() => {
                            __p(['parent_child_s_image_comp','animate'],()=>{})();
                        }, 3000);
                    },
                    del_count:() =>{
                        clearInterval(intervel_sec2_count)
                    }
                }
            },
            mediaQuery:{
                query:[{size:'<650px',prop:{font:'30px'}}],
                defState:{font:'40px'}
            }
        }
    )
}