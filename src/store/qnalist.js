
const QnAList = {
    datas : [
        {
            id:1,
            date:"2022-11-22 14:43",
            type:"제품문의",
            subject:"털 옷을 시켰는데 양을 가져다 주시면 어떻게해요 ㅠㅠㅠㅠ",
            content:"아니 털 옷을 주문했는데 양이 나왔습니다.<br><br>빨리 데려가주세요",
            answer:"ARKET 에서 문의에 대한 답변을 드립니다.<br><br>아이고 제품에 양이 나왔군요!<br>이 참에 친구 하나 생겼다 치고 키우시면 될 것 같습니다.<br><br>감사합니다!",
            answeryn:true,
            active:true
        },
        {
            id:2,
            date:"2022-11-22 14:43",
            type:"제품문의",
            subject:"옷이 살아 움직여용~",
            content:"겁나 신기하네용",
            answer:null,
            answeryn:false,
            active:false
        },
    ]
}

export const getQnalist = ()=>({
    type:"GET_GNALIST"
})

export const changeActive = (id)=>({
    type:"CHANGE_ACTIVE",
    id
})


const qnareducer = (state=QnAList, action) => {
    switch(action.type){
        case "GET_QNALIST":
            return state;
        case "CHANGE_ACTIVE":
            return {
                ...state,
                datas : state.datas.map((data)=> {
                if(action.id ==data.id){
                    return {...data, active:!(data.active)}
                }
                return data
                })
            };
        default:
            return state;
    }
}

export default qnareducer;