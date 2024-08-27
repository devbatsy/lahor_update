import { __SYD  , __c, __p, __sC  , __g , __u} from "../../sydneyLib/sydneyDom.js";

import dataGrid from '../../blog.json' with { type: 'json' };
const mainData = Object.keys(dataGrid).map(val =>{return dataGrid[val]})

console.log(mainData)

// const mainData = [
//     {
//         title:'this is title one',
//         description:'some description',
//         img:['img.jpg' , 'img2.jpg'],
//         content_main_one:'content 1',
//         content_main_two:'content 2',
//         date:[]
//     }
// ];

__SYD.edit_blog_edit = () =>{

    const render_el = () =>{
        const element = [];

        __p(['edit_blog_edit' , 'mainData'],mainData).forEach((val,i) =>{
            // console.log()
            element.push(
                __SYD.edit_blog_child_main(i)
            )
        })

        return element
    }

    return __c(
        'div',
        {
            style:`height:100%;width:100%;display:${__p(['container' , 'renderMode'] , 'gallery') === 'blog' ? 'flex' : 'none'};padding:10px;padding-top:50px;flex-direction:column;row-gap:70px;position:relative;`,
        },
        [
            ...render_el()
        ],
        {
            mediaQuery:{
                query:[{size:'<600px' , prop:{media:true}}],
                defState:{media:false}
            },

            createState:{
                stateName:'edit_blog_edit',
                state:{media:false , img:[] , mainData:mainData , init_size:mainData.length}
            }   
        }
    )
}

__SYD.edit_blog_child_main = (i = 0) =>{
    return __c(
        'div',
        {
            style:'display:flex;flex-direction:column;row-gap:10px;width:100%;outline:1px dashed #171717;row-gap:10px;padding:10px;position:relative;',
            class:'blog_tabs'
        },
        [
            __SYD.text_lib_type_h1_glob({cnt:`Blog Slide ${i + 1}`, size:'20px' , inject:'font-family:Marcellus;font-weight:900;width:100%;text-align:left;color:#171717;'}),

            __SYD.input_edit_label_blog_name(i),
            __SYD.input_edit_label_blog_description(i),

            __c(
                'div',
                {
                    style:'display:flex;flex-direction:column;row-gap:10px;'
                },
                [
                    __SYD.text_lib_type_h1_glob({cnt:'Image Contents' , w:'700' , size:'20px'}),

                    __c(
                        'div',
                        {
                            style:'display:flex;column-gap:20px;row-gap:10px;flex-wrap:wrap;width:100%;padding:10px 0;'
                        },
                        [
                            __SYD.blog_images(i,0),
                            __SYD.blog_images(i,1),
                        ]
                    ),

                ]
            ),

            __SYD.text_edit_label_blog_textarea(i,0),
            __SYD.text_edit_label_blog_textarea(i,1),

            __c('p',
                {
                    style:'padding:10px;background:red;border-radius:15px;border-top-right-radius:0;font-size:10px;box-shadow:-1px 2px 3px #000;cursor:pointer;width:max-content;position:sticky;bottom:10px;left:10px;z-index:100;',
                    class:'hover_admin_text'
                },[`Delete Blog Post [${__p(['edit_blog_edit' , 'mainData'],mainData)[i].title}]`],
                {
                    events:{
                        onclick:() =>{
                            const state = __g('edit_blog_edit');
                            state.mainData.splice(i,1);
                            __u('edit_blog_edit' , {type:'a' , value:state});
                        }
                    }
                }
            )
        ]
    )
}



