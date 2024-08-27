import { __SYD, __c , __sC , __p, __g, __u} from "../../sydneyLib/sydneyDom.js";

const data = [
    {ilabel:'fa-solid fa-bolt',main:' 24Hours Power Supply',cnt:'fast and reliable'},{ilabel:'fa-solid fa-shield-halved',main:'24hours Privacy and Security',cnt:'fast and reliable'},{ilabel:'fa-solid fa-globe',main:'24hours High Speed internet',cnt:'fast and reliable'}
]
//<i class="fa-solid fa-bolt"></i>  <i class="fa-solid fa-shield-halved"></i>  <i class="fa-solid fa-globe"></i>
gall_func = (i) =>{
    const state = __g('hsec5_img_gallery_static');
    state.currentIndex = i;
    __u('hsec5_img_gallery_static',{type:'a',value:state});
}

__SYD.hsec5_img_gallery_static = () =>{
    const pre_process = () =>{
        const bef = [];
        const aft = [];
        const currentIndex = __p(['hsec5_img_gallery_static','currentIndex'],0);
        for(let i = 0; i < 3; i++)
        {
            let current = __SYD.hsec5_mobile_labels_comp({i:i});
            if(i <= currentIndex)
            {
                bef.push(i)
            }else aft.push(i)
        }
        return [bef,aft]
    }

    return __c(
        'div',
        {
            style:__sC['hsec3_video_container']({method:'add',style:{rowGap:'30px',minHeight:'fit-content',height:'100%',background:'unset',padding:'10px'}})
        },
        [
            __SYD.text_lib_type_h1_glob({cnt:"OUR SERVICES",size:__p(['hsec5_img_gallery_static','font'],'40px'),w:'700',inject:"text-align:left;width:100%;padding:5px 15px;padding-left:10px;"}),

            __c(
                'div',
                {
                    style:`height:fit-content;width:100%;background:transparent;display:${__p(['hsec5_img_gallery_static','flex_param'],'row') === 'row' ? 'flex' : 'none'};justify-content:center;align-items:center;padding:10px;column-gap:20px;`
                },
                [
                    __SYD.hsec5_desktop_labels_comp({i:0}),
                    __SYD.hsec5_desktop_labels_comp({i:1}),
                    __SYD.hsec5_desktop_labels_comp({i:2}),

                ]
            ),
            __p(['hsec5_img_gallery_static','flex_param'],'row') === 'row' ? __SYD.gallery_feature_images_comp('flex') : '',
            // ...(__p(['hsec5_img_gallery_static','flex_param'],'row') !== 'row' ? pre_process()[0] : ''),
            __p(['hsec5_img_gallery_static','flex_param'],'row') !== 'row' ? __SYD.hsec5_mobile_labels_comp({i:0}) : '',
            __p(['hsec5_img_gallery_static','flex_param'],'row') !== 'row' ? __SYD.gallery_feature_images_comp(__p(['hsec5_img_gallery_static','currentIndex'],0) === 0 ? 'flex' : 'none') : '',
            __p(['hsec5_img_gallery_static','flex_param'],'row') !== 'row' ? __SYD.hsec5_mobile_labels_comp({i:1}) : '',
            __p(['hsec5_img_gallery_static','flex_param'],'row') !== 'row' ? __SYD.gallery_feature_images_comp(__p(['hsec5_img_gallery_static','currentIndex'],0) === 1 ? 'flex' : 'none') : '',
            __p(['hsec5_img_gallery_static','flex_param'],'row') !== 'row' ? __SYD.hsec5_mobile_labels_comp({i:2}) : '',
            __p(['hsec5_img_gallery_static','flex_param'],'row') !== 'row' ? __SYD.gallery_feature_images_comp(__p(['hsec5_img_gallery_static','currentIndex'],0) === 2 ? 'flex' : 'none') : '',
            // ...(__p(['hsec5_img_gallery_static','flex_param'],'row') !== 'row' ? pre_process()[1] : '')
        ],
        {
            createState:{
                stateName:'hsec5_img_gallery_static',
                state:{font:'40px',flex_param:'row',currentIndex:0}
            },
            mediaQuery:{
                query:[{size:'<850px',prop:{font:'30px',flex_param:'column'}}],
                defState:{font:'40px',flex_param:'row'}
            }
        }
    )
}

__SYD.hsec5_desktop_labels_comp = ({i = 0} = {}) =>{
    return __c(
        'div',
        {
            style:`display:flex;column-gap:20px;align-items:center;background:transparent;padding:20px;padding-right:20px;width:fit-content;cursor:pointer;`,
            onclick:`gall_func(${i})`,
            class:'double_thin_border'
        },
        [
            __SYD.iconify_30px({attr:data[i].ilabel,inject:'font-size:40px;min-height:40px;min-width:40px;color:#b99d75;'}),
            __c(
                'div',
                {
                    style:'display:flex;flex-direction:column;row-gap:10px;'
                },
                [
                    __SYD.text_lib_type_p_glob_vfit({cnt:data[i].main,w:'500',size:'16px',inject:'text-transform:capitalize;' , clr:'#fff'}),
                    __SYD.text_lib_type_p_glob_vfit({cnt:data[i].cnt,w:'300',size:'16px',inject:'text-transform:capitalize;' , clr:'#fff'}),
                ]
            )
        ]
    )
}

