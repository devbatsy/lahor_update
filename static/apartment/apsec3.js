import { __SYD, __c, __g, __p, __sC, __u , __v} from "../../sydneyLib/sydneyDom.js"
import "../temps/text_lib.js"

__SYD.apsec3_book_tab_section = () =>{
    return __c(
        'form',
        {
            style:'height:fit-content;width:70%;max-width:800px;min-width:320px;display:flex;flex-direction:column;align-self:flex-end;row-gap:10px;border:3px solid #000;padding:20px 0;box-shadow:0 0 0px 1px #b99d75,0 0 0px 1px #b99d75 inset;margin-right:10px;'+__sC['border-rad-15'](),
            action:'/book_reservation',
            method:'post'
            // class:'thin_border'
        },
        [
            __c(
                'div',
                {
                    style:'height:fit-content;padding:0 10px;column-gap:10px;display:flex;flex-wrap:wrap;'
                },
                [
                    __c(
                        'div',
                        {
                            style:`display:flex;flex-direction:column;row-gap:10px;width:${__p(['apsec3_book_tab_section' , 'width'],'calc(50% - 10px)')};height:fit-content;padding:10px 0;min-width:250px;`
                        },
                        [
                            __SYD.text_lib_type_p_glob_vfit({cnt:'Check In', clr:'#b99d75' , w:'300' , size:'16px' , inject:'width:100%;text-align:center;width:fit-content;' , clr:'#fff'}),
                            __SYD.checkAvail_child_date_panel('in')
                        ]
                    ),
        
                    __c(
                        'div',
                        {
                            style:`display:flex;flex-direction:column;row-gap:10px;width:${__p(['apsec3_book_tab_section' , 'width'],'calc(50% - 10px)')};height:fit-content;padding:10px 0;min-width:250px;`
                        },
                        [
                            __SYD.text_lib_type_p_glob_vfit({cnt:'Check Out', clr:'#b99d75' , w:'300' , size:'16px' , inject:'width:100%;text-align:center;width:fit-content;' , clr:'#fff'}),
                            __SYD.checkAvail_child_date_panel('out')
                        ]
                    ),
        
                    __c(
                        'div',
                        {
                            style:`display:flex;flex-direction:column;row-gap:10px;width:${__p(['apsec3_book_tab_section' , 'width'],'calc(50% - 10px)')};height:fit-content;padding:10px 0;min-width:250px;position:relative;outline:none;perspective:900px;`,
                            tabindex:'0'
                        },
                        [
                            __SYD.text_lib_type_p_glob_vfit({cnt:'Guest', clr:'#b99d75' , w:'300' , size:'16px' , inject:'width:100%;text-align:center;width:fit-content;' , clr:'#fff'}),
                            __SYD.checkAvail_child_guest_guestTab(),
                            __c(
                                'input',
                                {
                                    style:'width:100%;font-size:16px;font-weight:700;color:#fff;background:transparent;text-transform:uppercase;cursor:pointer;color:#fff;padding:15px 20px;'+__sC['border-rad-7'](),
                                    class:'thin_border',
                                    readonly:'true',
                                    name:'guest_input',
                                    required:true,
                                    value:__p(['apsec3_book_tab_section','count'],2)
                                }
                            ),

                            //attach input for apartment name here

                            __c(
                                'input',
                                {
                                    style:'width:100%;font-size:16px;font-weight:700;color:#fff;background:transparent;text-transform:uppercase;cursor:pointer;color:#fff;padding:15px 20px;display:none;'+__sC['border-rad-7'](),
                                    name:'a_name',
                                    value:apartmentName
                                }
                            )
                        ],{
                            type:'apsec3_guest_tab_parent',
                            events:{
                                onclick:() =>{
                                    __v['checkAvail_child_guest_guestTab'].style.display = 'flex';
                                    __v['apsec3_guest_tab_parent'].focus()
                                },
                                // onmouseover:() =>{
                                //     __v['checkAvail_child_guest_guestTab'].style.display = 'flex';
                                //     __v['apsec3_guest_tab_parent'].focus()
                                // },
                                onblur:() =>{
                                    __v['checkAvail_child_guest_guestTab'].style.display = 'none'
                                }
                            }
                        }
                    ),
        
                    __c(
                        'div',
                        {
                            style:`display:flex;flex-direction:column;row-gap:10px;width:${__p(['apsec3_book_tab_section' , 'width'],'calc(50% - 10px)')};height:fit-content;padding:10px 0;min-width:250px;`
                        },
                        [
                            __SYD.text_lib_type_p_glob_vfit({cnt:'Rooms', clr:'#b99d75' , w:'300' , size:'16px' , inject:'width:100%;text-align:center;width:fit-content;' , clr:'#fff'}),
                            __c(
                                'input',
                                {
                                    style:'width:100%;font-size:16px;font-weight:700;color:#fff;background:transparent;text-transform:uppercase;cursor:pointer;color:#fff;padding:15px 20px;'+__sC['border-rad-7'](),
                                    type:'number',
                                    name:'room_number',
                                    class:'thin_border',
                                    required:true,
                                    min:1,
                                    max:4,
                                    // readonly:'true',
                                    value:1
                                }
                            )
                        ]
                    )
                ]
            ),

            __SYD.apsec3_book_now_btn()
        ],
        {
            createState:{
                stateName:'apsec3_book_tab_section',
                state:{width:'calc(50% - 10px)',count:2,adult:1,children:1,flex:true}
            },
            mediaQuery:{
                query:[{size:'<762px' , prop:{width:'100%' , flex:false}}],
                defState:{width:'calc(50% - 10px)' , flex:true}
            }
        }
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
            style:'width:100%;font-size:16px;font-weight:700;color:#fff;background:transparent;text-transform:uppercase;cursor:pointer;color:#fff;padding:15px 20px;'+__sC['border-rad-7'](),
            type:'date',
            min:`${date.getFullYear()}-${(month)}-${day}`,
            max:`${date.getFullYear()+1}-${month}-${day}`,
            name:`check_${mode}`,
            required:true,
            class:'thin_border'
        },[],
        {
            events:{
                // onchange:(e) =>{
                //     const state = __g('checkAvail_main_parent');
                //     state[mode] = e.target.value;
                //     __u('checkAvail_main_parent',{type:'a',value:state});
                //     console.log(state[mode] , mode)
                // }
            }
        }
    )
}

__SYD.checkAvail_child_guest_guestTab = () =>{
    return __c(
        'div',
        {
            style:`height:100px;width:200px;background:unset;position:absolute;top:calc(100% - 10px);left:-30px;display:none;flex-direction:column;row-gap:15px;padding:10px;justify-content:center;background:#151719;z-index:100;`,
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
                    __SYD.text_lib_type_p_glob_vfit({size:'14px',clr:'#fff',w:'700',cnt:`${__p(['apsec3_book_tab_section',type],1)}`}),
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
                    const state = __g('apsec3_book_tab_section');
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
                    __u('apsec3_book_tab_section',{type:'a',value:state})
                }
            }
        }
    )
}

__SYD.apsec3_book_now_btn = () =>{
    return __c(
        'button',
        {
            style:'padding: 15px 20px;height:fit-content;align-self:flex-start;margin-left:10px;cursor:pointer;background:transparent;'+__sC['border-rad-7'](),
            class:'thin_border',
            type:'submit'
        },
        [
            __SYD.text_lib_type_p_glob_vfit({cnt:'Book Now',size:'15px',w:'300',clr:'#fff'})
        ]
    )
}