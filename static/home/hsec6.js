import {
    createElement,
    sydDOM,
    preState,
    setStyle,
    styleComponent,
    __sC,
    __c,
} from '../../sydneyLib/sydneyDom.js'

sydDOM.hsec6_text_img_array = () =>{
    return createElement(
        'div',
        {
            style:styleComponent.body1({
                method:'add',style:{rowGap:'80px',height:'fit-content',background:'transparent',paddingTop:'80px',paddingBottom:'20px'}
            })
        },
        [
            sydDOM.page3_child1({content:'Discover the essence of luxury intertwined with coastal charm at Whitefield Luxury Apartments. Perched along the picturesque shoreline, our accommodations offer more than just stunning ocean vistas; we provide an immersive experience into the rhythm of the sea.' , title:'Ocean View' , align:'left' , img:'a1.JPG'}),
            sydDOM.page3_child1({content:'Step into a world where luxury meets authenticity at Whitefield Luxury Apartments. Book your stay today and immerse yourself in the rich tapestry of coastal living, where every moment is infused with the allure of the sea and the promise of unforgettable experiences.' , title:'Sea Port Tour' , align:'right' , img:'a6.JPG'}),
            // sydDOM.page3_child1({content:'Step into a world where luxury meets authenticity at Whitefield Luxury Apartments. Book your stay today and immerse yourself in the rich tapestry of coastal living, where every moment is infused with the allure of the sea and the promise of unforgettable experiences.' , title:'Sea Port Tour' , align:'left'}),
            // sydDOM.page3_child1({content:'Step into a world where luxury meets authenticity at Whitefield Luxury Apartments. Book your stay today and immerse yourself in the rich tapestry of coastal living, where every moment is infused with the allure of the sea and the promise of unforgettable experiences.' , title:'Sea Port Tour' , align:'right'}),
            // createElement(
            //     'div',
            //     {
            //         style:sydDOM.page3_child1().inherit(['attribute','style']),
            //         class:preState(['hsec6_text_img_array','show'],false) === false ? 'child_s_image_comp' : ''
            //     },
            //     [
            //         sydDOM.floatingText2(),
            //         createElement(
            //             'div',
            //             {
            //                 style:sydDOM.broadImg().inherit(['attribute','style'])
            //             }
            //         )
            //     ]
            // )
        ],
        {
            createState:{
                stateName:'hsec6_text_img_array',
                state:{show:false}
            },
            mediaQuery:{
                query:[{size:'<750px' , prop:{show:true}}],
                defState:{show:false}
            }
        }
    )
}

sydDOM.page3_child1 = ({content,title,align,img = ''} = {}) =>{
    return createElement(
        'div',
        {
            style:`display:flex;height:fit-content;width:100%;flex-direction:column-reverse;position:relative;overflow-x:hidden;overflow-y:hidden`,
            // class:preState(['hsec6_text_img_array','show'],false) === false ? (align == 'left' ? 'child_s_image_comp__left_compiment' : 'child_s_image_comp__right_compiment') : 'child_s_image_comp'
        },
        [
            sydDOM.floatingText({content,title,align}),
            sydDOM.broadImg({align:align , img:img})
        ]
    )
}

sydDOM.floatingText = ({content = '' , title = '' , align = 'left'} = {}) =>{
    return createElement(
        'p',
        {
            style:`z-index:10;min-height:${preState(['hsec6_text_img_array','show'],false) === false ? '100%' : '50%'};height:fit-content;width:${preState(['hsec6_text_img_array','show'],false) === false ? '50%' : '100%'};overflow-x:hidden;position:${preState(['hsec6_text_img_array','show'],false) === false ? 'absolute' : 'static'};top:0;${align == 'left' ? 'left:0;' : 'right:0;'}max-width:${preState(['hsec6_text_img_array','show'],false) === false ? '400px' : 'unset'};background:#151719;${align === 'left' ? 'border-top-right-radius:25px;' :'border-top-left-radius:25px;'}border-${align === 'left' ? 'right' : 'left'}:2px solid #b99d75;transform:translateX(${align === 'left' ? '-5px' : '5px'});box-shadow:1px 0 5px #000;`+styleComponent.page3FloatText(),
        },
        [
            createElement(
                'div',
                {
                    style:'font-size:25px;font-weight:900;padding:5px;color:#b99d75'
                },
                [
                    title
                ]
            ),
            createElement(
                'p',
                {
                    style:'font-size:16px;text-align:left;padding-left:10px;line-height:25px;color:#fff'
                },
                [
                    __c('span',{style:'font-size:30px;margin-right:5px'},['"']),
                    content,
                    __c('span',{style:'font-size:30px;margin-left:5px'},['"']),
                ]
            )
        ],
        {
            createState:{
                stateName:'floatingText',
                state:{h:'100%'}
            },
            mediaQuery:{
                query:[{size:'<750',prop:{h:'50%'}}],
                defState:{h:'100%'}
            }
        }
    )
}

sydDOM.floatingText2 = () =>{
    return createElement(
        'p',
        {
            style:`min-height:${preState(['floatingText2','h'],'100%')};height:fit-content;width:${preState(['floatingText2','h'],'100%') === '100%' ? '50%' : '100%'};overflow-x:hidden;position:${preState(['floatingText2','h'],'100%') === '100%' ? 'absolute' : 'static'};top:0;left:0;max-width:${preState(['floatingText2','h'],'100%') === '100%' ? '300px' : 'unset'};`+styleComponent.page3FloatText()
        },
        [
            createElement(
                'div',
                {
                    style:'font-size:25px;font-weight:900;padding:5px'
                },
                [
                    'Text Title : bla bla bla bla bla bla'
                ]
            ),
            createElement(
                'p',
                {
                    style:'font-size:18px'
                },
                [
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, incidunt officia. Inventore error debitis quidem omnis, voluptatem, fugit unde eum perferendis delectus reprehenderit ex, praesentium illum vero et suscipit deserunt?'
                ]
            )
        ],
        {
            createState:{
                stateName:'floatingText2',
                state:{h:'100%'}
            },
            mediaQuery:{
                query:[{size:'<750',prop:{h:'50%'}}],
                defState:{h:'100%'}
            }
        }
    )
}

sydDOM.broadImg = ({align = '' , img} = {}) =>{
    return createElement(
        'div',
        {
            style:`height:100%;width:100%;min-height:400px;max-height:400px;background-position:${preState(['hsec6_text_img_array','show'],false) === false ? (align == 'left' ? '200px' : '-200px') : '0'} 0;background-image:url("../assets/${img}");border-radius:25px;border-width:1px;box-shadow:0 2px 5px #000 inset;`,
            class:'thin_border'
        },[],{
            events:{
                // onmouseover:(e) =>{
                //     e.target.classList.add('h_page_1_cont_large_image_custom')
                // },
                // onmouseout:(e) =>{
                //     e.target.classList.remove('h_page_1_cont_large_image_custom')
                // },
            },
            genericStyle:['bg_cover']
        }
    )
}