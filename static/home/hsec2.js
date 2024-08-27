import { __SYD, __c, __g, __p, __sC , __sS, __u} from "../../sydneyLib/sydneyDom.js"
import "../temps/text_lib.js"

__sS({
    nameTag:'counter_sec2_style',
    style:{
        height:'150px',
        width:'30%',
        minWidth:'250px',
        // background:'#fff',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        rowGap:'10px',
        cursor:"pointer",
        boxShadow:'none'
    }
})

let intervel_sec2_count;

__SYD.hsec2_increment_counter_parent = () =>{
    return __c(
        'div',
        {
            style:"display:flex;row-gap:25px;column-gap:25px;flex-wrap:wrap;justify-content:center;align-items:center;border-top:3px double #171717;margin-bottom:30px;padding:30px 10px;"
        },
        [
            __SYD.hsec2_increment_counter_counter({count:__p(['hsec2_increment_counter_parent','data'],[])[0] , label : 'luxury rooms'}),
            __SYD.hsec2_increment_counter_counter({count:__p(['hsec2_increment_counter_parent','data'],[])[1] , label : 'amenites'}),
            __SYD.hsec2_increment_counter_counter({count:__p(['hsec2_increment_counter_parent','data'],[])[2] , label : 'experience'}),
        ],
        {
            createState:{
                stateName:'hsec2_increment_counter_parent',
                state:{font_big:'50px',font_small:'20px',data:[0,0,0],grand:[10,15,3],init_count:() =>{
                    intervel_sec2_count = setInterval(() => {
                        const state = __g('hsec2_increment_counter_parent');
                        let finish = true;
                        state.grand.forEach((val,i) =>{
                            if(state.data[i] < val)
                            {
                                state.data[i]++;
                                finish = false
                            }
                        });
                        __u('hsec2_increment_counter_parent',{type:'a',value:state});

                        if(finish) clearInterval(intervel_sec2_count);

                    }, 100);
                }}
            },
            mediaQuery:{
                query:[{size:'<500px',prop:{font_big:'40px',font_small:'18px'}}],
                defState:{font_big:'50px',font_small:'20px'}
            }
        }
    )
}

__SYD.hsec2_increment_counter_counter = ({count = 0 , label = 'something'}) =>{
    return __c(
        'div',
        {
            style:__sC['counter_sec2_style'](),
            class:'counter_class double_thin_border'
        },
        [
            __SYD.text_lib_type_h1_glob({cnt:`${count}+`,size:__p(['hsec2_increment_counter_parent','font_big'],'50px'),w:'900',clr:'#b99d75'}),
            __SYD.text_lib_type_p_glob_vmax({cnt:label , clr:'#fff' ,size:__p(['hsec2_increment_counter_parent','font_small'],'20px') ,w:'700',inject:'text-transform:capitalize'})
        ]
    )
}

// setTimeout(() => {
    // __p(['hsec2_increment_counter_parent','init_count'],() =>{})();
// }, 1000);//called when we scroll into this section