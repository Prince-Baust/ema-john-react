import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Review from "./Components/Review/Review";
import Inventory from "./Components/Inventory/Inventory";
import NotFound from "./Components/NotFound/NotFound";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";

function App() {
    return (
        <div>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path='/'>
                        <Shop/>
                    </Route>
                    <Route path='/shop'>
                        <Shop/>
                    </Route>
                    <Route path='/review'>
                        <Review/>
                    </Route>
                    <Route path='/inventory'>
                        <Inventory/>
                    </Route>
                    <Route path="/placeorder">
                        <PlaceOrder/>
                    </Route>
                    <Route>
                        <NotFound/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
