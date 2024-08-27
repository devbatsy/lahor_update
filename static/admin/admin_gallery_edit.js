import { __SYD  , __c, __p, __sC  , __g , __u} from "../../sydneyLib/sydneyDom.js";
import dataGrid from '../../galleryImage.json' with { type: 'json' };

const mainData = dataGrid;

function render_aux()
{
    const obj = {};
    Object.keys(mainData).forEach(val =>{
        obj[val] = val
    })
    return obj;
}

const objectNames = Object.keys(mainData);

saveGallery = async() =>{
    const mediaData__edit = __p(['admin_gallery_edit_comp','mainData'],mainData);
    const objectNames__edit = __p(['admin_gallery_edit_comp','objectNames'],objectNames)
    const auxNames__edit = __p(['admin_gallery_edit_comp','auxNames'],{});
    const newObjectData = {};
    Object.keys(auxNames__edit).forEach(val =>{
        newObjectData[auxNames__edit[val]] = mainData[val]
    })

    const response = await fetch('/admin/update_gallery' , {
        method:'POST',
        body:JSON.stringify(newObjectData),
        headers:{
            "Content-Type": "application/json",
        }
    });

    const json_res = await response.json();

    switch(json_res.status)
    {
        case 'good':
            alert('data updated successful')
        break;
        default:
            alert('Data update failed')
    }
}


__SYD.admin_gallery_edit_comp = () =>{
    const render_temp_slider = () =>{
        const element = [];

        Object.keys(__p(['admin_gallery_edit_comp','mainData'],mainData)).forEach((val,index) =>{
            element.push(
                __SYD.gallery_slider_temp({type:val , index:index})
            )
        })
        return element
    }
    return __c(
        'div',
        {
            style:`height:100%;width:100%;display:${__p(['container' , 'renderMode'] , 'gallery') === 'gallery' ? 'flex' : 'none'};padding:10px;padding-top:50px;flex-direction:column;row-gap:50px;position:relative;`
        },
        [
            ...render_temp_slider()
        ],
        {
            createState:{
                stateName:'admin_gallery_edit_comp',
                state:{media:false , mainData:mainData , objectNames:objectNames , auxNames:render_aux() , init_size:Object.keys(mainData).length , img:[]}
            },
            mediaQuery:{
                query:[{size:'<600px' , prop:{media:true}}],
                defState:{media:false}
            }
        }
    )
}

__SYD.gallery_slider_temp = ({type,index}) =>{
    const render_temp_child = () =>{
        const element = [];

        __p(['admin_gallery_edit_comp','mainData'],mainData)[type].forEach((val,index) =>{
            element.push(
                __SYD.gallery_slider_temp_child({type:type , index:index})
            )
        })
        return element
    }

    // console.log(__p(['admin_gallery_edit_comp','mainData'],mainData)[type].length)
    return __c(
        'div',
        {
            style:`height:fit-content;width:100%;display:flex;row-gap:10px;padding:10px;flex-direction:column;justify-content:center;outline:1px dashed #171717;`,
            class:'gallery_sliders__'
        },
        [
            __c(
                'div',
                {
                    style:'background:#333;box-shadow:1px 2px 3px #000;border:1px solid grey;padding:10px;display:flex;flex-direction:column;row-gap:10px;width:fit-content;position:relative;z-index:200;' + __sC['border-rad-15']()
                },
                [
                    __SYD.text_lib_type_p_glob_vfit({cnt:`gallery slide ${index+1} (${__p(['admin_gallery_edit_comp','objectNames'],objectNames)[index]})` , w:'700' , size:'18px' , clr:'#fff' , inject:'font-family:monospace'}),
                    
                    __SYD.text_lib_type_p_glob_vfit({cnt:`Number of Images (${__p(['admin_gallery_edit_comp','mainData'],mainData)[Object.keys(__p(['admin_gallery_edit_comp','mainData'],mainData))[index]].length})` , w:'700' , size:'16px' , clr:'#fff' , inject:'font-family:monospace'}),

                    __SYD.text_lib_type_p_glob_vfit({cnt:`unique Images (${new Set(__p(['admin_gallery_edit_comp','mainData'],mainData)[Object.keys(__p(['admin_gallery_edit_comp','mainData'],mainData))[index]]).size})` , w:'700' , size:'16px' , clr:'#fff' , inject:'font-family:monospace'}),

                    __c(
                        'input',
                        {
                            style:'background:#171717;box-shadow:-1px 2px 3px #000;border:1px solid grey;display:none;font-size:14px;font-family:poppins;padding:10px 5px;color:#fff;position:absolute;top:calc(100% + 5px);left:0;box-shadow:1px 2px 3px #000;',
                            value:Object.keys(__p(['admin_gallery_edit_comp','mainData'],mainData))[index],
                            place_holder:'Enter Slide Name'
                        },
                        [],
                        {
                            events:{
                                oninput:(e) =>{
                                    // mainData[Object.keys(mainData)[index]] = mainData[];
                                    // Object.defineProperty(mainData ,e.target.value, Object.getOwnPropertyDescriptor(mainData , Object.keys(mainData)[index]));
                                    // delete mainData[Object.keys(mainData)[index]];
                                    const state = __g('admin_gallery_edit_comp');
                                    state.objectNames[index] = e.target.value;
                                    // state.auxNames[type] = state.auxNames[type] === undefined ? [] : state.auxNames[type]
                                    state.auxNames[type] = e.target.value
                                    // state.mainData[e.target.value] = state.mainData[type]
                                    // delete state.mainData[type];
                                    __u('admin_gallery_edit_comp' , {type:'a' , value:state});

                                    // console.log(ObjectNames)
                                }
                            }
                        }
                    ),

                    __c(
                        'i',
                        {
                            style:'height:15px;width:15px;font-size:14px;background:grey;position:absolute;right:5px;bottom:5px;cursor:pointer;',
                            class:"",
                        },[],{
                            events:{
                                onclick:(e) =>{
                                    const inputTarget = e.target.parentElement.querySelector('input');
                                    inputTarget.style.display = getComputedStyle(inputTarget).display === 'block' ? 'none' : 'block'
                                }
                            }
                        }
                    )
                ]
            ),
            __c(
                'div',
                {
                    style:'width:100%;display:flex;flex-wrap:wrap;column-gap:10px;row-gap:10px;justify-content:center;'
                },
                [
                    ...render_temp_child(),
                    __p(['admin_gallery_edit_comp','mainData'],mainData)[type].length < 4 ? __c(
                        'div',
                        {
                            style:`height:50vw;max-height:200px;min-height:150px;width:${__p(['admin_gallery_edit_comp' , 'media'],false) === false ? '200px' : 'calc(50% - 15px)'};min-width:150px;outline:1px dashed #171717;font-weight:900;font-size:50px;font-family:monospace;display:flex;justify-content:center;align-items:center;cursor:pointer;flex-direction:column;row-gap:10px;`
                        },[
                            
                            // __c(
                            //     'input',
                            //     {
                            //         style:'background:#151719;display:block;font-size:13px;font-family:poppins;padding:5px 5px;color:#fff;box-shadow:1px 2px 3px #000;width:80%',
                            //         placeholder:'Enter image name',
                            //         id:'img_name'
                            //     },[]
                            // ),

                            __c(
                                'select',
                                {
                                    style:'background:#151719;display:block;font-size:10px;font-family:poppins;padding:5px 5px;color:#fff;box-shadow:1px 2px 3px #000;width:80%',
                                    // placeholder:'Enter image name',
                                    id:'img_type'
                                },[
                                    __c('option',{selected:true,style:'color:rgba(255,255,255,.3)'},['select img']),
                                    ...__p(['admin_gallery_edit_comp' , 'img'] , []).map(val =>{
                                        return __c('option',{},[val])
                                    })
                                    // __c('option',{},['jpg']),
                                    // __c('option',{},['jpeg']),
                                    // __c('option',{},['png']),
                                ]
                            ),

                            __c(
                                'p',
                                {
                                    style:'padding:10px;background:#333;border-radius:15px;border-top-right-radius:0;font-size:14px;box-shadow:-1px 2px 3px #000;cursor:pointer;',
                                    class:'hover_admin_text'
                                },
                                [
                                    'Add Image'
                                ],
                                {
                                    events:{
                                        onclick:(e) =>{
                                            let imageType = e.target.parentElement.querySelector('#img_type')

                                            if(imageType.value === 'select img')
                                            {
                                                alert('Please Choose An Image');
                                            }else{
                                                const state = __g('admin_gallery_edit_comp');
                                                state.mainData[type].push(imageType.value);
                                                __u('admin_gallery_edit_comp' , {type:"a" , value:state})
                                            }
                                        
                                        }
                                    }
                                }
                            )

                        ]
                    ) : ''
                ]
            ),
        ]
    )
}

