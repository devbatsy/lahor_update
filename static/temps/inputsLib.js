import { __SYD, __c } from "../../sydneyLib/sydneyDom.js"

__SYD.input_type_text = ({_name = '' , type = 'text' , ph = 'Text Here' , cls = 'thin_border' , w = '500' , size = '16px' , inject = ''} = {}) =>{
    return __c(
        'input',
        {
            type:type,
            placeholder:ph,
            class:cls,
            name:_name,
            style:`background:transparent;padding:5px;padding-left:10px;font-weight:${w};font-size:${size};${inject};outline:none;`
        }
    )
}

__SYD.textArea_type_text = ({ph = 'Text Here' , cls = 'thin_border' , w = '500' , size = '16px' , inject = ''} = {}) =>{
    return __c(
        'textarea',
        {
            type:"text",
            placeholder:ph,
            class:cls,
            style:`background:transparent;padding:5px;padding-left:10px;font-weight:${w};font-size:${size};${inject};outline:none;`
        }
    )
}

__SYD.button_model_type_form = ({cnt = 'button model' , cls = 'thin_border' , inject = ''} = {}) =>{
    return __c(
        'button',
        {
            type:'submit',
            class:cls,
            style:`padding:5px 10px;min-height:50px;width:100%;color:#fff;font-weight:700;text-transform:capitalize;font-size:16px;${inject};`,
        },[
            cnt
        ]
    )
}