import { nanoid } from "nanoid";

import high from "../../../assets/images/icon.png"
import warrany from "../../../assets/images/icon (1).png"
import free from "../../../assets/images/Vector.png"
import support from "../../../assets/images/2891214031638194523 1.png"

const FeaturesData = [
    {
        id: nanoid(4),
        img: high,
        title: "High Quality",
        description: "Crafted from top materials"
    },
    {
        id: nanoid(4),
        img: warrany,
        title: "Warrany Protection",
        description: "Over 2 years"
    },
    {
        id: nanoid(4),
        img: free,
        title: "Free Shipping",
        description: "Order over 150 $"
    },
    {
        id: nanoid(4),
        img: support,
        title: "24 / 7 Support",
        description: "Dedicated support"
    },
]

export default FeaturesData