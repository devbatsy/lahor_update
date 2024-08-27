import { __SYD, __c } from "../../sydneyLib/sydneyDom.js"

__SYD.iconify = ({attr = '' , clr = '#171717'} = {}) =>{
    return __c(
        'i',
        {
            style:`min-height:30px;min-width:30px;color:${clr};font-size:30px;background-color:lightgrey`,
            class:attr
        }
    )
}

__SYD.iconify_20px = ({attr = '' , clr = '#171717'} = {}) =>{
    return __c(
        'i',
        {
            style:`min-height:20px;min-width:20px;color:${clr};font-size:20px;background-color:unset`,
            class:attr
        }
    )
}

__SYD.iconify_14px = ({attr = '' , clr = '#171717'} = {}) =>{
    return __c(
        'i',
        {
            style:`min-height:14px;min-width:14px;color:${clr};font-size:14px;background-color:unset`,
            class:attr
        }
    )
}

__SYD.iconify_25px = ({attr = '' , clr = '#171717'} = {}) =>{
    return __c(
        'i',
        {
            style:`min-height:25px;min-width:25px;color:${clr};font-size:25px;background-color:unset`,
            class:attr
        }
    )
}

__SYD.iconify_30px = ({attr = '' , clr = '#171717' , inject = ''} = {}) =>{
    return __c(
        'i',
        {
            style:`color:${clr};font-size:30px;background-color:unset;${inject}`,
            class:attr
        }
    )
}

__SYD.iconify_50px = ({attr = '' , clr = '#171717' , inject = ''} = {}) =>{
    return __c(
        'i',
        {
            style:`min-height:50px;min-width:50px;color:${clr};font-size:50px;background-color:unset;${inject}`,
            class:attr
        }
    )
}

__SYD.iconify_png_50px = ({attr = '' , inject = '' , cls = ''} = {}) =>{
    return __c(
        'div',
        {
            style:`min-height:50px;min-width:50px;max-width:50px;background-image:url("../assets/${attr}");${inject}`,
            class:cls
        },
        [],{genericStyle:['bg_cover']}
    )
}