__SYD.hsec5_mobile_labels_comp = ({i = 0} = {}) =>{
    return __c(
        'div',
        {
            style:`display:flex;column-gap:20px;align-items:center;background:transparent;padding:20px;padding-right:20px;width:100%;cursor:pointer;position:relative;`,
            onclick:`gall_func(${i})`,
            class:'double_thin_border clickable_components_home'
        },
        [
            __SYD.iconify_30px({attr:data[i].ilabel,inject:'color:#b99d75;min-height:30px;min-width:30px'}),
            __c(
                'div',
                {
                    style:'display:flex;flex-direction:column;row-gap:10px;'
                },
                [
                    __SYD.text_lib_type_p_glob_vfit({clr:'#fff' , cnt:data[i].main,w:'500',size:'16px',inject:'text-transform:capitalize;'}),
                    __SYD.text_lib_type_p_glob_vfit({clr:'#fff' , cnt:data[i].cnt,w:'300',size:'16px',inject:'text-transform:capitalize;'}),
                ]
            ),
            __SYD.text_lib_type_h1_glob({cnt:__p(['hsec5_img_gallery_static','currentIndex'],0) === i ? '+' : '-' , size:'30px' , w:'700' , inject:'position:absolute;top:50%;transform:translateY(-50%);right:10px'})
        ],
        {
            // events:{
            //     onclick:() =>{
            //         console.log('hello world')
            //     }
            // }
        }
    )
}





//GALLERY COMPONENT, NEEDS THE PARENT COMPONENT NAME FOR RESIZING ITS COMPONENT
__SYD.gallery_feature_images_comp = (display) =>{
    return __c(
        'div',{
            style:`height:100%;min-height:fit-content;width:100%;padding:5px;display:${display};flex-direction:${__p(['hsec5_img_gallery_static','flex_param'],'row')};align-items:center;column-gap:10px;`,
        },
        [
            __SYD.gallery_feature_images_comp_child1(),
            __c(
                'div',
                {
                    style:`display:flex;min-height:fit-content;width:${__p(['hsec5_img_gallery_static','flex_param'],'row') === 'row' ? '70%' : '100%'};height:${__p(['hsec5_img_gallery_static','flex_param'],'row') === 'row' ? '70vw' : '140vw'};max-height:${__p(['hsec5_img_gallery_static','flex_param'],'row') === 'row' ? '600px' : '850px'};flex-direction:column;padding:10px;row-gap:10px`,
                },
                [
                    __SYD.gallery_feature_images_comp_child2(),
                    __c(
                        'div',
                        {
                            style:`min-height:${__p(['hsec5_img_gallery_static','flex_param'],'row') === 'row' ? '50%' : '70%'};width:100%;display:flex;flex-direction:${__p(['hsec5_img_gallery_static','flex_param'],'row')};padding:5px;column-gap:5px;max-height:700px;row-gap:10px;column-gap:10px`,
                        },
                        [
                            __SYD.gallery_feature_images_comp_child3('a4.webp'),
                            __SYD.gallery_feature_images_comp_child3('a5.JPG'),
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

__SYD.gallery_feature_images_comp_child1 = () =>{
    return __c(
        'div',
        {
            style:`height:70vw;width:${__p(['hsec5_img_gallery_static','flex_param'],'row') === 'row' ? '30%' : '70%'};min-width:250px;max-height:380px;background-position:center 0;background-image:url("../assets/a3.JPG");`+__sC['border-rad-15'](),
            class:'thin_border'
        },[],{genericStyle:['bg_cover']}
    )
}

__SYD.gallery_feature_images_comp_child2 = () =>{
    return __c(
        'div',
        {
            style:`min-height:${__p(['hsec5_img_gallery_static','flex_param'],'row') === 'row' ? '50%' : '33vw'};width:100%;background-position:center 0;background-image:url("../assets/a7.JPG");`+__sC['border-rad-15'](),
            class:'thin_border'
        },[],{genericStyle:['bg_cover']}
    )
}

__SYD.gallery_feature_images_comp_child3 = (img) =>{
    return __c(
        'div',
        {
            style:`height:100%;width:${__p(['hsec5_img_gallery_static','flex_param'],'row') === 'row' ? '50%' : '100%'};background-position:center 0;background-image:url("../assets/${img}");`+__sC['border-rad-15'](),
            class:'thin_border'
        },[],{genericStyle:['bg_cover']}
    )
}