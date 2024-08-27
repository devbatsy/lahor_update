import { __v , __p} from "../../sydneyLib/sydneyDom.js";

const scroll_element = ['hsec2_increment_counter_parent','hsec4_img_gallery_main_1','hsec5_img_gallery_static','hsec7_tetimonial_temp_comp'];

const createLabels = () =>{
    const obj = {};
    scroll_element.forEach((val,id) =>{
        obj[`${id}`] = false;
    })
    return obj
}

const scroll_element_labels = createLabels();

// setTimeout(() => {
//     __p([scroll_element[1],'init_count'],() =>{})();
// }, 500);

addEventListener('scroll', e =>{//__v[scroll_element[0]].offsetTop - 120
    //window.scrollY

    for(let i = scroll_element.length-1; i >= 0 ; i--)
    {
        if(window.scrollY > __v[scroll_element[i]].offsetTop)
        {
            if(!scroll_element_labels[`${i}`])
            {
                __p([scroll_element[i],'init_count'],() =>{})();
            }
            for(let j = i-1; j >= 0; j--)
            {
                if(!scroll_element_labels[`${i}`])
                {
                    scroll_element_labels[`${j}`] = false;
                    __p([scroll_element[j],'del_count'],() =>{})();
                }
            }

            for(let j = i+1; j < scroll_element.length; j++)
            {
                if(!scroll_element_labels[`${i}`])
                {
                    scroll_element_labels[`${j}`] = false;
                    __p([scroll_element[j],'del_count'],() =>{})();
                }
            }
            scroll_element_labels[`${i}`] = true;
            break;
        }else{
            scroll_element_labels[`${i}`] = false;
        }
    }
})