__SYD.input_edit_label_blog_name = (i) =>{
    return __c(
        'div',
        {
            style:'padding:10px 5px;;width:100%;position:relative;outline:1px dashed #171717;display:flex;flex-direction:column;row-gap:10px;'
        },
        [
            __SYD.text_lib_type_h1_glob({cnt:'Name' , w:'700' , size:'20px'}),
            __c(
                'input',
                {
                    style:'min-height:40px;width:100%;outline:none;border:1px solid #171717;max-width:500px;background:#171717;border:1px solid grey;font-size:14px;font-family:poppins;padding:10px 5px;color:grey;box-shadow:1px 2px 3px #000;',
                    placeholder:'Blog Title',
                    value:__p(['edit_blog_edit' , 'mainData'],mainData)[i].title,
                    readonly:true,
                },[],{
                    events:{
                        oninput:(e) =>{
                            const state = __g('edit_blog_edit');
                            state.mainData[i].title = e.target.value;
                            __u('edit_blog_edit' , {type:'a' , value:state})
                        }
                    }
                }
            ),

            __c(
                'i',
                {
                    style:'height:15px;width:15px;font-size:14px;background:grey;position:absolute;right:5px;bottom:5px;cursor:pointer;'
                },[],{
                    events:{
                        onclick:(e) =>{
                            const text_area_element = e.target.parentElement.querySelector('input');

                            text_area_element.getAttribute('readonly') === null ? text_area_element.setAttribute('readonly' , true) : text_area_element.removeAttribute('readonly')

                            text_area_element.style.color = text_area_element.getAttribute('readonly') === null ? '#fff' : 'grey'
                           
                        }
                    }
                }
            )
        ]
    )
}

__SYD.input_edit_label_blog_description = (i) =>{
    return __c(
        'div',
        {
            style:'padding:10px 5px;width:100%;position:relative;outline:1px dashed #171717;display:flex;flex-direction:column;row-gap:10px;'
        },
        [
            __SYD.text_lib_type_h1_glob({cnt:'Description' , w:'700' , size:'20px'}),
            __c(
                'textarea',
                {
                    style:'min-height:100px;width:100%;max-width:500px;outline:none;border:1px solid #171717;resize:vertical;background:#171717;border:1px solid grey;box-shadow:1px 2px 3px #000;color:grey;padding:10px;',
                    placeholder:'Blog Description',
                    readonly:true
                },[`${__p(['edit_blog_edit' , 'mainData'],mainData)[i].description}`],
                {
                    events:{
                        oninput:(e) =>{
                            const state = __g('edit_blog_edit');
                            state.mainData[i].description = e.target.value;
                            __u('edit_blog_edit' , {type:'a' , value:state})
                        }
                    }
                }
            ),

            __c(
                'i',
                {
                    style:'height:15px;width:15px;font-size:14px;background:grey;position:absolute;right:5px;bottom:5px;cursor:pointer;'
                },[],{
                    events:{
                        onclick:(e) =>{
                            const text_area_element = e.target.parentElement.querySelector('textarea');

                            text_area_element.getAttribute('readonly') === null ? text_area_element.setAttribute('readonly' , true) : text_area_element.removeAttribute('readonly')

                            text_area_element.style.color = text_area_element.getAttribute('readonly') === null ? '#fff' : 'grey'
                           
                        }
                    }
                }
            )
        ]
    )
}


