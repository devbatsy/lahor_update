import { __SYD, __c, __g, __p, __sC, __u, getState } from "../../sydneyLib/sydneyDom.js";

let maxLength = 4;

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

let txC = generate_tx(maxLength);


const func = () => {
    const state1 = __g('move_simp_image_comp');
    const state2 = __g('parent_child_simp_image_comp');
    state2.tx = txC[state1.a_count];
    if(state1.a_count > 0){state2.scale = false}
    __u('parent_child_simp_image_comp',{type:"a",value:state2})

    setTimeout(() => {
        const state = getState('parent_child_simp_image_comp');
        state.scale = true;
        __u('parent_child_simp_image_comp',{type:"a",value:state})
    }, 300);
    state1.a_count++;
    if(state1.a_count > maxLength-1){state1.a_count = 0}
    __u('parent_child_simp_image_comp',{type:"a",value:state2})
    __u('move_simp_image_comp',{type:"a",value:state1})

}

const func_decrement = () => {
    const state1 = __g('move_simp_image_comp');
    const state2 = __g('parent_child_simp_image_comp');

    state1.a_count--;
    if(state1.a_count < 0){state1.a_count = maxLength-1}

    state2.tx = txC[state1.a_count];
    if(state1.a_count > 0){state2.scale = false}
    __u('parent_child_simp_image_comp',{type:"a",value:state2})

    setTimeout(() => {
        const state = getState('parent_child_simp_image_comp');
        state.scale = true;
        __u('parent_child_simp_image_comp',{type:"a",value:state})
    }, 100);
    

    __u('parent_child_simp_image_comp',{type:"a",value:state2})
    __u('move_simp_image_comp',{type:"a",value:state1})

}

__SYD.parent_child_simp_image_comp = () =>{
    const render_el = () =>{
        const array = [];
        for(let i = 0; i < maxLength; i++)
        {
            array.push(
                __SYD.child_simp_image_comp(i)
            )
        }
        return array;
    }
    return __c(
        'div',
        {
            style:'height:70vw;width:100%;max-width:1000px;min-width:250px;display:flex;column-gap:10px;align-items:center;position:relative;overflow:hidden;perspective:500px;'
        },
        [
            ...render_el(),
            __SYD.move_simp_image_comp()
        ],
        {
            createState:{
                stateName:'parent_child_simp_image_comp',
                state:{child:4,scale:true,children:[],tx:'-0% + 50px',animate:func}
            }
        }
    )
}

__SYD.child_simp_image_comp = (i) =>{
    let currentTx = __p(['parent_child_simp_image_comp','tx'],'-0% + 40px');
    let scale = __p(['parent_child_simp_image_comp','scale'],true);
    return __c(
        'div',
        {
            style:`height:80%;min-width:calc(100% - 100px);background-color:#fff;display:flex;align-items:center;transform: translateX(calc(${currentTx}));transition:transform linear .5s;z-index:${txC.indexOf(currentTx) == i ? 10 :4-i};background-image:;`+__sC['border-rad-15']()
        },
        [
            __c(
                'div',
                {
                    style:`height:${txC.indexOf(currentTx) == i && scale ? '100%' : '70%'};width:${txC.indexOf(currentTx) == i && scale ? '100%' : '80%'};background-image:url("../assets/img.jpg");transition:height linear .3s;`+__sC['border-rad-15']()
                },[],
                {
                    genericStyle:['bg_cover']
                }
            )
        ]
    )
}

__SYD.move_simp_image_comp = () =>{
    return __c(
        'div',
        {
            style:'height:10px;width:300px;position:absolute;bottom:0px;left:50%;transform:translateX(-50%);display:flex;column-gap:10px;justify-content:center;align-items:center'
        },
        [
            __SYD.move_child_simp_image_comp_sub(),
            __SYD.move_child_simp_image_comp_add(),
        ],
        {
            createState:{
                stateName:'move_simp_image_comp',
                state:{a_count:0}
            }
        }
    )
}

__SYD.move_child_simp_image_comp_add = () =>{
    return __c(
        'div',
        {
            style:'height:10px;width:50px;background:green'
        },
        [

        ],
        {   
            events:{
                onclick:func
            }
        }
    )
}

__SYD.move_child_simp_image_comp_sub = () =>{
    return __c(
        'div',
        {
            style:'height:10px;width:50px;background:green'
        },
        [

        ],
        {
            events:{
                onclick:func_decrement
            }
        }
    )
}

__SYD.move_child_simp_image_comp = (i) =>{
    let currentACount = __p(['move_simp_image_comp','a_count'],0)-1;
    currentACount = currentACount == -1 ? maxLength-1 : currentACount;

    return __c(
        'div',
        {style:`height:7px;width:${currentACount == i ? '15px' : '7px'};background:#171717;`},
        [
            
        ],
        {
            events:{
                onclick:() =>{
                    const state = getState('parent_child_simp_image_comp');
                    const state1 = __g('move_simp_image_comp')
                    state.tx = txC[i];
                    state1.a_count = i+1;
                    if(i > 0){state.scale = false}
                    __u('parent_child_simp_image_comp',{type:"a",value:state});
                    __u('move_simp_image_comp',{type:"a",value:state1})

                    setTimeout(() => {
                        const state = getState('parent_child_simp_image_comp');
                        state.scale = true;
                        __u('parent_child_simp_image_comp',{type:"a",value:state})
                    }, 300);
                }
            }
        }
    )
}

// setInterval(() => {
//     __p(['parent_child_simp_image_comp','animate'],()=>{})();
// }, 3000);