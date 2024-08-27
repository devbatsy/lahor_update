import { __SYD, __c, __g, __p, __sC, __u } from "../../sydneyLib/sydneyDom.js"

__SYD.ctsec3_info_comp = () =>{
    return __c(
        'div',
        {
            style:__sC['hsec3_video_container']({method:'add',style:{rowGap:'50px',background:'transparent',flexDirection:'row-reverse',justifyContent:'center',alignItems:'flex-start',flexWrap:'wrap',columnGap:'60px'}})
        },
        [
            __SYD.ctsec3_info_img_comp(),
            __SYD.ctsec3_info_inputs_comp()
        ],
        {
            createState:{
                stateName:'ctsec3_info_comp',
                state:{font:'40px'}
            },
            mediaQuery:{
                query:[{size:'<841px',prop:{font:'30px'}}],
                defState:{font:'40px'}
            }
        }
    )
}

__SYD.ctsec3_info_img_comp = () =>{
    return __c(
        'div',
        {
            style:`height:80vw;max-height:500px;min-height:400px;min-width:300px;position:relative;overflow:hidden;width:${__p(['ctsec3_info_comp','font'],'40px') === '40px' ? 'calc(60% - 37.5px)' : '80%'};background-position:center 0;background-image:url("../assets/img.jpg")`,
            class:'thin_border'
        },[],{genericStyle:['bg_cover']}
    )
}

__SYD.ctsec3_info_inputs_comp = () =>{
    return __c(
        'div',
        {
            style:`width:${__p(['ctsec3_info_comp','font'],'40px') === '40px' ? 'calc(40% - 37.5px)' : '80%'};height:fit-content;min-height:300px;min-width:300px;text-align:center;` + __sC['page3FloatText']({method:'add',style:{justifyContent:'flex-start',padding:__p(['ctsec3_info_comp','font'],'40px') === '40px' ? '50px' : '25px',rowGap:'30px',}}),
            class:'thin_border'
        },
        [
            __SYD.text_lib_type_p_glob_vfit({cnt:'Have any questions?',clr:'#b99d75' , w:'500' , size:'14px'}),

            __SYD.text_lib_type_h1_glob({cnt:'Let\'s start a Conversation', clr:'#fff' , size:__p(['ctsec3_info_comp','font'],'40px') === '40px' ? '30px' : '20px' , inject:'width:100%;'}),

            __SYD.text_lib_type_p_glob_vfit({cnt:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.', clr:'#b99d75' , w:'500' , size:'14px' , inject:'width:100%;text-align:center;' , clr:'#fff'}),

            __c(
                'form',
                {
                    style:'width:100%;display:flex;flex-direction:column;row-gap:15px;align-items:center',
                    action:'/',
                    method:'get'
                },
                [
                    __SYD.input_type_text({_name:'username' , ph:'Your Name' , inject:'font-size:15px;width:100%;height:50px;color:#fff;' , cls:'thin_border input_place_holder_style'}),

                    __SYD.input_type_text({_name:'email' , ph:'Your Email' , inject:'font-size:15px;width:100%;height:50px;color:#fff;' , cls:'thin_border input_place_holder_style'}),

                    __SYD.input_type_text({_name:'phone' , ph:'Your Phone Number' , inject:'font-size:15px;width:100%;height:50px;color:#fff;' , cls:'thin_border input_place_holder_style'}),

                    __SYD.textArea_type_text({ph:'Your Message' , inject:'font-size:15px;width:100%;height:50px;color:#fff;resize: vertical;min-height:100px;' , cls:'thin_border input_place_holder_style'}),

                    __SYD.button_model_type_form({cnt:'send your message' , inject:'background:#b99d75'})
                ]
            )
        ]
    )
} 