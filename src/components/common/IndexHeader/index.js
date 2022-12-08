import styled from "@emotion/styled";


const IndexHeaderComponent = styled.h2`
display:flex; width:100%; align-items:center; justify-content:center; height:62px; background:#000; color:#fff; margin:0px
`


export const IndexHeader = ({children}) => (<IndexHeaderComponent>{children}현대백화점 해외브랜드 UI Reference</IndexHeaderComponent>)

export const IndexBody = styled.div`
display:flex; justify-content:center; width:100%; 
& > ul {display:flex; width:80%; max-width:930px; flex-wrap:wrap;
    & > li {display:flex; width:33%;
        & > a {display:flex; width:100%; justify-content:center; align-items:center; border:1px solid #000; border-radius:10px; margin:20px; font-size: 35px; text-decoration:none; color:#000; max-width:300px;}
        & > a:hover{background-color:#000;color:#fff}
        & > a:after {content:""; padding-bottom:100%; }
        
    }
    
    @media(max-width:787px){
        display:flex; width:100%; padding:0; margin:0; 
        & > li {
            & > a {margin:5px;margin-top:15px;}
        }
    }
}    
`