import { __SYD, __c , __sC , __p, __g, __u} from "../../sydneyLib/sydneyDom.js";

import dataGrid from '../../galleryImage.json' with { type: 'json' };
const data_grid = Object.keys(dataGrid).map(val =>{return dataGrid[val]})

console.log(data_grid)

__SYD.gsec2_galleryGrid = () =>{
    const render_selector = () =>{
        const element = [];
        const currentState = __p(['gsec2_galleryGrid' , 'gallState'],0)
        Object.keys(dataGrid).forEach((val,id) =>{
            element.push(
                __c(
                    'p',
                    {
                        style:'text-transform:capitalize;cursor:pointer',
                        class:id === currentState ? 'perm_underline_gallery' : ''
                    },
                    [
                        val
                    ],
                    {
                        events:{
                            onclick:() =>{
                                const state = __g('gsec2_galleryGrid');
                                state.gallState = id;
                                __u('gsec2_galleryGrid' , {type:'a',value:state})
                            }
                        }
                    }
                )
            )
        })

        return element
    }
    return __c(
        'div',
        {
            style:__sC['hsec3_video_container']({method:'add',style:{rowGap:'30px',minHeight:'fit-content',height:'100%',background:'unset'}})
        },
        [
            __c(
                'div',
                {
                    style:'padding:10px 5px;display:flex;column-gap:20px;flex-wrap:wrap;row-gap:20px;'
                },
                [
                    ...render_selector()
                ]
            ),
            __SYD.gallery_feature_images_comp()
        ],
        {
            createState:{
                stateName:'gsec2_galleryGrid',
                state:{font:'40px',flex_param:'row',currentIndex:0,gallState:0}
            },
            mediaQuery:{
                query:[{size:'<850px',prop:{font:'30px',flex_param:'column'}}],
                defState:{font:'40px',flex_param:'row'}
            }
        }
    )
}

__SYD.gallery_feature_images_comp = () =>{
    return __c(
        'div',{
            style:`height:100%;min-height:fit-content;width:100%;padding:5px;display:flex;flex-direction:${__p(['gsec2_galleryGrid','flex_param'],'row')};align-items:center;column-gap:10px;`,
        },
        [
            __SYD.gallery_feature_images_comp_child1(1),
            __c(
                'div',
                {
                    style:`display:flex;min-height:fit-content;width:${__p(['gsec2_galleryGrid','flex_param'],'row') === 'row' ? '70%' : '100%'};height:${__p(['gsec2_galleryGrid','flex_param'],'row') === 'row' ? '70vw' : '140vw'};max-height:${__p(['gsec2_galleryGrid','flex_param'],'row') === 'row' ? '600px' : '850px'};flex-direction:column;padding:10px;row-gap:10px`,
                },
                [
                    __SYD.gallery_feature_images_comp_child2(2),
                    __c(
                        'div',
                        {
                            style:`min-height:${__p(['gsec2_galleryGrid','flex_param'],'row') === 'row' ? '50%' : '70%'};width:100%;display:flex;flex-direction:${__p(['gsec2_galleryGrid','flex_param'],'row')};padding:5px;column-gap:5px;max-height:700px;row-gap:10px;column-gap:10px`,
                        },
                        [
                            __SYD.gallery_feature_images_comp_child3(3),
                            __SYD.gallery_feature_images_comp_child3(4),
                        ]
                    )
                ]
            )
        ],
        {
            mediaQuery:{
                query:[{size:'<700px',prop:{flex_param:'column'}}],
                defState:{flex_param:'row'}
            },
            createState:{
                stateName:'gallery_feature_images_comp',
                state:{flex_param:'row'}
            }
        }
    )
}

__SYD.gallery_feature_images_comp_child1 = (caption) =>{
    return __c(
        'a',
        {
            style:`height:70vw;width:${__p(['gsec2_galleryGrid','flex_param'],'row') === 'row' ? '30%' : '70%'};min-width:250px;max-height:380px;background-position:center 0;background-image:url("../assets/${data_grid[Object.keys(data_grid)[__p(['gsec2_galleryGrid' , 'gallState'],0)]][caption-1]}");`+__sC['border-rad-15'](),
            class:'thin_border',
            "data-lightbox":"models",
            "data-title":`Caption${caption}`,
            href:`../assets/${data_grid[Object.keys(data_grid)[__p(['gsec2_galleryGrid' , 'gallState'],0)]][caption-1]}`
        },[],{genericStyle:['bg_cover']}
    )
}

__SYD.gallery_feature_images_comp_child2 = (caption) =>{
    return __c(
        'a',
        {
            style:`min-height:${__p(['gsec2_galleryGrid','flex_param'],'row') === 'row' ? '50%' : '33vw'};width:100%;background-position:center 0;background-image:url("../assets/${data_grid[Object.keys(data_grid)[__p(['gsec2_galleryGrid' , 'gallState'],0)]][caption-1]}");`+__sC['border-rad-15'](),
            class:'thin_border',
            "data-lightbox":"models",
            "data-title":`Caption${caption}`,
            href:`../assets/${data_grid[Object.keys(data_grid)[__p(['gsec2_galleryGrid' , 'gallState'],0)]][caption-1]}`
        },[],{genericStyle:['bg_cover']}
    )
}

__SYD.gallery_feature_images_comp_child3 = (caption) =>{
    return __c(
        'a',
        {
            style:`height:100%;width:${__p(['gsec2_galleryGrid','flex_param'],'row') === 'row' ? '50%' : '100%'};background-position:center 0;background-image:url("../assets/${data_grid[Object.keys(data_grid)[__p(['gsec2_galleryGrid' , 'gallState'],0)]][caption-1]}");`+__sC['border-rad-15'](),
            class:'thin_border',
            "data-lightbox":"models",
            "data-title":`Caption${caption}`,
            href:`../assets/${data_grid[Object.keys(data_grid)[__p(['gsec2_galleryGrid' , 'gallState'],0)]][caption-1]}`
        },[],{genericStyle:['bg_cover']}
    )
}
