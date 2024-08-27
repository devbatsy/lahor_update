import { __SYD, __c, __p } from "../../sydneyLib/sydneyDom.js"
import dataGrid from '../../shortlets.json' with { type: 'json' };
const data_grid = Object.keys(dataGrid).map(val =>{if(Number(dataGrid[val].adult_num) + Number(dataGrid[val].child_num) >= guestNumber) return dataGrid[val]})

// console.log(data_grid)


import "../temps/text_lib.js"

__SYD.apcsec2_parent = () =>{
    const renderElem = () =>{
        let element = [];

        data_grid.forEach((val , i) =>{
            if(val !== undefined)
            {
                element.push(__SYD.apcsec2_design_tabs(i))
            }
        })  
        element = element.length === 0 ? ['SORRY NO APARTMENT AVAILABLE'] : element
        return element
    }
    return __c(
        'div',
        {
            style:`fit-content;width:100%;padding:20px 15px;display:flex;column-gap:30px;row-gap:50px;flex-direction${'row'};flex-wrap:wrap;justify-content:center;`
        },
        [
            ...renderElem()

        ],
        {
            createState:{
                stateName:'apcsec2_parent',
                state:{wrap:false}
            },
            mediaQuery:{
                query:[{size:'<748px' , prop:{wrap:true}}],
                defState:{wrap:false}
            }
        }
    )
}

__SYD.apcsec2_design_tabs = (i) =>{
    return __c(
        'div',
        {
            style:`height:fit-content;width:${__p(['apcsec2_parent','wrap'],false) === false ? 'calc(50% - (22.5px) )' : '80%'};display:flex;row-gap:18px;padding:5px 7px;flex-direction:column;background:transparent;min-width:350px;overflow:hidden;position:relative`,
        },
        [
            __c(
                'div',
                {
                    style:'position:absolute;top:10px;left:10px;padding:10px;z-index:500;background:#171717;user-select:none;'
                },
                [
                    __SYD.text_lib_type_p_glob_vfit({cnt:`${data_grid[i].price_per_day} / Day` , size:__p(['apcsec2_parent','wrap'],false) === false ? '20px' : '18px' , w:'900' , clr:'#fff' , inject:''}),
                ]
            ),
            __c(
                'a',{href:`/apartment/?type=${data_grid[i].Name.split(' ').join('').toLowerCase()}`},
                [
                    __c(
                        'div',
                        {
                            style:`height:80vw;width:100%;max-height:${__p(['apcsec2_parent','wrap'],false) === false ? '400px' : '250px'};background-position:center 0;background-image:url("../assets/${data_grid[i].image[0]}");`,
                            class:'expandImg_bg thin_border'
                        },[

                        ],{genericStyle:['bg_cover']}
                    ),
                ]
            ),

            __c(
                'div',
                {
                    style:'display:flex;flex-direction:column;row-gap:inherit;padding:10px 15px;',
                    class:'thin_border'
                },
                [
                    __SYD.text_lib_type_h1_glob({cnt:data_grid[i].Name, clr:'#fff' , size:__p(['bsec2_blog_array_main_parent','wrap'],false) === false ? '35px' : '20px' , inject:'text-transform:capitalize'}),

                    __SYD.text_lib_type_p_glob_vfit({cnt:data_grid[i].description , size:__p(['apcsec2_parent','wrap'],false) === false ? '16px' : '14px' , w:'500' , clr:'#fff'}),
                ]
            ),
        ]
    )
}