__SYD.gallery_slider_temp_child = ({type,index}) =>{
    return __c(
        'div',
        {
            style:`height:50vw;max-height:200px;min-height:150px;width:${__p(['admin_gallery_edit_comp' , 'media'],false) === false ? '200px' : 'calc(50% - 15px)'};min-width:150px;cursor:pointer;background-position:center 0;background-image:url("../assets/${__p(['admin_gallery_edit_comp','mainData'],mainData)[type][index]}");position:relative`,
            class:'thin_border',
            tabindex:'0'
        },[


            __c('i',{style:'height:15px;width:15px;font-size:14px;background:grey;position:absolute;right:5px;top:5px;cursor:pointer;z-index:190;'},[],{events:{
                onclick:(e) =>{
                    const child = e.target.parentElement.querySelector('#editor');
                    child.style.display = getComputedStyle(child).display === 'flex' ? 'none' : 'flex';

                    e.target.parentElement.focus();
                    // console.log(e.target.parentElement)

                }
            }}),

            __c(
                'div',
                {
                    style:'height:100%;width:100%;background:rgba(0,0,0,.8);display:none;flex-direction:column;row-gap:10px;z-index:100;justify-content:center;padding:10px;align-items:center;',
                    id:'editor'
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
                                    id:'editor_img_type'
                                },[
                                    __c('option',{selected:true,style:'color:rgba(255,255,255,.3)'},['select img']),
                                    ...__p(['admin_gallery_edit_comp' , 'img'] , []).map(val =>{
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

                                            let newImageType = e.target.parentElement.querySelector('#editor_img_type').value;

                                            // newImageType = newImageType === 'select img' ? '.jpg' : `.${newImageType}`;

                                            if(newImageType === 'select img')
                                            {
                                                alert('Please Select An Image')
                                            }else{
                                                // const img_name = `${newImageName}${newImageType}`;

                                                const state = __g('admin_gallery_edit_comp');
                                                state.mainData[type][index] = newImageType;
                                                __u('admin_gallery_edit_comp' , {type:'a' , value:state});
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
                                    const state = __g('admin_gallery_edit_comp');
                                    state.mainData[type].splice(index,1);
                                    __u('admin_gallery_edit_comp' , {type:'a' , value:state});
                                }
                            }
                        }
                    )
                ]
            )

        ],{
            genericStyle:['bg_cover'],
                type:'editor_parent'
        }
    )
}