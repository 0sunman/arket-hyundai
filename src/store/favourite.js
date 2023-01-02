
const GET_FAVORITE = "GET_FAVORITE";
const TOGGLE_SELECTBOX = "TOGGLE_SELECTBOX";
const CLEAR_FAVORITES = "CLEAR_PFAVORITES";
const ADD_DEFAULT_FAVORITES = "ADD_DEFAULT_FAVORITES";
const REMOVE_FAVORITE = "REMOVE_FAVORITE";
const defaultData = (count) => {
    const result = [];
    const initData = () => ({
        "image":{url:"https://lp.arket.com/app006prod?set=key[resolve.width],value[251]&set=key[resolve.height],value[10000]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[jpeg]&set=source[/c6/58/c6584d2e825f51b656bd7a289ac7d09b11815eb6.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/fullscreen]&call=url[file:/product/dynamic.chain]"},
        "description":{
            "name":"울 집 카라1",
            "price":79000

        },
        isSelectable:Math.random() * 2 > 1, 
        isClicked:Math.random() * 2 > 1
    })
    for(let i=0;i<count*1;i++){
        result.push({...initData(),id:(i+0)})
    }
    return result;
}

const favorites = {
    datas:[]
}

export const getFavoriteList = () => ({
    type:GET_FAVORITE
})

export const toggleSelectBox = (id) => ({
    type:TOGGLE_SELECTBOX,
    id:id
})
export const clearFavoriteList = () => ({
    type:CLEAR_FAVORITES
})
export const addDefaultList = ({count}) => ({
    type:ADD_DEFAULT_FAVORITES,
    count
})
export const removeFavorite = ({id})=>({
    type:REMOVE_FAVORITE,
    id
})

const FavoriteReducer = (state = favorites,action) =>{
    switch(action.type){
        case CLEAR_FAVORITES:
            return {...state,"datas":[]}
        case ADD_DEFAULT_FAVORITES:
            
            return {...state,"datas":[...(defaultData(action.count))]}
        case REMOVE_FAVORITE:
            console.log(action)
            let result = [...state.datas]
            result.splice(result.findIndex((ele)=>(ele.id===action.id)),1);
            return {...state,"datas":result}
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