__SYD.blog_images = (i,j) =>{
    return __c(
        'div',
        {
            style:`height:50vw;max-height:200px;min-height:150px;width:${__p(['edit_blog_edit' , 'media'],false) === false ? '200px' : 'calc(50% - 15px)'};min-width:150px;cursor:pointer;background-position:center 0;background-image:url("../assets/${__p(['edit_blog_edit' , 'mainData'],mainData)[i].img[j]}");position:relative`,
            class:'thin_border',
        },[

            __c('i',{style:'height:15px;width:15px;font-size:14px;background:grey;position:absolute;right:5px;top:5px;cursor:pointer;z-index:190;'},[],{events:{
                onclick:(e) =>{
                    const child = e.target.parentElement.querySelector('#blog_img_editor');
                    child.style.display = getComputedStyle(child).display === 'flex' ? 'none' : 'flex';

                    e.target.parentElement.focus();
                    // console.log(e.target.parentElement)

                }
            }}),

            __c(
                'div',
                {
                    style:'height:100%;width:100%;background:rgba(0,0,0,.8);display:none;flex-direction:column;row-gap:10px;z-index:100;justify-content:center;padding:10px;align-items:center;',
                    id:'blog_img_editor'
                },
                [
                    __c(
                        'div',
                        {
                            style:'display:flex;column-gap:10px;flex-wrap:wrap;width:100%;justify-content:center;row-gap:10px;'
                        },[
                            // __c(
                            //     'input',{style:'background:#151719;display:block;font-size:10px;font-family:poppins;padding:5px 5px;color:#fff;box-shadow:1px 2px 3px #000;width:80%;outline:1px solid grey;' , id:'editor_input',tabindex:'-1' , placeholder:'Image Name'},[]
                            // ),

                            __c(
                                'select',
                                {
                                    style:'background:#151719;display:block;font-size:10px;font-family:poppins;padding:5px 5px;color:#fff;box-shadow:1px 2px 3px #000;width:80%',
                                    // placeholder:'Enter image name',
                                    id:'blog_img_editor_img_type'
                                },[
                                    __c('option',{selected:true,style:'color:rgba(255,255,255,.3)'},['select img']),
                                    ...__p(['edit_blog_edit' , 'img'] , []).map(val =>{
                                        return __c('option',{},[val])
                                    })
                                ]
                            ),

                            __c('p',
                                {
                                    style:'padding:10px;background:#333;border-radius:15px;border-top-right-radius:0;font-size:10px;box-shadow:-1px 2px 3px #000;cursor:pointer;',
                                    class:'hover_admin_text'
                                },["Edit"],
                                {
                                    events:{
                                        onclick:(e) =>{
                                            // const newImageName = e.target.parentElement.querySelector('#editor_input').value;

                                            let newImageType = e.target.parentElement.querySelector('#blog_img_editor_img_type').value;

                                            // newImageType = newImageType === 'select img' ? '.jpg' : `.${newImageType}`;

                                            if(newImageType === 'select img')
                                            {
                                                alert('Please Select An Image')
                                            }else{
                                                // const img_name = `${newImageName}${newImageType}`;

                                                const state = __g('edit_blog_edit');
                                                state.mainData[i].img[j] = newImageType;
                                                __u('edit_blog_edit' , {type:'a' , value:state});
                                            }
                                            // console.log(newImageName , newImageType)
                                        }
                                    }
                                }
                            )
                        ]
                    ),

                    __c('p',
                        {
                            style:'padding:10px;background:red;border-radius:15px;border-top-right-radius:0;font-size:10px;box-shadow:-1px 2px 3px #000;cursor:pointer;width:max-content;',
                            class:'hover_admin_text'
                        },["Delete Image"],
                        {
                            events:{
                                onclick:() =>{
                                    const state = __g('edit_blog_edit');
                                    state.mainData[i].img[j] = '';
                                    __u('edit_blog_edit' , {type:'a' , value:state});
                                }
                            }
                        }
                    )
                ]
            )

        ],{genericStyle:['bg_cover']}
    )
}


__SYD.text_edit_label_blog_textarea = (i,j) =>{
    return __c(
        'div',
        {
            style:'padding:10px 5px;width:100%;position:relative;outline:1px dashed #171717;display:flex;flex-direction:column;row-gap:10px;'
        },
        [
            __SYD.text_lib_type_h1_glob({cnt:`Blog Content ${j+1}` , w:'700' , size:'20px'}),
            __c(
                'textarea',
                {
                    style:'min-height:200px;width:100%;outline:none;border:1px solid grey;box-shadow:1px 2px 3px #000;resize:vertical;background:#171717;padding:10px;color:grey',
                    placeholder:`Blog Content ${j+1}`,
                    readonly:true
                },
                [
                    j === 0 ? `${__p(['edit_blog_edit' , 'mainData'],mainData)[i].content_main_one}` : `${__p(['edit_blog_edit' , 'mainData'],mainData)[i].content_main_two}`
                ],{
                    events:{
                        oninput:(e) =>{
                            const state = __g('edit_blog_edit');
                            if(j === 0)
                            {
                                state.mainData[i].content_main_one = e.target.value;
                            }
                            else{
                                state.mainData[i].content_main_two = e.target.value;
                            }
                            __u('edit_blog_edit' , {type:'a' , value:state})
                        }
                    }
                }
            ),

            __c(
                'div',
                {
                    style:'width:100%;position:sticky;bottom:5px;display:flex;justify-content:space-between;padding:10px 5px;align-items:center;'
                },
                [
                    __c(
                        'i',
                        {
                            style:'height:15px;width:15px;font-size:14px;background:grey;cursor:pointer;'
                        },[],{
                            events:{
                                onclick:(e) =>{
                                    const text_area_element = e.target.parentElement.parentElement.querySelector('textarea');
        
                                    text_area_element.getAttribute('readonly') === null ? text_area_element.setAttribute('readonly' , true) : text_area_element.removeAttribute('readonly')
        
                                    text_area_element.style.color = text_area_element.getAttribute('readonly') === null ? '#fff' : 'grey'
                                   
                                }
                            }
                        }
                    ),
                ]
            )
        ]
    )
}