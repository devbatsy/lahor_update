import { __SYD, __c , __p, __u ,__g, __v, __sC } from "../../sydneyLib/sydneyDom.js"
import "./icon.js"
import './text_lib.js'

__SYD.checkAvail_main_parent = () =>{
    return __c(
        'form',
        {
            style:`height:100%;min-height:fit-content;width:100%;max-width:${__p(['h_page_1_cont','flex'],true) ? 'fit-content' : '500px'};background:unset;display:flex;flex-direction:${__p(['h_page_1_cont','flex'],true) ? 'row' : 'column'};row-gap:10px;padding:10px;margin-bottom:30px;`,
            class:'double_thin_border',//thin_border,
            action:'/available_apartment',
            method:'post'
        },
        [
            __SYD.checkAvail_child_date({type:'in'}),
            __SYD.checkAvail_child_date({type:'out'}),
            __SYD.checkAvail_child_guest(),
            __SYD.checkAvail_child_button(),
        ],
        {
            createState:{
                stateName:'checkAvail_main_parent',
                state:{flex:true,in:'',out:''}
            },
            mediaQuery:{
                query:[{size:'<750px',prop:{flex:false}}],
                defState:{flex:true}
            },
            events:{
                onsubmit:(e) =>{
                    // e.preventDefault();

                    // console.log(document.querySelector('form').guestAmount)
                }
            }
        }
    )
}


__SYD.checkAvail_child_date = ({type}) =>{
    return __c(
        'div',{
            style:`min-height:80px;height:80px;width:100%;background:unset;flex:.3;padding:10px 30px;position:relative;display:flex;align-items:${__p(['h_page_1_cont','flex'],true) ? 'center' : 'flex-start'};flex-direction:column;row-gap:10px;z-index: 10;`,
            class:'thin_border'
        },
        [
            __c(
                'div',
                {style:'display:flex;column-gap:10px;padding:5px;width:fit-content;align-items:center;color:#fff'},
                [
                    __SYD.iconify_20px({attr:'fa-solid fa-calendar-days' , clr:'#fff'}),//<i class="fa-solid fa-calendar-days"></i>
                    __SYD.text_lib_type_p_glob_vmax({cnt:type === 'in'?'Check In':'Check out' , size:'14px' , clr:'inherit'})
                ]
            ),
            __c(
                'div',
                {
                    style:'display:flex;column-gap:10px;padding:5px;width:100%;align-items:center;justify-content:space-between;'
                },
                [
                    // __SYD.text_lib_type_p_glob_vmax({cnt:'DD-MM-YYYY' , size:'16px' , clr:'grey' , w:'700'}),
                    // __SYD.iconify_14px('down-arrow')
                    __SYD.checkAvail_child_date_panel(type)
                ]
            )
        ]
    )
}

__SYD.checkAvail_child_guest = () =>{
    return __c(
        'div',{
            style:`min-height:80px;height:80px;width:100%;background:unset;flex:.3;padding:10px 30px;position:relative;display:flex;align-items:${__p(['h_page_1_cont','flex'],true) ? 'center' : 'flex-start'};flex-direction:column;row-gap:10px;z-index: 10;`,
            class:'thin_border'
        },
        [
            __c(
                'div',
                {style:'display:flex;column-gap:10px;padding:5px;width:fit-content;align-items:center'},
                [
                    __SYD.iconify_20px({attr:'fa-solid fa-user-group' , clr:'#fff'}),//<i class="fa-solid fa-user-group"></i>
                    __SYD.text_lib_type_p_glob_vmax({cnt:'Guest' , clr:'#fff' , size:'15px'})
                ]
            ),
            __c(
                'div',
                {
                    style:'display:flex;column-gap:10px;padding:5px;width:100%;align-items:center;justify-content:space-between;position:relative;perspective:900px;outline:none',
                    tabindex:'0'
                },
                [
                    __SYD.text_lib_type_p_glob_vmax({cnt:`${__p(['checkAvail_child_guest','count'],'2')} Persons` , size:'17px' , clr:'#fff' , w:'700' , inject:'outline:none'}),
                    __c(
                        'input',
                        {
                            style:"display:none",
                            value:__p(['checkAvail_child_guest','count'],'2'),
                            name:'guestAmount'
                        }
                    ),
                    __SYD.iconify_14px({attr:'fa-solid fa-angle-down' , clr:'#fff'}),//<i class="fa-solid fa-angle-down"></i>
                    __SYD.checkAvail_child_guest_guestTab()
                ],
                {
                    type:'checkAvail_child_guest_guestTab_mini_parent',
                    events:{
                        onclick:() =>{
                            __v['checkAvail_child_guest_guestTab'].style.display = 'flex'
                        },
                        onmouseover:() =>{
                            __v['checkAvail_child_guest_guestTab'].style.display = 'flex';
                            __v['checkAvail_child_guest_guestTab_mini_parent'].focus()
                        },
                        onblur:() =>{
                            __v['checkAvail_child_guest_guestTab'].style.display = 'none'
                        }
                    }
                }
            )
        ],
        {
            createState:{
                stateName:'checkAvail_child_guest',
                state:{count:2,adult:1,children:1}
            }
        }
    )
}

