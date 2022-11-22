import FavList from "../../components/favorite";
import {useSelector} from 'react-redux'

const PageContent = () => {

    const favorites = useSelector(state => state.favorites)

    return (      
    <div data-component="OPageContent" className="o-page-content" data-component-id="84f821cb-b419-4c7f-b066-9f1c61032e83" style={{"marginTop": "56px"}}>
        <div className="parbase sdp-component left-component">
        <nav aria-label="breadcrumbs" className="m-breadcrumb" data-component="MBreadCrumb" data-component-id="7ad8ea27-e968-42a8-8edd-90f15bda5b74">
            <ol className="breadcrumb-container" itemscope="" itemtype="http://schema.org/BreadcrumbList">
                <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
                    <a className="a-link" href="https://www.arket.com/ko-kr/index.html" target="_self" itemprop="item">
                    <span itemprop="name">ARKET</span>
                    </a>
                </li>
                <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
                    <a className="a-link" href="https://www.arket.com/ko-kr/women.html" target="_self" itemprop="item">
                    <span itemprop="name">Women</span>
                    </a>
                </li>
                <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
                    <a className="a-link" href="https://www.arket.com/ko-kr/women/all.html" target="_self" itemprop="item" aria-current="page" data-no-click="true">
                    <span itemprop="name">의류 모두보기</span>
                    </a>
                </li>
            </ol>
        </nav>
        </div>
        <div className="o-width wc-75 title--xx-small">
        <div className="o-text-field ">
            <div className="headings">
                <div className="m-headline">
                    <h2 className="a-heading-2">
                    <span>My favourite</span>
                    </h2>
                </div>
            </div>
        </div>
        </div>
            <FavList favorites={favorites}/>

        <div id="praArea"> </div>
        <div className="splash parbase"></div>
    </div>
 
 )
}

export default PageContent;