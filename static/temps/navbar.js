import {
    createElement,
    mount,
    sydDOM,
    preState,
    useState,
    setStyle,
    styleComponent,
    getState,
    virtualDom,
    __g,
    __u,
    __p,
    __c,
    __SYD,
    __sC,
    __v
} from "../../sydneyLib/sydneyDom.js"
import "./icon.js"
import "./styCom.js"
import "./footer.js"
import "./text_lib.js"
import dataGrid from '../../shortlets.json' with { type: 'json' };
const data_grid = Object.keys(dataGrid).map(val =>{return dataGrid[val]})

console.log(data_grid)

setStyle([
    {
        nameTag:'navBar',
        style:{
            width:'100%',
            display:'flex',
            alignItems:'center',
            columnGap:'30px',
            position:'absolute',
            top:'0',
            left:'0',
            zIndex:'999',
            justifyContent:'space-between',
            // background:'#fff',
            userSelect:'none',
            textAlign:'center'
        }
    },
    {
        nameTag:'menuBox',
        style:{
            minHeight:'30px',
            minWidth:'30px',
            maxHeight:'30px',
            maxWidth:'30px',
            justifyContent:'center',
            alignItems:'center',
            display:'flex',
            cursor:'pointer'
        }
    },
    {
        nameTag:'linkIconify',
        style:{
            height:'15px',
            width:'15px',
            minHeight:'15px',
            minWidth:'15px',
            marginLeft:'3px'
        }
    }
])

__SYD.reservation_btn = () =>{
    return __c(
        'a',
        {
            style:`padding: 15px 20px;height:fit-content;${__p(['navBar','param'],true) === true ? '' : 'position:absolute;top:calc(100% + 10px);right:10px;transform:translateY(-50%)'}`,
            class:'thin_border hover_text',
            href:'/all_apartment'
        },
        [
            __SYD.text_lib_type_p_glob_vfit({cnt:'Book Now',size:'15px',w:'300',clr:'#fff'})
        ]
    ) 
}

__SYD.overlay_nav = () =>{
    return __c(
        'div',
        {
            style:`height:100vh;width:100vw;background:rgba(34,34,34,.8);position:absolute;top:0;left:0;display:${__p(['overlay_nav','d'],'none') === 'none' ? 'none' : 'block'}`
        },[

        ],
        {
            createState:{
                stateName:'overlay_nav',
                state:{d:'none'}
            },
            events:{
                onclick:() =>{
                    const sideNav = getState('sideNav');
                    const overlay_state = __g('overlay_nav');
                    sideNav.t = -105;
                    overlay_state.d = 'none';
                    __u('overlay_nav',{type:'a',value:overlay_state})
                    useState('sideNav',{type:'a',value:sideNav})
                }
            }
        }
    )
}

sydDOM.navBar = () =>{
    return createElement(
        'div',
        {
            style:styleComponent.navBar({method:'add',style:{height:`${preState(['navBar','h'],120)}px`}}),
            tabindex:'0',
            // class:'thin_border'//bg_overlay
        },
        [
            __c(
                'div',
                {
                    style:`height:100%;width:100%;display:flex;column-gap:10px;row-gap:inherit;justify-content:inherit;padding:${preState(['navBar','param'],true) ? '5px 4rem' : '0px 10px'};align-items:center;z-index:10`
                },
                [
                    sydDOM.createLogo(),
                    sydDOM.navMenu(),
                    __p(['navBar','param'],true) === true ? '' : __SYD.text_lib_type_h1_glob({cnt:'LAHOR Apartments' , clr:'#b99d75' , size:'18px' , w:'700' , inject:'font-family:cursive;'}),
                    __SYD.reservation_btn(),
                    // sydDOM.belowNav(),
                    sydDOM.sideNav(),
                    sydDOM.mobileMenu(),
                    __SYD.overlay_nav()
                ]
            )
        ],
        {
            createState:{
                stateName:'navBar',
                state:{h:64,d:'flex',param:true}
            },
            mediaQuery:{
                query:[{size:'<900px' , prop:{param:false}}],
                defState:{param:true}
            }
            // events:{
                
            // }
        }
    )
}

sydDOM.createLogo = () =>{
    return createElement(
        'a',
        {
            style:`min-height:70px;min-width:70px;background-image:url("../assets/logo.JPG")`,
            href:'/'
        },[],{genericStyle:['bg_cover']}
    )
}

