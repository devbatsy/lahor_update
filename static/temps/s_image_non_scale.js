import { __SYD, __c, __g, __p, __sC, __u, getState } from "../../sydneyLib/sydneyDom.js";
import dataGrid from '../../shortlets.json' with { type: 'json' };
const data_grid = Object.keys(dataGrid).map(val =>{return dataGrid[val]})

let maxLength = data_grid.length;

const generate_tx = (maxLength) =>{
    const array = [];
    for(let i = 0; i < maxLength; i++)
    {
        array.push(
            `-${i*100}% + 40px`
        )
    }
    return array;
}

let txC = generate_tx(maxLength)

const func = () => {
    console.log('came here in this section')
    const state1 = __g('move_s_non_scale_image_comp');
    const state2 = __g('parent_child_s_non_scale_image_comp');
    state2.tx = txC[state1.a_count];
    if(state1.a_count > 0){state2.scale = false}
    __u('parent_child_s_non_scale_image_comp',{type:"a",value:state2})

    setTimeout(() => {
        const state = getState('parent_child_s_non_scale_image_comp');
        state.scale = true;
        __u('parent_child_s_non_scale_image_comp',{type:"a",value:state})
    }, 300);
    state1.a_count++;
    if(state1.a_count > maxLength-1){state1.a_count = 0}
    __u('parent_child_s_non_scale_image_comp',{type:"a",value:state2})
    __u('move_s_non_scale_image_comp',{type:"a",value:state1})

}

__SYD.parent_child_s_non_scale_image_comp = () =>{
    const render_el = () =>{
        const array = [];
        for(let i = 0; i < maxLength; i++)
        {
            array.push(
                __SYD.child_s_non_scale_image_comp(i)
            )
        }
        return array;
    }
    return __c(
        'div',
        {
            style:'height:100%;width:100%;display:flex;column-gap:10px;align-items:center;position:relative;overflow:hidden;row-gap:10px'
        },
        [
            ...render_el()
            // __SYD.move_s_non_scale_image_comp()
        ],
        {
            createState:{
                stateName:'parent_child_s_non_scale_image_comp',
                state:{child:maxLength,scale:true,children:data_grid,tx:'-0% + 40px',animate:func
                }
            }
        }
    )
}

