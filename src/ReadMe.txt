1. Error Page
when er enter wrong url, you will get an error thrown by server, it instructs us to use custom error page.
That why create a component which is basically an static error page whenever user opened wrong URL.
U can achieve this by using errorElemnt prop in the routes(objects) u created using createBrowserRouter function in app.js

2.Programatically Navigating
Here we are using Link tag which internally use <a> tag to navigate to other pages from one page.
But what if if you want to navigate when based event handling like button is clicked or onFocus or onBlue,after particular time.
U need to use useNavigate hook. 
import {useNavigate} from "react-router-dom";
const navigate = useNavigate();
function oneventchange(){
    naviagte("/products");
}
<button onClick={oneventchange}>products page</button>

3.<a/> vs <link/> vs <NavLink/>
Both link and NavLink uses <a> internally so foe stling u should refer these to tags as a only.
<a href="/product">Product Page</a>
<Link to="/product">Product Page</Link>
The Link is internal component of react-router-dom acts same as <a> tag.
but the difference is the <a> tag will reload the application which is not efficent but link wont do it.
Coming to NavLink, we can use NavLink tag to know if the page is active or not.
The NavLink will get an object for className prop using it u can know that page associated to this tag is active or not.
the className prop in this tag will take function as argument, in function u will recieve the object automativcally and u will destructure the needed 
property called isActive from that object and determine if the page is active or not. 

<NavLink to="/products" className={({isActive})=>{isActive?"active":undefined}}>Products</NavLink>

4.Absolute Path VS Relative Path

Absolute Path:
Always Starts with Slash /.
The roues in app.js are absolute.
In absolute path child routes should always have parent route in first.
if parent route is /parent and for product route it will be /parent/product.
That is why in app.js / is parent and /products for products route.
Relative Path:
Dont have slash in starting,only direct name.
Relative paths will always be added to the current url and be navigated.
No need of parent in starting.
for example in this projectwhen u are in products page,and click on product it will take productPage by adding that dynamic value(eg: selected product id) to url.

For Link tag u have Relative prop where u can say it should be realtive to path or route (clarirty? watch 334).