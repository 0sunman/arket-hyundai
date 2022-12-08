import FavList from "../../../components/common/favorite";
import {useSelector} from 'react-redux'
import Head from "../../../components/arket/common/Head";
import Header from '../../../components/arket/common/Header';
import HomeButton from "../../../components/common/homebutton";
import Products from "../../../components/arket/products";


const PageContent = () => {

    const favorites = useSelector(state => state.favorites)

    return (      
        <>
        
        <Head/>
        <Header/>

        <div data-component="OPageContent" className="o-page-content" data-component-id="84f821cb-b419-4c7f-b066-9f1c61032e83" style={{"marginTop": "56px"}}>
        <Products/>
    </div>
    <HomeButton/>
        </>
 
 )
}

export default PageContent;