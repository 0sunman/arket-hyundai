import FavList from "../../../components/common/favorite";
import {useSelector} from 'react-redux'
import Head from "./../../../components/stories/common/Head";
import HomeButton from "../../../components/common/homebutton";

const PageContent = () => {

    //const favorites = useSelector(state => state.favorites)

    return (      
        <>
        
        <Head/>
        <div data-component="OPageContent" className="o-page-content" style={{"margin-top": "54px"}}>
            <div className="content-section favorite stories">
            <div className="u-cols-lg-12-24 u-cols-md-8-12 u-cols-sm-8-8 u-align-to-logo" id="sizeguide2022">
                        <div className="m-teaser blog-teaser">
                            <h1 className="a-heading-1 q-mega">Customer Service / 사이즈 가이드</h1> 
                        </div>
                        <div className="accordion-group">
                            <div data-component="OAccordion" className="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="customer-service" data-component-id="a926edb4-67ea-4629-b45e-8a9f748fe13c">
                                <div className="accordion-header">
                                    <a href="#" target="_self" className="a-link a-link accordion-title js-accordion-toggle no-styling">
                                        <span className="a-icon-arrow-down-small"></span>
                                        <h3 className="a-heading-3">사이즈 측정 방법</h3>
                                    </a>
                                </div>
                                <div className="accordion-content">
                                    <div className="accordion-inner-content">
                                        <div className="sizeguide">
                                            <img className="sizeguide_doll" src="https://image.thehyundai.com/stories_cdn/images/hdstories/guide/sizeguide_doll.png" alt="size guide"/>
                                            <h4 className="a-heading-4 txt_left">A : 가슴둘레</h4>
                                            <p className="a-paragraph">
                                                                                                몸에 잘 맞는 브라를 착용한 상태로, 가장 볼륨이 있는 둘레를 측정합니다.
                                            </p>
                                            <h4 className="a-heading-4 txt_left">B : 가슴밑둘레</h4>
                                            <p className="a-paragraph">
                                                                                                 가슴 바로 아래쪽 흉부를 줄자로 타이트하게 측정하세요.
                                            </p>
                                            <h4 className="a-heading-4 txt_left">C : 허리둘레</h4>
                                            <p className="a-paragraph">
                                                                                                   허리의 가장 잘록한 부분을 측정합니다.
                                            </p>
                                            <h4 className="a-heading-4 txt_left">D : 엉덩이둘레</h4>
                                            <p className="a-paragraph">
                                                                                                    엉덩이의 가장 볼륨이 있는 부분을 둘러 사이즈를 측정합니다.
                                            </p>
                                            <h4 className="a-heading-4 txt_left">E : 다리길이</h4>
                                            <p className="a-paragraph">
                                                                                                    밑위 끝지점에서 바닥까지의 길이를 잽니다.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div data-component="OAccordion" className="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="customer-service" data-component-id="6c856240-a8e1-4d61-b362-97df195d7b60">
                                <div className="accordion-header">
                                    <a href="#" target="_self" className="a-link a-link accordion-title js-accordion-toggle no-styling">
                                        <span className="a-icon-arrow-down-small"></span>
                                        <h3 className="a-heading-3">사이즈 차트</h3>
                                    </a>
                                </div>
                                <div className="accordion-content">
                                    <div className="accordion-inner-content">
                                        <div className="sizeguide">
                                           <table>
		                                       <caption className="hidden">사이즈 차트입니다.</caption>
		                                       <tbody>
		                                          <tr>
		                                             <th scope="col">
		                                                
		                                             </th>
		                                             <th scope="col">
		                                                한국<br/>(KR)
		                                             </th>
		                                             <th scope="col">
		                                                유럽<br/>(EU)
		                                             </th>
		                                             <th scope="col">
		                                                영국<br/>(UK)
		                                             </th>
		                                             <th scope="col">
		                                                이탈리아<br/>(UK)
		                                             </th>
		                                             <th scope="col">
		                                                프랑스/<br/>스페인<br/>(UK)
		                                             </th>
		                                          </tr>
		                                          <tr>
		                                             <th scope="row">XS</th>
		                                             <td>44</td>
		                                             <td>32-34</td>
		                                             <td>6-8</td>
		                                             <td>36-38</td>
		                                             <td>34-36</td>
		                                          </tr>
		                                          <tr>
		                                             <th scope="row">S</th>
		                                             <td>55</td>
		                                             <td>36-38</td>
		                                             <td>10-12</td>
		                                             <td>40-42</td>
		                                             <td>38-40</td>
		                                          </tr>
		                                          <tr>
		                                             <th scope="row">M</th>
		                                             <td>66</td>
		                                             <td>40-42</td>
		                                             <td>14-16</td>
		                                             <td>44-46</td>
		                                             <td>42-44</td>
		                                          </tr>
		                                          <tr>
		                                             <th scope="row">L</th>
		                                             <td>77</td>
		                                             <td>44</td>
		                                             <td>18</td>
		                                             <td>48</td>
		                                             <td>46</td>
		                                          </tr>
		                                       </tbody>
		                                     </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div data-component="OAccordion" className="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="customer-service" data-component-id="15747765-36bc-4690-bf24-b6f8b03f3ed7">
                                <div className="accordion-header">
                                    <a href="#" target="_self" className="a-link a-link accordion-title js-accordion-toggle no-styling">
                                        <span className="a-icon-arrow-down-small"></span>
                                        <h3 className="a-heading-3">신체 사이즈 CM</h3>
                                    </a>
                                </div>
                                <div className="accordion-content">
                                    <div className="accordion-inner-content">
                                        <div className="sizeguide">
                                            <table>
			                                       <caption className="hidden">신체 사이즈 CM입니다.</caption>
			                                       <tbody>
			                                          <tr>
			                                            <th scope="row"></th>
			                                             <th scope="col">
			                                                유럽/한국 (EU/KR)
			                                             </th>
			                                             <th scope="col">
			                                                슴둘레
			                                             </th>
			                                             <th scope="col">
			                                                허리둘레
			                                             </th>
			                                             <th scope="col">
			                                                엉덩이둘레
			                                             </th>
			                                             <th scope="col">
			                                                다리길이
			                                             </th>
			                                          </tr>
			                                          <tr>
			                                            <th scope="row">XXS</th>
			                                             <td>30</td>
			                                             <td>72</td>
			                                             <td>56</td>
			                                             <td>80</td>
			                                             <td>79</td>
			                                          </tr>
			                                          <tr>
			                                            <th rowSpan="2">XS</th>
			                                             <td>32</td>
			                                             <td>76</td>
			                                             <td>60</td>
			                                             <td>84</td>
			                                             <td>79</td>
			                                          </tr>
			                                          <tr>
			                                             <td className="no-bold">34</td>
			                                             <td>80</td>
			                                             <td>64</td>
			                                             <td>88</td>
			                                             <td>79</td>
			                                          </tr>
			                                          <tr>
			                                            <th rowSpan="2">S</th>
			                                             <td>36</td>
			                                             <td>84</td>
			                                             <td>68</td>
			                                             <td>92</td>
			                                             <td>79</td>
			                                          </tr>
			                                          <tr>
			                                             <td className="no-bold">38</td>
			                                             <td>88</td>
			                                             <td>72</td>
			                                             <td>96</td>
			                                             <td>79</td>
			                                          </tr>
			                                          <tr>
			                                            <th rowSpan="2">M</th>
			                                             <td>40</td>
			                                             <td>92</td>
			                                             <td>76</td>
			                                             <td>100</td>
			                                             <td>79</td>
			                                          </tr>
			                                          <tr>
			                                             <td className="no-bold">42</td>
			                                             <td>96</td>
			                                             <td>80</td>
			                                             <td>104</td>
			                                             <td>79</td>
			                                          </tr>
			                                          <tr>
			                                            <th scope="row">L</th>
			                                             <td>44
			                                             </td><td>100</td>
			                                             <td>84</td>
			                                             <td>108</td>
			                                             <td>79</td>
			                                          </tr>
			                                       </tbody>
			                                    </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div data-component="OAccordion" className="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="customer-service" data-component-id="e03868a1-780c-4e8e-8c57-88bad9bbed41">
                                <div className="accordion-header">
                                    <a href="#" target="_self" className="a-link a-link accordion-title js-accordion-toggle no-styling">
                                        <span className="a-icon-arrow-down-small"></span>
                                        <h3 className="a-heading-3">데님 사이즈 차트</h3>
                                    </a>
                                </div>
                                <div className="accordion-content">
                                    <div className="accordion-inner-content">
                                        <div className="sizeguide size-75">
                                                <h4 className="a-heading-4 txt_left">데님 - 신체 사이즈 CM</h4>
			                                    <table>
			                                        <caption className="hidden">사이즈 차트입니다.</caption>
			                                        <tbody>
			                                           <tr>
			                                              <th scope="col">
		                                                 
		                                              </th>
		                                              <th scope="col">허리둘레
		                                              </th>
		                                              <th scope="col">엉덩이둘레
		                                              </th>
		                                           </tr>
		                                           <tr>
		                                              <th scope="row">24''</th>
		                                              <td>62</td>
		                                              <td>86</td>
		                                           </tr>
		                                           <tr>
		                                              <th scope="row">25''</th>
		                                              <td>64.5</td>
		                                              <td>88.5</td>
		                                           </tr>
		                                           <tr>
		                                              <th scope="row">26''</th>
		                                              <td>67</td>
		                                              <td>91</td>
		                                           </tr>
		                                           <tr>
		                                              <th scope="row">27''</th>
		                                              <td>69.5</td>
		                                              <td>93.5</td>
		                                           </tr>
		                                           <tr>
		                                              <th scope="row">28''</th>
		                                              <td>72</td>
		                                              <td>96</td>
		                                           </tr>
		                                           <tr>
		                                              <th scope="row">29''</th>
		                                              <td>74.5</td>
		                                              <td>98.5</td>
		                                           </tr>
		                                           <tr>
		                                              <th scope="row">30''</th>
		                                              <td>77</td>
		                                              <td>101</td>
		                                           </tr>
		                                           <tr>
		                                              <th scope="row">31''</th>
		                                              <td>79.5</td>
		                                              <td>103.5</td>
		                                           </tr>
		                                           <tr>
		                                              <th scope="row">32''</th>
		                                              <td>82</td>
		                                              <td>106</td>
		                                           </tr>
		
		                                        </tbody>
		                                     </table>
		                                     <h4 className="a-heading-4 txt_left">데님 - 제품길이</h4>
		                                     <table>
		                                        <caption className="hidden">사이즈 차트입니다.</caption>
		                                        <tbody>
		                                           <tr>
		                                              <th scope="col">인심 길이 (INCH)
		                                              </th>
		                                              <th scope="col">인심 길이 (CM)
		                                              </th>
		                                           </tr>
		                                           <tr>
		                                              <th>28''</th>
		                                              <td>71</td>
		                                           </tr>
		                                           <tr>
		                                              <th>30''</th>
		                                              <td>76</td>
		                                           </tr>
		                                           <tr>
		                                              <th>32''</th>
		                                              <td>81</td>
		                                           </tr>
		
		                                        </tbody>
		                                     </table>                   
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div data-component="OAccordion" className="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="customer-service" data-component-id="2cdb49f4-7da4-4717-bf25-ba0faf860098">
                                <div className="accordion-header">
                                    <a href="#" target="_self" className="a-link a-link accordion-title js-accordion-toggle no-styling">
                                        <span className="a-icon-arrow-down-small"></span>
                                        <h3 className="a-heading-3">슈즈 사이즈 차트</h3>
                                    </a>
                                </div>
                                <div className="accordion-content">
                                    <div className="accordion-inner-content">
                                        <div className="sizeguide size-75">
                                                <table>
				                                       <caption className="hidden">1 사이즈 차트입니다.</caption>
				                                       <tbody>
				                                          <tr>
				                                             <th scope="col">
				                                                유럽<br/>(EU)
				                                             </th>
				                                             <th scope="col">
				                                                영국<br/>(UK)
				                                             </th>
				                                             <th scope="col">
				                                                한국<br/>(KR)
				                                             </th>
				                                             <th scope="col">
				                                                발볼
				                                             </th>
				                                          </tr>
				                                          <tr>
				                                             <th scope="row">35</th>
				                                             <td>4</td>
				                                             <td>225 mm</td>
				                                             <td>8.6 cm</td>
				                                          </tr>
				                                          <tr>
				                                             <th scope="row">36</th>
				                                             <td>4.5</td>
				                                             <td>230 mm</td>
				                                             <td>8.8 cm</td>
				                                          </tr>
				                                          <tr>
				                                             <th scope="row">37</th>
				                                             <td>5</td>
				                                             <td>240 mm</td>
				                                             <td>8.9 cm</td>
				                                          </tr>
				                                          <tr>
				                                             <th scope="row">38</th>
				                                             <td>6</td>
				                                             <td>250 mm</td>
				                                             <td>9.1 cm</td>
				                                          </tr>
				                                          <tr>
				                                             <th scope="row">39</th>
				                                             <td>7</td>
				                                             <td>255 mm</td>
				                                             <td>9.2 cm</td>
				                                          </tr>
				                                          <tr>
				                                             <th scope="row">40</th>
				                                             <td>7.5</td>
				                                             <td>260 mm</td>
				                                             <td>9.4 cm</td>
				                                          </tr>
				                                          <tr>
				                                            <th scope="row">41</th>
				                                            <td>8.5</td>
				                                            <td>265 mm</td>
				                                            <td>9.5 cm</td>
				                                         </tr>
				                                         <tr>
				                                            <th scope="row">42</th>
				                                            <td>9.5</td>
				                                            <td>270 mm</td>
				                                            <td>9.7 cm</td>
				                                         </tr>
				                                     </tbody>
				                                    </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div data-component="OAccordion" className="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="customer-service" data-component-id="ce0a1fd7-c20a-4344-95f3-85ea0874075b">
                                <div className="accordion-header">
                                    <a href="#" target="_self" className="a-link a-link accordion-title js-accordion-toggle no-styling">
                                        <span className="a-icon-arrow-down-small"></span>
                                        <h3 className="a-heading-3">브라 사이즈 차트</h3>
                                    </a>
                                </div>
                                <div className="accordion-content">
                                    <div className="accordion-inner-content">
                                            <div className="sizeguide bra">
			                                    <p className="a-paragraph" style={{"text-align":"center"}}>
			                                       나에게 맞는 브라 사이즈 찾기
			                                    </p>
			                                    <h4 className="a-heading-4 txt_left">
			                                       밴드 사이즈
			                                    </h4>
			                                    <p className="a-paragraph">
			                                       브라 사이즈 표시의 숫자는 밑가슴둘레를 나타냅니다. 줄자를 타이트하게 가슴 바로 아래 부분을 측정한 다음, 반올림하세요. 예를 들어, 72cm를 측정하면 브라 사이즈는 70입니다.
			                                    </p>
			                                    <h4 className="a-heading-4 txt_left">
			                                       컵 사이즈
			                                    </h4>
			                                    <p className="a-paragraph">
			                                       사이즈의 알파벳은 컵 사이즈를 나타냅니다. 만약 75B 사이즈를 착용했을 때 너무 작다고 느낀다면, 75C를 입어보세요. 밴드 사이즈는 같지만 컵 사이즈가 더 큽니다.
			                                    </p>
			                                    <table>
			                                        <caption className="hidden">벨트 차트입니다.</caption>
			                                        <tbody>
			                                           <tr>
			                                             <th scope="col">
			                                                 유럽/한국<br/>(EU/KR)
			                                              </th>
			                                              <th scope="col">
			                                                 영국<br/>(UK)
			                                              </th>
			                                              <th scope="col">
			                                                 프랑스/<br/>스페인<br/>(FR/ES)
			                                              </th><th scope="col">
			                                                 이탈리아<br/>(IT)
			                                              </th>
			                                              
			                                           </tr>
			                                           <tr>
			                                             <th>70A</th>
			                                             <td>32A</td>
			                                             <td>85A</td>
			                                             <td>2A</td>
			                                          </tr>
			                                          <tr>
			                                            <th>75A</th>
			                                            <td>34A</td>
			                                            <td>90A</td>
			                                            <td>3A</td>
			                                          </tr>
			                                          <tr>
			                                            <th>80A</th>
			                                            <td>36A</td>
			                                            <td>95A</td>
			                                            <td>4A</td>
			                                          </tr>
			                                           <tr>
			                                             <th>70B</th>
			                                             <td>32B</td>
			                                             <td>85B</td>
			                                             <td>2B</td>
			                                          </tr>
			                                          <tr>
			                                            <th>75B</th>
			                                            <td>34B</td>
			                                            <td>90B</td>
			                                            <td>3B</td>
			                                          </tr>
			                                          <tr>
			                                            <th>80B</th>
			                                            <td>36B</td>
			                                            <td>95B</td>
			                                            <td>4B</td>
			                                          </tr>
			                                          <tr>
			                                             <th>70B</th>
			                                             <td>32B</td>
			                                             <td>85B</td>
			                                             <td>2B</td>
			                                          </tr>
			                                          <tr>
			                                            <th>75C</th>
			                                            <td>34C</td>
			                                            <td>90C</td>
			                                            <td>3C</td>
			                                          </tr>
			                                          <tr>
			                                            <th>80C</th>
			                                            <td>36C</td>
			                                            <td>95C</td>
			                                            <td>4C</td>
			                                          </tr>
			                                          <tr>
			                                             <th>70D</th>
			                                             <td>32D</td>
			                                             <td>85D</td>
			                                             <td>2D</td>
			                                          </tr>
			                                        </tbody>
			                                     </table>
			                                 </div>
                                    </div>
                                </div>
                            </div>

                            <div data-component="OAccordion" className="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="customer-service" data-component-id="3bf40127-0e7c-4e7a-bf57-7e9ad80df9fc">
                                <div className="accordion-header">
                                    <a href="#" target="_self" className="a-link a-link accordion-title js-accordion-toggle no-styling">
                                        <span className="a-icon-arrow-down-small"></span>
                                        <h3 className="a-heading-3">벨트</h3>
                                    </a>
                                </div>
                                <div className="accordion-content">
                                    <div className="accordion-inner-content">
                                        <div className="sizeguide size-75">
                                            <table>
			                                       <caption className="hidden">벨트 차트입니다.</caption>
			                                       <tbody>
			                                          <tr>
			                                             <th scope="col">
			                                                사이즈
			                                             </th>
			                                             <th scope="col">
			                                                영국
			                                             </th>
			                                             <th scope="col">
			                                                유럽
			                                             </th>
			                                             <th scope="col">
			                                                프랑스/스페인
			                                             </th>
			                                             <th scope="col">
			                                                허리둘레(CM)
			                                             </th>
			                                          </tr>
			                                          <tr>
			                                             <th scope="row">XS</th>
			                                             <td>8</td>
			                                             <td>34</td>
			                                             <td>36</td>
			                                             <td>64</td>
			                                          </tr>
			                                          <tr>
			                                             <th scope="row">S</th>
			                                             <td>10-12</td>
			                                             <td>36-38</td>
			                                             <td>38-40</td>
			                                             <td>68-72</td>
			                                          </tr>
			                                          <tr>
			                                             <th scope="row">M</th>
			                                             <td>14-16</td>
			                                             <td>40-42</td>
			                                             <td>42-44</td>
			                                             <td>76-80</td>
			                                          </tr>
			                                          <tr>
			                                             <th scope="row">L</th>
			                                             <td>18</td>
			                                             <td>44</td>
			                                             <td>46</td>
			                                             <td>84</td>
			                                          </tr>
			                                       </tbody>
			                                    </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div data-component="OAccordion" className="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="customer-service" data-component-id="fd652b78-fd11-45c2-98f2-83114ef265c1">
                                <div className="accordion-header">
                                    <a href="#" target="_self" className="a-link a-link accordion-title js-accordion-toggle no-styling">
                                        <span className="a-icon-arrow-down-small"></span>
                                        <h3 className="a-heading-3">글러브</h3> 
                                    </a>
                                </div>
                                <div className="accordion-content">
                                    <div className="accordion-inner-content">
                                         <p className="a-paragraph">
                                            종이 위에 손을 평평하게 놓고 펜을 세워 손을 따라 그려보세요. 그런 다음 손가락 마디가 시작되는 부분 아래의 너비를 측정합니다. 가장 가까운 사이즈로 반올림하세요.
                                        </p>
                                         <div className="sizeguide size-50">
		                                    <table>
		                                       <caption className="hidden">장갑 차트입니다.</caption>
		                                       <tbody>
		                                          <tr>
		                                             <th scope="row" colSpan="2" style={{"border":"0","margin-bottom":"10px"}}>
		                                                가죽 장갑
		                                             </th>
		                                          </tr>
		                                          <tr>
		                                             <th scope="col">
		                                                
		                                             </th>
		                                             <th scope="col">
		                                                손바닥 너비
		                                             </th>
		                                          </tr>
		                                          <tr>
		                                             <th scope="row">XS</th>
		                                             <td>7 cm</td>
		                                          </tr>
		                                          <tr>
		                                             <th scope="row">S</th>
		                                             <td>7.4 cm</td>
		                                          </tr>
		                                          <tr>
		                                             <th scope="row">M</th>
		                                             <td>7.8 cm</td>
		                                          </tr>
		                                          <tr>
		                                             <th scope="row">L</th>
		                                             <td>8.2 cm</td>
		                                          </tr>
		                                       </tbody>
		                                    </table>
		                                 </div>
		                                 <div className="sizeguide">
		                                    <table>
		                                       <caption className="hidden">니트장갑 및 엄지장갑 차트입니다.</caption>
		                                       <tbody>
		                                          <tr>
		                                             <th scope="row" style={{"border-bottom":"0px !important"}}>
		                                                니트 장갑 및 엄지 장갑
		                                             </th>
		                                          </tr>
		                                          <tr>
		                                             <td>
		                                                프리 사이즈
		                                             </td>
		                                          </tr>
		                                       </tbody>
		                                    </table>
		                                 </div>
                                    </div>
                                </div>
                            </div>

                            <div data-component="OAccordion" className="o-accordion" data-exclusive="data-exclusive" data-exclusive-group="customer-service" data-component-id="c1fa75f4-06bf-4a5f-a60a-5a567f9435f6">
                                <div className="accordion-header">
                                    <a href="#" target="_self" className="a-link a-link accordion-title js-accordion-toggle no-styling">
                                        <span className="a-icon-arrow-down-small"></span>
                                        <h3 className="a-heading-3">주얼리</h3> 
                                    </a>
                                </div>
                                <div className="accordion-content">
                                    <div className="accordion-inner-content">
                                        <div className="sizeguide size-50">
			                                    <table>
			                                       <caption className="hidden">원형반지 차트입니다.</caption>
			                                       <tbody>
			                                          <tr>
			                                             <th scope="row" colSpan="2" style={{"border":"0","margin-bottom":"10px"}}>
			                                                원형 반지
			                                             </th>
			                                          </tr>
			                                          <tr>
			                                             <th scope="col">
			                                                
			                                             </th>
			                                             <th scope="col">
			                                                안쪽 지름
			                                             </th>
			                                          </tr>
			                                          <tr>
			                                             <th scope="row">S</th>
			                                             <td>16.5 mm</td>
			                                          </tr>
			                                          <tr>
			                                             <th scope="row">M</th>
			                                             <td>17.8 mm</td>
			                                          </tr>
			                                          <tr>
			                                             <th scope="row">L</th>
			                                             <td>19.1 mm</td>
			                                          </tr>
			                                       </tbody>
			                                    </table>
			                                 </div>
			                                 <div className="sizeguide size-50">
			                                    <table>
			                                       <caption className="hidden">고정형 팔찌 차트입니다.</caption>
			                                       <tbody>
			                                          <tr>
			                                             <th scope="row" colSpan="2" style={{"border":"0","margin-bottom":"10px"}}>
			                                                고정형 팔찌
			                                             </th>
			                                          </tr>
			                                          <tr>
			                                             <th scope="col">
			                                                
			                                             </th>
			                                             <th scope="col">
			                                                안쪽 지름
			                                             </th>
			                                          </tr>
			                                          <tr>
			                                             <th scope="row">XS/S</th>
			                                             <td>6.3 cm</td>
			                                          </tr>
			                                          <tr>
			                                             <th scope="row">M/L</th>
			                                             <td>6.75 cm</td>
			                                          </tr>
			                                       </tbody>
			                                    </table>
			                                 </div>
			                                 <div className="sizeguide size-50">
			                                    <table>
			                                       <caption className="hidden">비정형 팔찌 차트입니다.</caption>
			                                       <tbody>
			                                          <tr>
			                                             <th scope="row" colSpan="2" style={{"border":"0","margin-bottom":"10px"}}>
			                                                비정형 팔찌
			                                             </th>
			                                          </tr>
			                                          <tr>
			                                             <th scope="col">
			                                                
			                                             </th>
			                                             <th scope="col">
			                                                안쪽 둘레
			                                             </th>
			                                          </tr>
			                                          <tr>
			                                             <th scope="row">XS/S</th>
			                                             <td>18 cm</td>
			                                          </tr>
			                                          <tr>
			                                             <th scope="row">M/L</th>
			                                             <td>20 cm</td>
			                                          </tr>
			                                       </tbody>
			                                    </table>
			                                 </div>
                                    </div>
                                </div>
                            </div>


                            <div data-component="OAccordion" className="o-accordion is-visible" data-exclusive="data-exclusive" data-exclusive-group="customer-service" data-component-id="c1fa75f4-06bf-4a5f-a60a-5a567f9435f6">
                                <div className="accordion-header">
                                    <a href="#" target="_self" className="a-link a-link accordion-title js-accordion-toggle no-styling">
                                        <span className="a-icon-arrow-down-small"></span>
                                        <h3 className="a-heading-3">삭스</h3> 
                                    </a>
                                </div>
                                <div className="accordion-content">
                                    <div className="accordion-inner-content">
                                        <div className="sizeguide size-50">
			                                    <table>
			                                       <caption className="hidden">삭스 차트입니다.</caption>
			                                       <tbody>
			                                          <tr>
			                                             <th scope="row" colSpan="2" style={{"border":"0","margin-bottom":"10px"}}>
			                                                삭스
			                                             </th>
			                                          </tr>
			                                          <tr>
			                                             <th scope="col">
			                                                사이즈
			                                             </th>
			                                             <th scope="col">
			                                                발 길이
			                                             </th>
			                                          </tr>
			                                          <tr>
			                                             <th scope="row">36/38</th>
			                                             <td>23-24 cm</td>
			                                          </tr>
			                                          <tr>
			                                             <th scope="row">39/41</th>
			                                             <td>25-26 cm</td>
			                                          </tr>
			                                       </tbody>
			                                    </table>
			                                 </div>
                                    </div>
                                </div>
                            </div>                            
                        </div>

                    </div>
            </div>
        </div>
        <HomeButton/>
        </>
 
 )
}

export default PageContent;