__SYD.checkAvail_child_button = () =>{
    return __c(
        'button',{
            style:`min-height:${__p(['h_page_1_cont','flex'],true) ? '80px' : '80px'};height:100%;width:${__p(['h_page_1_cont','flex'],true) ? '100%' : '50%'};min-width:200px;flex:.5;align-self:center;display:flex;justify-content:center;align-items:center;padding:10px 15px;text-align:center;cursor:pointer;z-index: 10;background:unset`,
            class:'thin_border',
            type:'submit'
        },
        [
            __SYD.text_lib_type_p_glob_vfit({cnt:'Check availability' , size:'17px' , w:'700' , clr:'#fff'})
        ]
    )
}


__SYD.checkAvail_child_date_panel = (mode) =>{
    const date = new Date();
    let month = `${date.getMonth()+1}`;
    let day = `${date.getDate()}`.length < 2 ? `0${date.getDate()}` : date.getDate()
    month = month.length < 2 ? `0${month}` : month;
    return __c(
        'input',
        {
            style:'width:100%;font-size:16px;font-weight:700;color:grey;background:transparent;text-transform:uppercase;cursor:pointer;color:#fff',
            type:'date',
            min:`${date.getFullYear()}-${(month)}-${day}`,
            max:`${date.getFullYear()+1}-${month}-${day}`
        },[],
        {
            events:{
                onchange:(e) =>{
                    const state = __g('checkAvail_main_parent');
                    state[mode] = e.target.value;
                    __u('checkAvail_main_parent',{type:'a',value:state});
                    console.log(state[mode] , mode)
                }
            }
        }
    )
}

__SYD.checkAvail_child_guest_guestTab = () =>{
    return __c(
        'div',
        {
            style:`height:100px;width:200px;background:unset;position:absolute;top:${__p(['h_page_1_cont','flex'],true) ? 'calc(100% + 10px)' : 'calc(-100% - 20px)'};left:-30px;display:none;flex-direction:column;row-gap:15px;padding:10px;justify-content:center;background:#151719;z-index:100;`,
            class:'tab_drop_down_animate thin_border'
        },
        [
            __SYD.checkAvail_child_guest_guestTab_miniTab('adult'),
            __SYD.checkAvail_child_guest_guestTab_miniTab('children'),
        ],
        {
            type:'checkAvail_child_guest_guestTab'
        }
    )
}

__SYD.checkAvail_child_guest_guestTab_miniTab = (type) =>{
    return __c(
        'div',
        {
            style:'display:flex;column-gap:5px;text-transform:capitalize;padding:10px;justify-content:space-around'
        },[
            __SYD.text_lib_type_p_glob_vfit({cnt:type,size:'14px',w:'400' , clr:'#fff'}),
            __c(
                'div',
                {style:'display:flex;column-gap:5px;'},
                [
                    __SYD.checkAvail_child_guest_guestTab_miniTab_boxModel({cnt:'-',mode:type}),
                    __SYD.text_lib_type_p_glob_vfit({size:'14px',clr:'#fff',w:'700',cnt:`${__p(['checkAvail_child_guest',type],1)}`}),
                    __SYD.checkAvail_child_guest_guestTab_miniTab_boxModel({cnt:'+',mode:type}),
                ]
            )
        ]
    )
}

__SYD.checkAvail_child_guest_guestTab_miniTab_boxModel = ({clr = '#171717' , cnt = '' , mode = ''} = {}) =>{
    return __c(
        'div',
        {
            style:`height:18px;width:18px;background:${clr};display:flex;justify-content:center;align-items:center;cursor:pointer`
        },
        [
            __SYD.text_lib_type_p_glob_vfit({cnt:cnt,clr:'#fff',w:'700',size:'12px'})
        ],
        {
            events:{
                onclick:() =>{
                    // console.log(mode)
                    // console.log(cnt);
                    const state = __g('checkAvail_child_guest');
                    switch(cnt)
                    {
                        case '+':
                            state[mode]++;
                            if(state[mode] > 4){state[mode] = 4};
                        break;
                        case '-':
                            state[mode]--;
                            if(state[mode] < 1){state[mode] = 1}
                    }
                    state.count = state['children'] + state['adult'];
                    __u('checkAvail_child_guest',{type:'a',value:state})
                }
            }
        }
    )
}
//2024-03-15
// console.log(`${} , new Date() , new Date().getDate()`)