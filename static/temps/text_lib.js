import { __SYD, __c } from '../../sydneyLib/sydneyDom.js'

__SYD.text_lib_type_p_glob_vmax = ({cnt = '' , size = 'unset' , clr = '#171717' , w = 'unset' , inject = ''} = {}) =>{
    return __c(
        'p',
        {
            style:`font-size:${size};color:${clr};font-weight:${w};width:max-content;${inject}`
        },
        [
            cnt
        ]
    )
}

__SYD.text_lib_type_hyperLink_glob_vfit = ({cnt = '' , link = '#' , size = 'unset' , clr = '#171717' , w = 'unset' , inject = ''} = {}) =>{
    return __c(
        'a',
        {
            style:`font-size:${size};color:${clr};font-weight:${w};width:fit-content;text-decoration:none;${inject};`,
            href:link
        },
        [
            cnt
        ]
    )
}

__SYD.text_lib_type_p_glob_vfit = ({cnt = '' , size = 'unset' , clr = '#171717' , w = 'unset' , inject = ''} = {}) =>{
    return __c(
        'p',
        {
            style:`font-size:${size};color:${clr};font-weight:${w};width:fit-content;${inject};`
        },
        [
            cnt
        ]
    )
}

__SYD.text_lib_type_h1_glob = ({cls = '',cnt = '' , size = 'unset' , clr = '#171717' , w = 'unset' , inject = ''} = {}) =>{
    return __c(
        'h1',
        {
            style:`font-size:${size};color:${clr};font-weight:${w};${inject}`,
            class:cls
        },
        [
            cnt
        ]
    )
}