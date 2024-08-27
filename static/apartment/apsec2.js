import { __SYD, __c, __g, __p, __sC, __u, render } from "../../sydneyLib/sydneyDom.js"
import "../temps/text_lib.js"

__SYD.apsec2_apartment_features = () =>{
    return __c(
        'div',
        {
            style:__sC['hsec3_video_container']({method:'add',style:{rowGap:'50px',background:'transparent',flexDirection:'row-reverse',justifyContent:'center',alignItems:'flex-start',flexWrap:'wrap',columnGap:'10px'}})
        },
        [
            __c(
                'div',
                {
                    style:`width:${__p(['apsec2_apartment_features','font'],'40px') === '40px' ? 'revert-layer' : '100%'};height:fit-content;min-height:300px;min-width:300px;` + __sC['page3FloatText']({method:'add',style:{justifyContent:'flex-start',alignItems:'flex-start',rowGap:'20px'}}),
                    class:'hsec8_static_overlay_image_child2 thin_border'
                },
                [
                    __SYD.text_lib_type_h1_glob({cnt:apartmentName, clr:'#fff' , size:__p(['apsec2_apartment_features','font'],'40px') === '40px' ? '30px' : '20px' , inject:'text-transform:capitalize;text-align:left;'}),

                    __c(
                        'div',
                        {
                            style:'display:flex;column-gap:8px;align-items:flex-end'
                        },
                        [
                            __SYD.text_lib_type_h1_glob({cnt:apartmentPrice , w:'700' , clr:'#fff' , size:__p(['apsec2_apartment_features','font'],'40px') === '40px' ? '25px' : '18px' , inject:'text-transform:capitalize;text-align:left;'}),

                            __SYD.text_lib_type_p_glob_vfit({cnt:'/', clr:'#b99d75' , w:'100' , size:__p(['apsec2_apartment_features','font'],'40px') === '40px' ? '25px' : '18px' , clr:'#fff'}),

                            __SYD.text_lib_type_p_glob_vfit({cnt:'Day', clr:'#b99d75' , w:'300' , size:__p(['apsec2_apartment_features','font'],'40px') === '40px' ? '25px' : '18px' , clr:'#fff'})
                        ]
                    ) ,

                    __SYD.text_lib_type_p_glob_vfit({cnt:apartmentDes, clr:'#b99d75' , w:'300' , size:__p(['apsec2_apartment_features','font'],'40px') === '40px' ? '16px' : '14px' , clr:'#fff'}),

                    __SYD.apsec2_apartment_features_amenities()
                ]
            ),
            
            __c(
                'div',
                {
                    style:`height:80vw;max-height:600px;min-height:400px;min-width:${__p(['apsec2_apartment_features','font'],'40px') === '40px' ? '300px' : '100%'};position:relative;overflow:hidden;background-position:center 0;background-image:url("../assets/${apartmentImage[1]}")`,
                    class:'hsec8_static_overlay_image_child1 thin_border'
                },[],{genericStyle:['bg_cover']}
            ),
        ],
        {
            mediaQuery:{
                query:[{size:'<650px',prop:{font:'30px'}}],
                defState:{font:'40px'}
            },
            createState:{
                stateName:'apsec2_apartment_features',
                state:{font:'40px'}
            }
        }
    )
}

__SYD.apsec2_apartment_features_amenities = () =>{
    const render_el = () =>{
        const element = []

        apartmentFeature.forEach(content => {
            element.push(
                __SYD.ssec4_all_services_grid_design_tabs_ind_tab({title:content})
            )
        });

        return element
    }
    return __c(
        'div',
        {
            style:'height:fit-content;width:100%;display:flex;column-gap:15px;row-gap:15px;flex-wrap:wrap;background:#151719;padding:15px;justify-content:center;user-select:none;'
        },
        [
            ...render_el()
        ]
    )
}

__SYD.ssec4_all_services_grid_design_tabs_ind_tab = ({title = 'def title' , i_class = ''} = {}) =>{
    return __c(
        'div',
        {
            style:'height:fit-content;width:fit-content;padding:30px 10px;display:flex;column-gap:20px;row-gap:20px;flex-direction:row;flex-direction:column;align-items:center;width:25%;min-width:160px;max-width:210px;' + __sC['border-rad-15'](),
            // class:'all_class_hover'
        },
        [
            __SYD.iconify_50px({attr:i_class,clr:'#b99d75'}),
            __SYD.text_lib_type_p_glob_vmax({cnt:title,size:'16px',clr:'#fff' , w:'500'}),
            // __SYD.text_lib_type_p_glob_vfit({cnt:cnt,clr:'#fff',w:'300',inject:'text-align:center'})
        ]
    )
}