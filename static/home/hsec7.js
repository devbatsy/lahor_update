import { __SYD, __c, __sC , __p} from "../../sydneyLib/sydneyDom.js";

let intervel_sec2_count;

__SYD.hsec7_tetimonial_temp_comp = () =>{
    return __c(
        'div',
        {
            style:__sC['hsec3_video_container']({method:'add',style:{rowGap:'15px',background:'unset'}})
        },
        [
            __SYD.text_lib_type_h1_glob({cnt:"Our Clients Review",size:__p(['hsec7_tetimonial_temp_comp','font'],'40px'),w:'700',clr:'#fff',inject:"text-align:center;max-width:900px;padding:5px 15px;"}),
            __SYD.parent_child_testimonial_image_comp(),
        ],
        {
            createState:{
                stateName:'hsec7_tetimonial_temp_comp',
                state:{font:'40px',width_scale:true,
                    init_count:() =>{
                        intervel_sec2_count = setInterval(() => {
                            __p(['parent_child_testimonial_image_comp','animate'],()=>{})();
                        }, 3000);
                    },
                    del_count:() =>{
                        clearInterval(intervel_sec2_count)
                    }
                }
            },
            mediaQuery:{
                query:[{size:'<1000px',prop:{font:'30px',width_scale:false}}],
                defState:{font:'40px',width_scale:true}
            }
        }
    )
}