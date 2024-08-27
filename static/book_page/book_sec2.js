import { __SYD, __c, __g, __p, __sC, __u } from "../../sydneyLib/sydneyDom.js"

__SYD.book_sec_2_info_comp = () =>{
    return __c(
        'div',
        {
            style:__sC['hsec3_video_container']({method:'add',style:{rowGap:'50px',background:'transparent',flexDirection:'row-reverse',justifyContent:'center',alignItems:'flex-start',flexWrap:'wrap',columnGap:'60px'}})
        },
        [
            // __SYD.book_sec_2_info_img_comp(),
            __SYD.book_sec_2_info_inputs_comp()
        ],
        {
            createState:{
                stateName:'book_sec_2_info_comp',
                state:{font:'40px'}
            },
            mediaQuery:{
                query:[{size:'<841px',prop:{font:'30px'}}],
                defState:{font:'40px'}
            }
        }
    )
}

__SYD.book_sec_2_info_img_comp = () =>{
    return __c(
        'div',
        {
            style:`height:80vw;max-height:500px;min-height:400px;min-width:300px;position:relative;overflow:hidden;width:${__p(['book_sec_2_info_comp','font'],'40px') === '40px' ? 'calc(60% - 37.5px)' : '80%'};background-position:center 0;background-image:url("../assets/img.jpg")`,
            class:'thin_border'
        },[],{genericStyle:['bg_cover']}
    )
}

__SYD.book_sec_2_info_inputs_comp = () =>{
    return __c(
        'div',
        {
            style:`width:${__p(['book_sec_2_info_comp','font'],'40px') === '40px' ? '100%' : '80%'};max-width:500px;height:fit-content;min-height:300px;min-width:300px;text-align:center;` + __sC['page3FloatText']({method:'add',style:{justifyContent:'flex-start',padding:__p(['book_sec_2_info_comp','font'],'40px') === '40px' ? '50px' : '25px',rowGap:'30px',}}),
            class:'thin_border'
        },
        [
            __SYD.text_lib_type_p_glob_vfit({cnt:'Additional Info',clr:'#b99d75' , w:'500' , size:'14px'}),

            __SYD.text_lib_type_h1_glob({cnt:'Book A Reservation', clr:'#fff' , size:__p(['book_sec_2_info_comp','font'],'40px') === '40px' ? '30px' : '20px' , inject:'width:100%;'}),

            __SYD.text_lib_type_p_glob_vfit({cnt:'Send Us A Direct Email To Place A Reservation.', clr:'#b99d75' , w:'500' , size:'14px' , inject:'width:100%;text-align:center;' , clr:'#fff'}),

            __c(
                'form',
                {
                    style:'width:100%;display:flex;flex-direction:column;row-gap:15px;align-items:center',
                    action:'/send_book_msg',
                    method:'post'
                },
                [
                    __SYD.input_type_text({_name:'username' , ph:'Your Name' , inject:'font-size:15px;width:100%;height:50px;color:#fff;' , cls:'thin_border input_place_holder_style'}),

                    __SYD.input_type_text({_name:'email' , ph:'Your Email' , inject:'font-size:15px;width:100%;height:50px;color:#fff;' , cls:'thin_border input_place_holder_style'}),

                    __SYD.input_type_text({_name:'phone' , type:'number' , ph:'Your Phone Number ( whatsapp contact )' , inject:'font-size:15px;width:100%;height:50px;color:#fff;' , cls:'thin_border input_place_holder_style'}),

                    // __SYD.textArea_type_text({ph:'' , inject:'font-size:15px;width:100%;height:50px;color:#fff;resize: vertical;min-height:100px;' , cls:'thin_border input_place_holder_style'}),

                    __SYD.button_model_type_form({cnt:'Book Now' , inject:'background:#b99d75'})
                ],
                {
                    events:{
                        onsubmit:async (e) =>{
                            e.preventDefault()
                            document.querySelector('form').getElementsByTagName('button')[0].disabled = true
                            const username = document.querySelector('form').username.value;
                            const email = document.querySelector('form').email.value;
                            const phone = document.querySelector('form').phone.value;

                            book_info_string = `${book_info_string} , ${username} , ${email} , ${phone}`;

                            const dataObject = {}
                            const labels = ['apartmentName' , 'check_in' , 'check_out' , 'guest' , 'room' , 'username' , 'email' , 'phone']

                            book_info_string.split(' , ').forEach((val,id) =>{
                                dataObject[labels[id]] = val;
                            })

                            const response = await fetch(document.querySelector('form').action , {
                                method:'POST',
                                body:JSON.stringify(dataObject),
                                headers:{
                                    "Content-Type": "application/json",
                                }
                            });

                            const json_res = await response.json();

                            document.querySelector('form').getElementsByTagName('button')[0].disabled = false

                            switch(json_res.status)
                            {
                                case 'good':
                                    console.log('booking successful')
                                break;
                                default:
                                    console.log('booking not successful')
                            }

                        }
                    }
                }
            )
        ]
    )
} 