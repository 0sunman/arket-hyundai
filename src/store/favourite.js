const GET_FAVORITE = "GET_FAVORITE";
const TOGGLE_SELECTBOX = "TOGGLE_SELECTBOX";
const favorites = {
    datas:[
        {
            "id":1,
            "image":{url:"https://lp.arket.com/app006prod?set=key[resolve.width],value[251]&set=key[resolve.height],value[10000]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[jpeg]&set=source[/c6/58/c6584d2e825f51b656bd7a289ac7d09b11815eb6.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/fullscreen]&call=url[file:/product/dynamic.chain]"},
            "description":{
                "name":"울 집 카라1",
                "price":79000
    
            },
            isSelectable:false, 
            isClicked:false
        },
        {
            "id":2,
            "image":{url:"https://lp.arket.com/app006prod?set=key[resolve.width],value[251]&set=key[resolve.height],value[10000]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[jpeg]&set=source[/c6/58/c6584d2e825f51b656bd7a289ac7d09b11815eb6.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/fullscreen]&call=url[file:/product/dynamic.chain]"},
            "description":{
                "name":"울 집 카라3",
                "price":79000
    
            },
            isSelectable:true, 
            isClicked:false
        },
        {
            "id":3,
            "image":{url:"https://lp.arket.com/app006prod?set=key[resolve.width],value[251]&set=key[resolve.height],value[10000]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[jpeg]&set=source[/c6/58/c6584d2e825f51b656bd7a289ac7d09b11815eb6.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/fullscreen]&call=url[file:/product/dynamic.chain]"},
            "description":{
                "name":"울 집 카라3",
                "price":79000
    
            },
            isSelectable:true, 
            isClicked:true
        },
        {
            "id":4,
            "image":{url:"https://lp.arket.com/app006prod?set=key[resolve.width],value[251]&set=key[resolve.height],value[10000]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[jpeg]&set=source[/c6/58/c6584d2e825f51b656bd7a289ac7d09b11815eb6.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/fullscreen]&call=url[file:/product/dynamic.chain]"},
            "description":{
                "name":"울 집 카라3",
                "price":79000
    
            },
            isSelectable:true, 
            isClicked:true
        },
        {
            "id":5,
            "image":{url:"https://lp.arket.com/app006prod?set=key[resolve.width],value[251]&set=key[resolve.height],value[10000]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[jpeg]&set=source[/c6/58/c6584d2e825f51b656bd7a289ac7d09b11815eb6.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/fullscreen]&call=url[file:/product/dynamic.chain]"},
            "description":{
                "name":"울 집 카라3",
                "price":79000
    
            },
            isSelectable:true, 
            isClicked:true
        }
    ]
}

export const getFavoriteList = () => ({
    type:GET_FAVORITE
})

export const toggleSelectBox = (id) => ({
    type:TOGGLE_SELECTBOX,
    id:id
})

const FavoriteReducer = (state = favorites,action) =>{
    switch(action.type){
        case GET_FAVORITE:
            return {...state, "datas":state.datas}
        case TOGGLE_SELECTBOX:
            return {...state, "datas":state.datas.map((ele)=> {
                if(ele.id === action.id){
                    ele.isClicked = !ele.isClicked;
                }
                return ele;
            })}
        default:
            return state;
    }
}

export default FavoriteReducer;