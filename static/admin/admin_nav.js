import { __SYD, __c, __g, __p, __u }  from "../../sydneyLib/sydneyDom.js";

__SYD.admin_nav_comp = () =>{
    return __c(
        'div',
        {
            style:`height:100vh;width:30%;max-width:350px;min-width:250px;position:${__p(['admin_nav_comp' , 'media'],false) === false ? 'static' : 'absolute'};top:0;left:0;display:flex;flex-direction:column;column-gap:15px;row-gap:20px;align-items:flex-start;padding:20px 5px;background: #333;transform:translateX(${__p(['admin_nav_comp' , 'media'],false) === false ? 'calc(0% - 3px)' : (__p(['admin_nav_comp' , 'trans'],false) === false ? '-100%' : '0')});transition:transform linear .3s;z-index:999;`
        },
        [
            __c(
                'div',
                {
                    style:`min-height:30px;min-width:30px;background:green;position:absolute;top:10px;left:${__p(['admin_nav_comp' , 'trans'],false) === false ?  'calc(100% + 10px)' : 'calc(100% - 40px)'};transition:transform linear .5s;cursor:pointer;display:${__p(['admin_nav_comp' , 'media'],false) === false ? 'none' : 'block'}`
                },
                [],
                {
                    events:{
                        onclick:() =>{
                            const state = __g('admin_nav_comp');
                            state.trans = state.trans ? false : true;
                            __u('admin_nav_comp' , {type:'a' , value:state});
                        }
                    }
                }
            ),
            __SYD.admin_nav_main_selector({type:'gallery' , txt_content:'Edit gallery'}),
            __c('hr',{style:'height:1px;width:100%;background:lightgrey;'}),
            __SYD.admin_nav_main_selector({type:'apartment' , txt_content:'Edit apartment info'}),
            __c('hr',{style:'height:1px;width:100%;background:lightgrey;'}),
            __SYD.admin_nav_main_selector({type:'blog' , txt_content:'Edit blog info'}),
        ],
        {
            createState:{
                stateName:'admin_nav_comp',
                state:{trans:false , media:false}
            },
            mediaQuery:{
                query:[{size:'<600px' , prop:{media:true}}],
                defState:{media:false}
            }
        }
    )
}

__SYD.admin_nav_main_selector = ({type = '' , txt_content = ''} = {}) =>{
    return __c(
        'p',
        {
            style:`text-transform:capitalize;padding:15px 25px;font-weight:500;font-size:14px;cursor:pointer;color:${__p(['container' , 'renderMode'],'gallery') === type ? '#b99d75' : '#fff'};margin-left:10px;`,
            class:'hover_admin_text'
        },
        [
            txt_content
        ],
        {
            events:{
                onclick:() =>{
                    const state = __g('container');
                    state.renderMode = type;
                    __u('container' , {type:'a' , value:state});
                }
            }
        }
    )
}