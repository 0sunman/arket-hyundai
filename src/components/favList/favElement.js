import ProductDescription from "./components/ProductDescription";
import ProductSizePicker from "./components/ProductSizePicker";

const RemoveButton = () => (
<button className="removeBtn">
    <svg class="IconWrapper-module--icon__2Xg1f IconWrapper-module--normal__2pGtD" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" focusable="false">
        <path d="M12.915 1.728C11.627 0.991999 10.247 0.600999 8.729 0.600999C7.188 0.600999 5.785 0.991999 4.52 1.751C3.232 2.51 2.22 3.522 1.484 4.81C0.748 6.098 0.38 7.478 0.38 8.95C0.38 10.468 0.748 11.848 1.507 13.136C2.243 14.424 3.255 15.459 4.543 16.195C5.831 16.954 7.211 17.322 8.729 17.322C10.247 17.322 11.627 16.954 12.915 16.195C14.18 15.459 15.192 14.424 15.951 13.136C16.687 11.848 17.078 10.468 17.078 8.95C17.078 7.432 16.687 6.052 15.951 4.764C15.215 3.499 14.203 2.487 12.915 1.728ZM12.133 14.815C11.098 15.413 9.971 15.712 8.729 15.712C7.487 15.712 6.337 15.413 5.325 14.792C4.29 14.194 3.485 13.366 2.887 12.331C2.289 11.296 1.99 10.169 1.99 8.95C1.99 7.754 2.289 6.65 2.91 5.615C3.508 4.58 4.336 3.752 5.371 3.131C6.383 2.533 7.51 2.211 8.729 2.211C9.948 2.211 11.075 2.533 12.11 3.131C13.122 3.729 13.95 4.557 14.548 5.569C15.146 6.604 15.468 7.731 15.468 8.95C15.468 10.192 15.169 11.342 14.571 12.377C13.973 13.412 13.145 14.217 12.133 14.815ZM12.984 5.822L11.857 4.695L8.729 7.823L5.601 4.695L4.474 5.822L7.602 8.95L4.474 12.078L5.601 13.205L8.729 10.077L11.857 13.205L12.984 12.078L9.856 8.95L12.984 5.822Z"></path>
    </svg>
    <span class="BodyText-module--general__2yKZb ScreenReaderOnlyText-module--container__2mGga BodyText-module--meta__12zVc">favorites.page.remove</span>
</button>
)
const ProductImage = () => (
<div className="listGrid__element---image">
    <img src="https://lp.arket.com/app006prod?set=key[resolve.width],value[251]&set=key[resolve.height],value[10000]&set=key[resolve.allowImageUpscaling],value[0]&set=key[resolve.format],value[jpeg]&set=source[/c6/58/c6584d2e825f51b656bd7a289ac7d09b11815eb6.jpg],origin[dam],type[DESCRIPTIVESTILLLIFE],device[hdpi],quality[80],ImageVersion[1]&call=url[file:/product/fullscreen]&call=url[file:/product/dynamic.chain]"/>
</div>
)


const FavElement = ({id, image, description, isSelectable, isClicked}) => {
    return (<li>
    <div class='listGrid__element'>
        <RemoveButton/>
        <ProductImage image={image}/>
        <ProductDescription description={description}/>
        <ProductSizePicker id={id} isSelectable={isSelectable} isClicked={isClicked}/>
    </div>
</li>)
}

export default FavElement;