sydDOM.navMenu = () =>{
    return createElement(
        'ul',
        {
            style:`list-style-type:none;height:100%;width:100%;max-width:calc(100% - 300px);padding:15px 10px;display:${preState(['navBar','param'],true) ? 'flex' : 'none'};justify-content:center;align-items:center;column-gap:10px;font-size:14px;flex-wrap:wrap;color:#fff;position:relative;`
        },
        [
            sydDOM.nonTogMenu({type:'home' , link:'/'}),
            sydDOM.nonTogMenu({type:'About Us' , link:'/about'}),
            sydDOM.nonTogMenuApartment(),
            sydDOM.nonTogMenu({type:'Our Services' , link:'/service'}),
            sydDOM.nonTogMenu({type:'Gallery' , link:'/gallery'}),
            sydDOM.nonTogMenu({type:'Blog' , link:'/blog'}),
            sydDOM.nonTogMenu({type:'Contact us' , link:'/contact'}),
            // __SYD.apartment_drop_down(),
        ],
        {
            createState:{
                stateName:'navMenu',
                state:{d:'flex'}
            },
            type:'navMenu',
            mediaQuery:{
                query:[{size:'<900px',prop:{d:'none'}}],
                defState:{d:'flex'}
            }
        }
    )
}

sydDOM.nonTogMenu = ({type,link = '/'}) =>{
    return createElement(
        'a',
        {
            style:`height:fit-content;width:fit-content;padding:0 15px;display:flex;justify-content:flex-start;align-items:center;min-height:30px;column-gap:3px;font-size:inherit;text-transform:capitalize;cursor:pointer;z-index:40;`,
            class:'menuIcon',
            href:link,
            class:type.toLowerCase() === page_route_ ? 'perm_underline' : 'temp_underline'
        },
        [
            `${type}`
        ]
    )
}

sydDOM.nonTogMenuApartment = () =>{
    return createElement(
        'li',
        {
            style:sydDOM.nonTogMenu({type:'null'}).inherit(['attribute','style']) +';outline:none;perspective:900px;position:relative;z-index:400',
            class:sydDOM.nonTogMenu({type:'null'}).inherit(['attribute','class']),
            tabindex:'0'
            // onclick:'togMenu1(this,"nonTogMenuApartment")',
        },
        [
            'Apartment',__SYD.iconify_14px({attr:'fa-solid fa-angle-down' , clr:'#fff'}),
            __SYD.apartment_drop_down(),
        ],
        {
            type:'nonTogMenuApartment',
            events:{
                onclick:() =>{
                    __v['apartment_drop_down'].style.display = 'flex'
                },
                onmouseover:() =>{
                    __v['apartment_drop_down'].style.display = 'flex';
                    __v['nonTogMenuApartment'].focus()
                },
                onblur:() =>{
                    __v['apartment_drop_down'].style.display = 'none'
                },
                onmouseout:() =>{
                    __v['apartment_drop_down'].style.display = 'none'
                }
            }
        }
    )
}

sydDOM.nonTogMenuSocial = () =>{
    return createElement(
        'li',
        {
            style:sydDOM.nonTogMenu({type:'null'}).inherit(['attribute','style']),
            class:sydDOM.nonTogMenu({type:'null'}).inherit(['attribute','class']),
            onclick:'togMenu1(this,"nonTogMenuSocial")',
        },
        [
            'social',
            createElement('div',{style:'height:15px;width:15px;transition:transform linear .5s'})
        ],
        {
            type:'nonTogMenuSocial'
        }
    )
}

__SYD.apartment_drop_down = () =>{
    return __c(
        'div',
        {
            style:"height:fit-content;min-width:unset;width:fit-content;display:none;flex-direction:column;row-gap:20px;position:absolute;top:calc(100% + 0px);left:0%;padding:10px 15px 10px 15px;background:#151719;color:#fff;z-index:500;"+__sC['border-rad-15']()+__sC['shadow__cover_dark'](),
            class:'tab_drop_down_animate thin_border'
        },[
            // __c('p',{style:'font-size:14px;width:max-content;padding:5px 10px;border-radius:5px;',class:'hover_text',target:'blank'},['Apartment 1'],{events:{onclick:() =>{location.href = '/apartment?type=apartment1';}}}),
            // __c('p',{style:'font-size:14px;width:max-content;padding:5px 10px;border-radius:5px;',class:'hover_text',target:'blank'},['Apartment 2'],{events:{onclick:() =>{location.href = '/apartment?type=apartment2';}}}),
            // __c('p',{style:'font-size:14px;width:max-content;padding:5px 10px;border-radius:5px;',class:'hover_text',target:'blank'},['Apartment 3'],{events:{onclick:() =>{location.href = '/apartment?type=apartment3';}}}),
            // __c('p',{style:'font-size:14px;width:max-content;padding:5px 10px;border-radius:5px;',class:'hover_text',target:'blank'},['Apartment 4'],{events:{onclick:() =>{location.href = '/apartment?type=apartment4';}}}),

            ...data_grid.map((val) =>{return __c('p',{style:'font-size:14px;width:max-content;padding:5px 10px;border-radius:5px;',class:'hover_text',target:'blank'},[val.Name],{events:{onclick:() =>{location.href = `/apartment?type=${val.Name.split(' ').join('').toLowerCase()}`;}}})})
        ],
        {
            type:'apartment_drop_down'
        }
    )
}

