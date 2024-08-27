import { __SYD  , __c, __p, __sC  , __g , __u} from "../../sydneyLib/sydneyDom.js";

ws = new WebSocket('http://localhost:9000');

ws.addEventListener('open' , () =>{
    ws.send(JSON.stringify({post:'img_names'}));
    
    ws.addEventListener('message' , ({data}) =>{
        const parsedData = JSON.parse(data);

        switch(parsedData.post)
        {
            case 'img_names':
                const state = __g('admin_gallery_edit_comp');
                const state2 = __g('edit_apartment_edit')//
                const state3 = __g('edit_blog_edit')
                state.img = parsedData.data;
                state2.img = parsedData.data;
                state3.img = parsedData.data;
                __u('admin_gallery_edit_comp' , {type:'a' , value:state});
                __u('edit_apartment_edit' , {type:'a' , value:state2});
                __u('edit_blog_edit' , {type:'a' , value:state3});
        }
    })
})