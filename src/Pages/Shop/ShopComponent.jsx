import Features from "../../components/feature/Features/Features"
import FollowUs from "../../components/feature/FollowUs/FollowUs"
import Peaky from "../../components/feature/Peaky/Peaky"
import LastSec from "../../components/LastSec/LastSec"
import ShopPage from "./Shop"

const ShopComponent= () => {
    return (
        <div>
            <ShopPage />
            <Peaky />
            <Features />
            <FollowUs />
            <LastSec />
        </div>
    )
}

export default ShopComponent