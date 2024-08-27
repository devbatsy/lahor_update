import { __SYD, __c, __g, __p, __sC, __u } from "../../sydneyLib/sydneyDom.js"

__SYD.ctsec2_map_iframe_comp = () =>{
    return __c(
        'div',
        {
            style:__sC['hsec3_video_container']({method:'add',style:{rowGap:'50px',background:'transparent',flexDirection:'row',justifyContent:'center',alignItems:'flex-start',flexWrap:'wrap',columnGap:'60px'}})
        },
        [
            __SYD.ctsec2_map_iframe_comp_iframe(),
            __SYD.ctsec2_map_iframe_comp_reservation_tab()
        ],
        {
            createState:{
                stateName:'ctsec2_map_iframe_comp',
                state:{font:'40px'}
            },
            mediaQuery:{
                query:[{size:'<841px',prop:{font:'30px'}}],
                defState:{font:'40px'}
            }
        }
    )
}

__SYD.ctsec2_map_iframe_comp_iframe = () =>{
    return __c(
        'iframe',
        {
            style:`height:80vw;max-height:600px;min-height:400px;min-width:300px;position:relative;overflow:hidden;background:#fff;width:${__p(['ctsec2_map_iframe_comp','font'],'40px') === '40px' ? 'calc(60% - 37.5px)' : '80%'};`,
            src:'https://google.com',
            class:' thin_border'
        }
    )
}

__SYD.ctsec2_map_iframe_comp_reservation_tab = () =>{
    return __c(
        'div',
        {
            style:`width:${__p(['ctsec2_map_iframe_comp','font'],'40px') === '40px' ? 'calc(40% - 37.5px)' : '80%'};height:fit-content;min-height:300px;min-width:300px;text-align:center;background:transparent;` + __sC['page3FloatText']({method:'add',style:{justifyContent:'flex-start',padding:'25px 10px',rowGap:'70px'}}),
            class:'thin_border'
        },
        [
            __c(
                'div',
                {
                    style:'display:flex;flex-direction:column;row-gap:20px;align-items:center;row-gap:25px'
                },
                [
                    __SYD.text_lib_type_p_glob_vfit({cnt:'Reservation',clr:'#b99d75' , w:'500' , size:'14px'}),
                    __SYD.text_lib_type_h1_glob({cnt:'Direct Reservations', clr:'#fff' , size:__p(['ctsec2_map_iframe_comp','font'],'40px') === '40px' ? '30px' : '20px' , inject:'text-transform:capitalize'}),
                    __c(
                        'div',
                        {
                            style:'display:flex;flex-direction:column;row-gap:10px;text-align:center;align-items:center;font-size:14px'
                        },
                        [
                            __c(
                                'div',
                                {},[
                                        'Email: ',__SYD.text_lib_type_hyperLink_glob_vfit({cnt:'something@gmail.com',clr:'#b99d75' , w:'500' , size:'14px' , clr:'#fff'}),
                                ]
                            ),
                            __c(
                                'div',
                                {},[
                                        'Tel: ',__SYD.text_lib_type_hyperLink_glob_vfit({cnt:'000-0000-0000',clr:'#b99d75' , w:'500' , size:'14px' , clr:'#fff'}),
                                ]
                            ),
                        ]
                    )
                ]
            ),

            __c(
                'div',
                {
                    style:'display:flex;flex-direction:column;row-gap:20px;align-items:center;row-gap:25px'
                },
                [
                    __SYD.text_lib_type_p_glob_vfit({cnt:'Short-let Apartment Address',clr:'#b99d75' , w:'500' , size:'14px'}),
                    __SYD.text_lib_type_h1_glob({cnt:'LAHOR Luxury Apartments', clr:'#fff' , size:__p(['ctsec2_map_iframe_comp','font'],'40px') === '40px' ? '30px' : '20px' , inject:'text-transform:capitalize'}),
                    __c(
                        'div',
                        {
                            style:'display:flex;flex-direction:column;row-gap:10px;text-align:center;align-items:center;font-size:14px'
                        },
                        [
                            __SYD.text_lib_type_p_glob_vfit({cnt:'1212 add address here,', clr:'#b99d75' , w:'500' , size:'14px' , clr:'#fff'}),
                            __SYD.text_lib_type_p_glob_vfit({cnt:'add address here.', clr:'#b99d75' , w:'500' , size:'14px' , clr:'#fff'}),
                        ]
                    )
                ]
            ),

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