__SYD.child_s_non_scale_image_comp = (i) =>{
    // console.log(__p(['parent_child_s_non_scale_image_comp','children'],[]))
    let currentTx = __p(['parent_child_s_non_scale_image_comp','tx'],'-0% + 40px');
    let scale = __p(['parent_child_s_non_scale_image_comp','scale'],true);
    return __c(
        'a',
        {
            style:`height:100%;height:100%;min-width:calc(100% - 100px);display:flex;align-items:center;transform:translateX(calc(${currentTx}));transition:transform linear .${/*txC.indexOf(currentTx) == 0 ? '0' : */'5'}s;z-index:${txC.indexOf(currentTx) == i ? 10 :4-i};transform-style: preserve-3d;padding:10px;`,
            href:`/apartment/?type=${__p(['parent_child_s_non_scale_image_comp','children'],data_grid)[i].Name.split(' ').join('').toLowerCase()}`
        },
        [
            __c(
                'div',
                {
                    style:`height:${txC.indexOf(currentTx) == i && scale ? '80%' : '80%'};width:${txC.indexOf(currentTx) == i && scale ? '100%' : '80%'};position:relative;overflow:visible;text-transform:capitalize;background-image:url("../assets/${__p(['parent_child_s_non_scale_image_comp','children'],data_grid)[i].image[0]}");background-position:center 0;transition:height linear .3s , width linear .5s;`+__sC['border-rad-15'](),
                    class:'child_s_image_comp thin_border'
                },
                [
                    __c(
                        'div',
                        {
                            style:'position:absolute;bottom:0;height:130px;width:100%;display:flex;flex-direction:column;row-gap:10px;padding:10px;padding-left:20px;z-index: 15;justify-content:center;'
                        },
                        [
                            __SYD.text_lib_type_h1_glob({cnt:__p(['parent_child_s_non_scale_image_comp','children'],data_grid)[i].Name,clr:'#fff',size:'22px' , w:'700'}),
                            __c(
                                'div',//{style:'display:flex;column-gap:15px;flex-wrap:wrap;row-gap:5px;'}
                                {style:'display:flex;column-gap:15px;flex-wrap:wrap;row-gap:5px;'},
                                [
                                    __c('div',{style:'display:flex;column-gap:10px;align-items:center'},[
                                        __SYD.iconify_25px({attr:'fa-solid fa-person-pregnant' , clr:'#fff'}),
                                        __SYD.text_lib_type_p_glob_vmax({cnt:`${__p(['parent_child_s_non_scale_image_comp','children'],data_grid)[i].adult_num} Adults`,clr:'#fff',size:'13px'})
                                    ]),
                                    __c('div',{style:'display:flex;column-gap:10px;align-items:center'},[
                                        __SYD.iconify_25px({attr:'fa-solid fa-children' , clr:'#fff'}),
                                        __SYD.text_lib_type_p_glob_vmax({cnt:`${__p(['parent_child_s_non_scale_image_comp','children'],data_grid)[i].child_num} children`,clr:'#fff',size:'13px'})
                                    ]),
                                    __c('div',{style:'display:flex;column-gap:10px;align-items:center'},[
                                        __SYD.iconify_25px({attr:'fa-solid fa-expand' , clr:'#fff'}),
                                        __SYD.text_lib_type_p_glob_vmax({cnt:`${__p(['parent_child_s_non_scale_image_comp','children'],data_grid)[i].area_size}ft`,clr:'#fff',size:'13px'})
                                    ]),
                                ]
                            )
                        ]
                    ),
                    __SYD.text_lib_type_p_glob_vfit({cnt:'price/mon',clr:'#fff',size:'14px',inject:'padding:10px;background:rgba(0,0,0,.2);position:absolute;top:10px;right:10px'})
                ],
                {
                    genericStyle:['bg_cover'],
                }
            )
        ],
        {
            events:{
                onclick:() =>{
                    const state = getState('parent_child_s_non_scale_image_comp');
                    const state1 = __g('move_s_non_scale_image_comp')
                    state.tx = txC[i];
                    state1.a_count = i+1;
                    if(i > 0){state.scale = false}
                    __u('parent_child_s_non_scale_image_comp',{type:"a",value:state});
                    __u('move_s_non_scale_image_comp',{type:"a",value:state1})

                    setTimeout(() => {
                        const state = getState('parent_child_s_non_scale_image_comp');
                        state.scale = true;
                        __u('parent_child_s_non_scale_image_comp',{type:"a",value:state})
                    }, 300);
                }
            }
        }
    )
}

__SYD.move_s_non_scale_image_comp = () =>{
    const render_el = () =>{
        const array = [];
        for(let i = 0; i < maxLength; i++)
        {
            array.push(
                __SYD.move_child_s_non_scale_image_comp(i)
            )
        }
        return array;
    }
    return __c(
        'div',
        {
            style:'height:10px;width:300px;position:absolute;bottom:5px;left:50%;transform:translateX(-50%);display:flex;column-gap:10px;justify-content:center;align-items:center;'
        },
        [
            ...render_el()
        ],
        {
            createState:{
                stateName:'move_s_non_scale_image_comp',
                state:{a_count:0}
            }
        }
    )
}

__SYD.move_child_s_non_scale_image_comp = (i) =>{
    let currentACount = __p(['move_s_non_scale_image_comp','a_count'],0)-1;
    currentACount = currentACount == -1 ? maxLength-1 : currentACount;

    return __c(
        'div',
        {style:`border-radius:15px;height:9px;cursor:pointer;width:${currentACount == i ? '18px' : '9px'};background:#b99d75;`},
        [
            
        ],
        {
            events:{
                onclick:() =>{
                    const state = getState('parent_child_s_non_scale_image_comp');
                    const state1 = __g('move_s_non_scale_image_comp')
                    state.tx = txC[i];
                    state1.a_count = i+1;
                    if(i > 0){state.scale = false}
                    __u('parent_child_s_non_scale_image_comp',{type:"a",value:state});
                    __u('move_s_non_scale_image_comp',{type:"a",value:state1})

                    setTimeout(() => {
                        const state = getState('parent_child_s_non_scale_image_comp');
                        state.scale = true;
                        __u('parent_child_s_non_scale_image_comp',{type:"a",value:state})
                    }, 300);
                }
            }
        }
    )
}

// setInterval(() => {
//     __p(['parent_child_s_non_scale_image_comp','animate'],()=>{})();
// }, 3000);