const SiteInfo = {
    isLoading:false
}

export const setIsLoading = (status) => ({
    type:"SET_LOADING",
    data:{status}
})

const SiteInfoReducer = (state=SiteInfo,action) =>{
    switch(action.type){
        case "SET_LOADING":
            return ({
                ...state,
                isLoading:action.data.status
            })
        default:
            return state;
    }

}

export default SiteInfoReducer;