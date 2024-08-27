import{ __SYD, __c, __m, __sC, __sS , __p, __g, __u, __v} from "../../sydneyLib/sydneyDom.js"
import "../temps/s_image.js"
import "../temps/s_simp_img.js"
import "../temps/gallary_grid.js"
import "../temps/styCom.js"
import "../temps/checkAvail.js"
import "../temps/footer.js"
import "../temps/testimonial.js"
import "../temps/navbar.js"
import "../temps/s_image_non_scale.js"
import "../temps/inputsLib.js"
import "../temps/text_lib.js"
import "./admin_nav.js"
import "./admin_gallery_edit.js"
import "./admin_apart_edit.js"
import "./admin_blog_edit.js"
import "./socketFile.js"

__SYD.container = () =>{
    return __c(
        'div',
        {
            style:__sC['container']({method:"add" , style:{rowGap:'30px',background:'#fff' , color:'#171717' , flexDirection:'row' , rowGap:'10px' , fontFamily:'poppins' , overflow:'hidden'}})
        },
        [
            __SYD.admin_nav_comp(),

            __SYD.text_lib_type_h1_glob({cnt:`LAHOR ${__p(['container' , 'renderMode'],'gallery').toUpperCase()} EDITOR`, size:'30px' , inject:'font-family:Marcellus;font-weight:900;width:100%;text-align:center;color:#b99d75;position:absolute;top:0px;left:0;line-height:60px;z-index:200;background:#333;z-index:300;'}) ,

            __c(
                'div',
                {
                    style:`padding:10px;background:#0be10a;position:absolute;top:110px;right:15px;z-index:200;border-radius:15px;border-top-right-radius:0;font-size:12px;box-shadow:-1px 2px 3px #000;cursor:pointer;display:${__p(['container' , 'renderMode'],'gallery') === 'gallery' ? 'block' : 'none'}`,
                    class:'hover_admin_text'
                },
                [
                    'Add gallery slide +'
                ],
                {
                    events:{
                        onclick:() =>{
                            const state = __g('admin_gallery_edit_comp');
                            const slideName = `default name ${Object.keys(state.mainData).length - state.init_size}`
                            state.mainData[slideName] = [];//Math.floor(Math.random()*(100 - Object.keys(state.mainData).length) + Object.keys(state.mainData).length)
                            state.objectNames.push(slideName);
                            state.auxNames[slideName] = slideName;
                            __u('admin_gallery_edit_comp' , {type:'a' , value:state});

                            const sliders = __v['admin_gallery_edit_comp'].querySelectorAll('.gallery_sliders__');

                            sliders[sliders.length-1].scrollIntoView()
                        }
                    }
                }
            ),

            __c(
                'p',
                {
                    style:`padding:10px;background:#67aaf1;position:absolute;top:155px;right:15px;z-index:200;border-radius:15px;border-top-right-radius:0;font-size:12px;box-shadow:-1px 2px 3px #000;cursor:pointer;display:${__p(['container' , 'renderMode'],'gallery') === 'gallery' ? 'block' : 'none'}`,
                    class:'hover_admin_text',
                    onclick:'saveGallery()'
                },
                [
                    'Save Gallery'
                ]
            ),

            __c(
                'div',
                {
                    style:`padding:10px;background:#0be10a;position:absolute;top:110px;right:15px;z-index:200;border-radius:15px;border-top-right-radius:0;font-size:12px;box-shadow:-1px 2px 3px #000;cursor:pointer;display:${__p(['container' , 'renderMode'],'gallery') === 'apartment' ? 'block' : 'none'}`,
                    class:'hover_admin_text'
                },
                [
                    'Add Apartment +'
                ],
                {
                    events:{
                        onclick:() =>{
                            const state = __g('edit_apartment_edit');
                            state.mainData.push(
                                {
                                    "Name":`default name ${Object.keys(state.mainData).length - state.init_size < 0 ? 0 : Object.keys(state.mainData).length - state.init_size}`,
                                    "image":['' , ''],
                                    "description":"",
                                    "main_content":'',
                                    "features":["dance" , "light" , "wifi" , "game"],
                                    "price_per_day":'',
                                    "adult_num":"0",
                                    "child_num":"0"
                                }
                            )

                            __u('edit_apartment_edit' , {type:'a' , value:state})//apartment_tabs

                            const sliders = document.querySelectorAll('.apartment_tabs');

                            sliders[sliders.length-1].scrollIntoView()
                        }
                    }
                }
            ),

            __c(
                'div',
                {
                    style:`padding:10px;background:#67aaf1;position:absolute;top:155px;right:15px;z-index:200;border-radius:15px;border-top-right-radius:0;font-size:12px;box-shadow:-1px 2px 3px #000;cursor:pointer;display:${__p(['container' , 'renderMode'],'gallery') === 'apartment' ? 'block' : 'none'}`,
                    class:'hover_admin_text'
                },
                [
                    'Save Apartments'
                ],
                {
                    events:{
                        onclick:async () =>{
                            const arrayName = __p(['edit_apartment_edit' , 'mainData'],[]);
                            const sendObject = {};

                            arrayName.forEach(val =>{
                                sendObject[val.Name.split(' ').join('').toLowerCase()] = val
                            })

                            // console.log(sendObject);

                            const response = await fetch('/admin/update_apartment' , {
                                method:'POST',
                                body:JSON.stringify(sendObject),
                                headers:{
                                    "Content-Type": "application/json",
                                }
                            });
                        
                            const json_res = await response.json();
                        
                            switch(json_res.status)
                            {
                                case 'good':
                                    alert('Apartment Data Updated successfully!')
                                break;
                                default:
                                    alert('Data update failed')
                            }
                        }
                    }
                }
            ),

            __c(
                'div',
                {
                    style:`padding:10px;background:#0be10a;position:absolute;top:110px;right:15px;z-index:200;border-radius:15px;border-top-right-radius:0;font-size:12px;box-shadow:-1px 2px 3px #000;cursor:pointer;display:${__p(['container' , 'renderMode'],'gallery') === 'blog' ? 'block' : 'none'}`,
                    class:'hover_admin_text'
                },
                [
                    'Add Blog Post +'
                ],
                {
                    events:{
                        onclick:() =>{
                            const state = __g('edit_blog_edit');
                            state.mainData.push(
                                {
                                    title:'',
                                    description:'',
                                    img:['' , ''],
                                    content_main_one:'',
                                    content_main_two:'',
                                    date:[]
                                }
                            )
                            __u('edit_blog_edit' , {type:'a' , value:state});

                            const sliders = document.querySelectorAll('.blog_tabs');

                            sliders[sliders.length-1].scrollIntoView()
                        }
                    }
                }
            ),

            __c(
                'div',
                {
                    style:`padding:10px;background:#67aaf1;position:absolute;top:155px;right:15px;z-index:200;border-radius:15px;border-top-right-radius:0;font-size:12px;box-shadow:-1px 2px 3px #000;cursor:pointer;display:${__p(['container' , 'renderMode'],'gallery') === 'blog' ? 'block' : 'none'}`,
                    class:'hover_admin_text'
                },
                [
                    'Save Blogs'
                ],
                {
                    events:{
                        onclick:async() =>{
                            const currentData = __p(['edit_blog_edit' , 'mainData']);
                            const sendObject = {}
                            const date = new Date();
                            const mon = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'][date.getMonth()];
                            const day = date.getDate()
                            currentData.forEach((val,id) =>{
                                if(val.date.length === 0)
                                {
                                    currentData[id].date[0] = mon
                                    currentData[id].date[1] = day
                                }
                            })

                            currentData.forEach(val =>{
                                sendObject[val.title.split(' ').join('').toLowerCase()] = val
                            })

                            
                            const response = await fetch('/admin/update_blog' , {
                                method:'POST',
                                body:JSON.stringify(sendObject),
                                headers:{
                                    "Content-Type": "application/json",
                                }
                            });
                        
                            const json_res = await response.json();
                        
                            switch(json_res.status)
                            {
                                case 'good':
                                    alert('Blog Data Updated Successfully!')
                                break;
                                default:
                                    alert('Data update failed')
                            }
                        }
                    }
                }
            ),

            __c('div',{style:'height:100vh;width:100%;background:#fff;overflow:scroll;position:relative;padding-top:130px;'},[
                __SYD.admin_gallery_edit_comp(),
                __SYD.edit_apartment_edit(),
                __SYD.edit_blog_edit()
            ])


        ],
        {
            createState:{
                stateName:'container',
                state:{renderMode:'gallery'}
            }
        }
    )
}

__m(__SYD.container());
