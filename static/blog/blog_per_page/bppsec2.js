import { __SYD, __c, __g, __p, __sC, __u } from "../../sydneyLib/sydneyDom.js"

// console.log(mainData)
import "../temps/text_lib.js"

__SYD.bpp_sec2_blog = () =>{
    const renderBlogs = () =>{
        const fetches = Object.keys(dataGrid__aux).filter(val =>{return dataGrid__aux[val].title.split(' ').join('').toLowerCase() !== title_info});
        const element = [];
        fetches.forEach(val =>{
            element.push(
                __SYD.blogTypes(val)
            )
        })
        return element;
    }
    
    return __c(
        'div',
        {
            style:'display:flex;row-gap:10px;height:fit-content;width:100%;padding:20px 10px;flex-wrap:wrap;column-gap:40px;',
            // class:'thin_border'
        },
        [
            __c(
                'div',{
                    style:`width:${__p(['bpp_sec2_blog','break'],false) ? '100%' : 'calc(70% - 25px)'};height:fit-content;padding:10px 0;display:flex;flex-direction:column;align-items:flex-start;row-gap:20px;;`
                },
                [

                    __c('div',{style:'display:flex;column-gap:10px;align-items:center'},[
                        __SYD.iconify_25px({attr:'date'}),
                        __SYD.text_lib_type_p_glob_vmax({cnt:`${mainData.date[0]} ${mainData.date[1]}`,clr:'#fff',size:'13px' , inject:'text-transform:capitalize;font-family:Poppins'})
                    ]),

                    ...mainData.content_main_one.split('\n').map(val =>{return __SYD.text_lib_type_p_glob_vfit({cnt:val , clr:'#fff' , inject:'text-align:left;width:100%;line-height:20px;margin-bottom:5px;text-indent:20px;' , w:'500' , size:'16px'})}),
                    
                    
                    __c(
                        'div',
                        {
                            style:`height:80vw;min-height:300px;max-height:500px;width:100%;background-position:center 0;background-image:url("../../assets/${mainData.img[1]}")`,
                            // class:'thin_border'
                        },[],{genericStyle:['bg_cover']}
                    ),

                    ...mainData.content_main_two.split('\n').map(val =>{return __SYD.text_lib_type_p_glob_vfit({cnt:val , clr:'#fff' , inject:'text-align:left;width:100%;line-height:20px;margin-bottom:5px;text-indent:20px;' , w:'500' , size:'16px'})}),


                ]
            ),
            __c(
                'div',
                {
                    style:`height:fit-content;width:${__p(['bpp_sec2_blog','break'],false) ? '100%' : 'calc(30% - 25px)'};min-width:250px;padding:10px 0;display:flex;flex-direction:column;align-items:center;row-gap:20px;`,
                    // class:'thin_border'
                },
                [
                    __SYD.text_lib_type_h1_glob({cnt:"You May Also like", clr:'#fff' , size:__p(['bpp_sec2_blog','break'],false) === false ? '20px' : '18px' , w:'700' , inject:'text-transform:capitalize;text-align:left;width:100%'}),
                    // __SYD.blogTypes(),
                    // __SYD.blogTypes(),
                    // __SYD.blogTypes(),
                    __c(
                        'div',
                        {
                            style:'width:100%;display:flex;flex-direction:column;align-items:flex-start;row-gap:50px;'
                        },
                        [
                            ...renderBlogs()
                        ]
                    ),
                    __SYD.bppsec2_contact_icons()

                ]
            )
        ],
        {
            createState:{
                stateName:'bpp_sec2_blog',
                state:{break:false}
            },
            mediaQuery:{
                query:[{size:'<910px' , prop:{break:true}}],
                defState:{break:false}
            }  
        }
    )
}

__SYD.blogTypes = (title) =>{
    // console.log(dataGrid__aux[title].title)
    return __c(
        'a',
        {
            style:`height:fit-content;display:flex;flex-direction:column;row-gap:10px;width:100%;max-width:500px`,
            
            // class:'thin_border'
        },
        [
            __SYD.text_lib_type_hyperLink_glob_vfit({cnt:dataGrid__aux[title].title,link:`?title=${dataGrid__aux[title].title.split(' ').join('').toLowerCase()}`,clr:'#b99d75' , w:'700' , size:'16px' , inject:'text-transform:capitalize;font-family:Poppins'}),
            __c(
                'a',
                {
                    style:`height:50vw;min-height:200px;max-height:250px;width:100%;max-width:500px;background-position:center 0;background-image:url("../../assets/${dataGrid__aux[title].img[0]}")`,
                    href:`?title=${dataGrid__aux[title].title.split(' ').join('').toLowerCase()}`
                    // class:'thin_border'
                },[],{genericStyle:['bg_cover']}
            ),
            __SYD.text_lib_type_p_glob_vfit({cnt:dataGrid__aux[title].description , size:__p(['bsec2_blog_array_main_parent','wrap'],false) === false ? '16px' : '14px' , w:'500' , clr:'#fff'}),
        ]
    )
}

__SYD.bppsec2_contact_icons = () =>{
    return  __c(
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
}