sydDOM.belowNav = () =>{
    togMenu1 = (elem,type) =>{
        const belowNav = getState('belowNav');

        console.log('hey clicking')
        virtualDom['navBar'].focus()

        switch(true)
        {
            case belowNav.controller !== type:
                belowNav.d = 'flex';
                belowNav.controller = type;
                setTimeout(() => {
                    const belowNav = getState('belowNav');
                    belowNav.o = '1'
                    useState('belowNav',{type:'a',value:belowNav})
                }, 100);
                console.log(elem.children)
                elem.children[0].style.transform = 'rotateZ(-180deg)';
                // virtualDom[type === 'nonTogMenuSocial' ? 'nonTogMenuApartment' : 'nonTogMenuSocial'].children[0].style.transform = 'rotateZ(0deg)'
            break;
            case belowNav.d === 'flex':
                belowNav.d = 'none';
                belowNav.o = '0';
                belowNav.controller = ''
                elem.children[0].style.transform = 'rotateZ(0deg)'
        }
        useState('belowNav',{type:'a',value:belowNav});
    }

    return createElement(
        'div',
        {
            style:`min-height:100px;position:absolute;left:0;top:100%;width:300px;display:${preState(['belowNav','d'],'none')};opacity:${preState(['belowNav','o'],'0')};transform:translateY(${preState(['belowNav','o'],'0') === '0' ? '-50%' : '0'});transition:opacity linear .1s,transform linear .2s;`+__sC['shadow__cover'](),
        },
        [],
        {
            createState:{
                stateName:'belowNav',
                state:{d:'none',o:'0',controller:''}
            },
            type:'belowNav'
        }
    )
}

sydDOM.mobileMenu = () =>{
    return createElement(
        'div',
        {
            style:styleComponent.menuBox([
                {method:'add',style:{
                    position:'absolute',
                    top:'calc(100% + 10px)',
                    transform:'translateY(-50%)',
                    left:'10px',
                    display:preState(['navBar','param'],true) ? 'none' : 'flex',
                    zIndex:'100'
                }}
            ]),
        },
        [
            __SYD.iconify_30px({attr:'fa-solid fa-bars' , clr:'#fff'})//<i class="fa-solid fa-bars"></i>
        ],
        {
            createState:{
                stateName:'mobileMenu',
                state:{d:'none'}
            },
            type:'mobileMenu',
            events:{
                onclick:() =>{
                    const sideNav = getState('sideNav');
                    const overlay_state = __g('overlay_nav');
                    switch(sideNav.t){
                        case -105:
                            sideNav.t = 0
                            overlay_state.d = 'block'
                            break;
                        default:
                            sideNav.t = -105;
                            overlay_state.d = 'none'
                    }
                    useState('sideNav',{type:'a',value:sideNav})
                    useState('overlay_nav',{type:'a',value:overlay_state})
                }
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{d:'flex'}}],
                defState:{d:'none'}
            }
        }
    )
}

sydDOM.sideNav = () =>{
    return createElement(
        'div',
        {
            style:`height:calc(100vh);width:100%;max-width:100%;position:fixed;top:0%;left:0;transform:translateX(${preState(['sideNav','t'],-105)}%);transition:transform linear .3s;padding-top:10px;color:#fff;background-color:#222;z-index:105`,
            class:"sideNav"
        },
        [
            __c(
                'div',
                {
                    style:'position:absolute;top:10px;right:10px;min-height:30px;min-width:30px;height:30px;width:30px;cursor:pointer'
                },
                [
                    __SYD.iconify_30px({attr:'fa-solid fa-xmark',clr:'#fff',inject:'display:block;'})//<i class="fa-solid fa-xmark"></i>
                ],
                {
                    events:{
                        onclick:() =>{
                            const sideNav = getState('sideNav');
                            const overlay_state = __g('overlay_nav');
                            switch(sideNav.t){
                                case -105:
                                    sideNav.t = 0
                                    overlay_state.d = 'block'
                                    break;
                                default:
                                    sideNav.t = -105;
                                    overlay_state.d = 'none'
                            }
                            useState('sideNav',{type:'a',value:sideNav})
                            useState('overlay_nav',{type:'a',value:overlay_state})
                        }
                    }
                }
            ),
            createElement(
                'ul',
                {
                    style:'display:flex;flex-direction:column;padding:10px;height:100%;width:100%;row-gap:20px;overflow-y:scroll;padding-bottom:120px;font-size:18px;'
                },
                [
                    sydDOM.nonTogMobileMenuList({content:'Home' , link:'/'}),
                    sydDOM.nonTogMobileMenuList({content:'About Us' , link:'/about'}),
                    sydDOM.togMobileMenuListApartment(),
                    sydDOM.nonTogMobileMenuList({content:'Our Services' , link:'/service'}),
                    sydDOM.nonTogMobileMenuList({content:'Gallery' , link:'/gallery'}),
                    sydDOM.nonTogMobileMenuList({content:'Blog' , link:'/blog'}),
                    sydDOM.nonTogMobileMenuList({content:'Contact Us' , link:'/contact'})
                ]
            )
        ],
        {
            createState:{
                stateName:'sideNav',
                state:{t:-105}
            },
            type:'sideNav'
        }
    )
}

