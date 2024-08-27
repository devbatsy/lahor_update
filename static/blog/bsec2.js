import { __SYD, __c, __p } from "../../sydneyLib/sydneyDom.js"
import dataGrid from '../../blog.json' with { type: 'json' };

const data_grid = Object.keys(dataGrid).map(val =>{return dataGrid[val]})

__SYD.bsec2_blog_array_main_parent = () =>{
    return __c(
        'article',
        {
            style:`fit-content;width:100%;padding:20px 15px;display:flex;column-gap:30px;row-gap:50px;flex-direction${'row'};flex-wrap:wrap;justify-content:center`
        },
        [
            ...data_grid.map((val,id) =>{return __SYD.bsec2_blog_array_main_parent_design_tab(id)})
        ],
        {
            createState:{
                stateName:'bsec2_blog_array_main_parent',
                state:{wrap:false}
            },
            mediaQuery:{
                query:[{size:'<748px',prop:{wrap:true}}],
                defState:{wrap:false}
            }
        }
    )
}

__SYD.bsec2_blog_array_main_parent_design_tab = (id) =>{
    return __c(
        'a',
        {
            style:`height:fit-content;width:${__p(['bsec2_blog_array_main_parent','wrap'],false) === false ? 'calc(50% - (22.5px) )' : '80%'};display:flex;row-gap:18px;padding:5px 7px;flex-direction:column;background:transparent;min-width:350px;overflow:hidden;position:relative`,
            href:`blog_page?title=${data_grid[id].title.split(' ').join('').toLowerCase()}`
        },
        [
            __c(
                'div',{},
                [
                    __c(
                        'div',
                        {
                            style:`height:80vw;width:100%;max-height:${__p(['bsec2_blog_array_main_parent','wrap'],false) === false ? '400px' : '250px'};background-position:center 0;background-image:url("../assets/${data_grid[id].img[0]}");`,
                            class:'expandImg_bg'
                        },[

                        ],{genericStyle:['bg_cover']}
                    ),
                ]
            ),

            __c(
                'div',
                {
                    style:'position:absolute;top:15px;left:15px;height:55px;width:50px;background:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center'
                },
                [
                    __SYD.text_lib_type_p_glob_vfit({cnt:data_grid[id].date[0] , clr:'#171717' , inject:'text-transform:capitalize;' , w:'500' , size:'18px'}), 

                    __SYD.text_lib_type_p_glob_vfit({cnt:data_grid[id].date[1] , clr:'#171717' , inject:'text-transform:capitalize;' , w:'300' , size:'16px'})
                ]
            ),

            __SYD.text_lib_type_hyperLink_glob_vfit({cnt:data_grid[id].title,clr:'#b99d75' , w:'700' , size:'14px'}),
            
            __SYD.text_lib_type_h1_glob({cnt:data_grid[id].description, clr:'#fff' , size:__p(['bsec2_blog_array_main_parent','wrap'],false) === false ? '35px' : '20px' , inject:'text-transform:capitalize'}),

            __SYD.text_lib_type_p_glob_vfit({cnt:`${data_grid[id].content_main_one.slice(0,150)} ...` , size:__p(['bsec2_blog_array_main_parent','wrap'],false) === false ? '16px' : '14px' , w:'500' , clr:'#fff'}),

            __SYD.text_lib_type_hyperLink_glob_vfit({cnt:'Read More',clr:'#b99d75' , w:'700' , size:'14px' , inject:'text-decoration:underline'}),
        ]
    )
}