import { __SYD, __c, __g, __p, __sC, __u, getState } from "../../sydneyLib/sydneyDom.js";

let txC = ['-0%','-100%','-200%','-300%'];

let intervel_sec2_count;

const content = [
    {
        title:'Name Surname',
        img:'img.jpg',
        add:'my Address',
        testimony:`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis labore quia animi aspernatur molestiae qui, repellat, quidem et, quasi minima autem! Nulla deserunt, eos veritatis nam accusantium optio et debitis!
    Commodi dolore excepturi nulla architecto, cupiditate incidunt quidem, ratione officia, rem at deleniti laborum laudantium nihil sequi? Quis ratione dolorum adipisci, officia ipsum saepe fugiat, nobis quam necessitatibus perferendis alias.`
    }
]

const func = () => {
    const state1 = __g('move_testimonial_image_comp');
    const state2 = __g('parent_child_testimonial_image_comp');
    state2.tx = txC[state1.a_count];
    if(state1.a_count > 0){state2.scale = false}
    __u('parent_child_testimonial_image_comp',{type:"a",value:state2});

    state1.a_count++;
    if(state1.a_count > 3){state1.a_count = 0}
    __u('parent_child_testimonial_image_comp',{type:"a",value:state2})
    __u('move_testimonial_image_comp',{type:"a",value:state1})

}

__SYD.parent_child_testimonial_image_comp = () =>{
    return __c(
        'div',
        {
            style:'height:400px;width:80%;display:flex;align-items:center;position:relative;overflow:hidden;perspective:500px;user-select:none'
        },
        [
            __SYD.child_testimonial_image_comp(0),
            __SYD.child_testimonial_image_comp(1),
            __SYD.child_testimonial_image_comp(2),
            __SYD.child_testimonial_image_comp(3),
            __SYD.move_testimonial_image_comp()
        ],
        {
            createState:{
                stateName:'parent_child_testimonial_image_comp',
                state:{child:4,scale:false,children:[],tx:'-0%',animate:func,width_scale:true,}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{width_scale:false}}],
                defState:{width_scale:true}
            }
        }
    )
}

__SYD.child_testimonial_image_comp = (i) =>{
    let currentTx = __p(['parent_child_testimonial_image_comp','tx'],'-0%');
    let scale = __p(['parent_child_testimonial_image_comp','scale'],false);
    return __c(
        'div',
        {
            style:`min-width:${__p(['hsec7_tetimonial_temp_comp','width_scale'],true) ? '50%' : '100%'};height:fit-content;min-height:max(80% , 350px);background:unset;display:block;transform:translateX(calc(${currentTx}));transition:transform linear .3s;z-index:${txC.indexOf(currentTx) == i ? 10 :4-i};transform-style: preserve-3d;padding:10px;`
        },
        [
            __c(
                'div',
                {
                    style:__sC['border-rad-25']()+'background:#53624e;height:100%;width:100%;display:flex;flex-direction:column;padding:10px;row-gap:10px;border-top-left-radius:0px;border-bottom-right-radius:0px;'
                },
                [
                    __SYD.text_lib_type_p_glob_vfit({clr:'#fff',cnt:content[0].testimony,size:`${__p(['hsec7_tetimonial_temp_comp','width_scale'],true) ? '14' :'12'}px`,inject:`line-height:${__p(['hsec7_tetimonial_temp_comp','width_scale'],true) ? '20px' : '15px'};display:flex;align-items:center;height:70%;width:100%;padding:0 15px`}),
                    __c(
                        'div',
                        {
                            style:'height:30%;width:100%;display:flex;justify-content:flex-start;align-items:center;column-gap:30px;padding:10px;padding:left:20px;'
                        },
                        [
                            __SYD.iconify_png_50px({attr:'img.jpg',inject:'max-height:50px;border-radius:50%;'}),
                            __c(
                                'div',
                                {
                                    style:"display:flex;flex-direction:column;row-gap:10px"
                                },
                                [
                                    __SYD.text_lib_type_p_glob_vfit({cnt:content[0].title,w:'700', clr:'#fff' , size:'14px'}),
                                    __SYD.text_lib_type_p_glob_vfit({cnt:content[0].add, clr:'#fff' , size:'14px'}),
                                ]
                            )
                        ]
                    )
                ]
            )
        ]
    )
}

__SYD.move_testimonial_image_comp = () =>{
    return __c(
        'div',
        {
            style:'height:10px;width:300px;position:absolute;bottom:0px;left:50%;transform:translateX(-50%);display:flex;column-gap:10px;justify-content:center;align-items:center'
        },
        [
            __SYD.move_child_testimonial_image_comp(0),
            __SYD.move_child_testimonial_image_comp(1),
            __SYD.move_child_testimonial_image_comp(2),
            __SYD.move_child_testimonial_image_comp(3),
        ],
        {
            createState:{
                stateName:'move_testimonial_image_comp',
                state:{a_count:0}
            }
        }
    )
}

__SYD.move_child_testimonial_image_comp = (i) =>{
    let currentACount = __p(['move_testimonial_image_comp','a_count'],0)-1;
    currentACount = currentACount == -1 ? 3 : currentACount;

    return __c(
        'div',
        {style:`cursor:pointer;height:9px;border-radius:10px;width:${currentACount == i ? '20px' : '9px'};background:#fff;`},
        [
            
        ],
        {
            events:{
                onclick:() =>{
                    const state = getState('parent_child_testimonial_image_comp');
                    const state1 = __g('move_testimonial_image_comp')
                    state.tx = txC[i];
                    state1.a_count = i+1;
                    if(i > 0){state.scale = false}
                    __u('parent_child_testimonial_image_comp',{type:"a",value:state});
                    __u('move_testimonial_image_comp',{type:"a",value:state1})
                }
            }
        }
    )
}

// setInterval(() => {
//     __p(['parent_child_testimonial_image_comp','animate'],()=>{})();
// }, 3000);