sydDOM.nonTogMobileMenuList = ({content , link = ''}) =>{
    return createElement(
        'a',
        {
            style:sydDOM.nonTogMenu({type:'null'}).inherit(['attribute','style']) + 'height:fit-content;cursor:pointer;color:#fff;',
            href:link
        },
        [
            `${content}`
        ],
        {
            events:{
                onclick:() =>{
                    // location.href
                }
            }
        }
    )
}

sydDOM.nonTogMobileMenuListIconify = ({content , link = ''}) =>{
    return createElement(
        'a',
        {
            style:'height:fit-content;width:fit-content;padding:0 15px;display:flex;justify-content:flex-start;align-items:center;min-height:30px;column-gap:3px;font-weight:500;font-size:inherit;text-transform:capitalize;' + 'height:fit-content;font-weight:300;font-size:16px;color:#fff;cursor:pointer',
            href:link
        },
        [
            `${content}`,
            createElement(
                'div',
                {
                    style:styleComponent.linkIconify()
                }
            )
        ],
        {
            events:{
                onclick:() =>{
                    console.log('clicking this')
                }
            }
        }
    )
}

sydDOM.togMobileMenuListSupport = () =>{
    return createElement(
        'div',
        {
            style:sydDOM.nonTogMenu({type:'null'}).inherit(['attribute','style']) + 'min-height:fit-content;height:fit-content;flex-direction:column;align-items:flex-start;row-gap:20px;'
        },
        [
            'support',
            createElement(
                'div',
                {style:'row-gap:20px;display:inherit;flex-direction:inherit'},
                [
                    sydDOM.nonTogMobileMenuList({content:'tutorials'}),
                    sydDOM.nonTogMobileMenuListIconify({content:'support'})
                ]
            )
        ]
    )
}

sydDOM.togMobileMenuListApartment = () =>{
    return createElement(
        'div',
        {
            style:sydDOM.nonTogMenu({type:'null'}).inherit(['attribute','style']) + 'min-height:fit-content;height:fit-content;flex-direction:column;align-items:flex-start;row-gap:0px;transition:height linear .3s;border:none'
        },
        [
            __c(
                'p',
                {
                    style:'padding:10px;display:flex;width:100%;justify-content:space-between;align-items:center;padding-left:0;'
                },
                [
                    'Apartment',__SYD.iconify_14px({attr:'fa-solid fa-angle-down' , clr:'fa-solid fa-angle-down'})
                ],
                {
                    events:{
                        onclick:() =>
                        {
                            const state = __g('togMobileMenuListApartment');
                            state.tog = state.tog ? false : true;
                            __u('togMobileMenuListApartment',{type:"a",value:state});
                        }
                    }
                }
            ),
            createElement(
                'div',
                {style:`row-gap:20px;display:flex;flex-direction:column;height:${__p(['togMobileMenuListApartment','tog'],false) === false ? '0px' : '200px'};overflow:hidden;transition:height linear .3s;`},
                [
                    // sydDOM.nonTogMobileMenuListIconify({content:'shortlet Apartment 1' , link:'/apartment?type=apartment1'}),
                    // sydDOM.nonTogMobileMenuListIconify({content:'shortlet Apartment 2' , link:'/apartment?type=apartment2'}),
                    // sydDOM.nonTogMobileMenuListIconify({content:'shortlet Apartment 3' , link:'/apartment?type=apartment3'}),
                    // sydDOM.nonTogMobileMenuListIconify({content:'shortlet Apartment 4' , link:'/apartment?type=apartment4'}),

                    ...data_grid.map((val) =>{return sydDOM.nonTogMobileMenuListIconify({content:val.Name , link:`/apartment?type=${val.Name.split(' ').join('').toLowerCase()}`})})

                ]
            )
        ],
        {
            createState:{
                stateName:'togMobileMenuListApartment',
                state:{tog:false}
            }
        }
    )
}