import { nanoid } from "nanoid";
import firstImg from "../../../assets/images/firstImg.jpg";
import secondImg from "../../../assets/images/secondImg.jpg";
import thirdImg from "../../../assets/images/thirdImg.jpg";
import fourthImg from "../../../assets/images/fourthImg.jpg";
import fifthImg from "../../../assets/images/fifthImg.jpg";
import sixthImg from "../../../assets/images/sixthImg.jpg";

import stars from "../../../assets/images/stars.png";

const NewData = [
  {
    id: nanoid(4),
    title: "Shiny Dress",
    views: "(4.1k) Customer Reviews",
    price: "$95.50",
    position: "Almost Sold Out",
    img: firstImg,
    stars: stars,
  },
  {
    id: nanoid(4),
    title: "Long Dress",
    views: "(5.5k) Customer Reviews",
    price: "$85.50",
    position: "Almost Sold Out",
    img: secondImg,
    stars: stars,
  },
  {
    id: nanoid(4),
    title: "Full Sweater",
    views: "(3.6k) Customer Reviews",
    price: "$125",
    position: "Almost Sold Out",
    img: thirdImg,
    stars: stars,
  },
  {
    id: nanoid(4),
    title: "White Dress",
    views: "(7.1k) Customer Reviews",
    price: "$90",
    position: "Almost Sold Out",
    img: fourthImg,
    stars: stars,
  },
  {
    id: nanoid(4),
    title: "Colorful Dress",
    views: "(4.7k) Customer Reviews",
    price: "$95",
    position: "Almost Sold Out",
    img: fifthImg,
    stars: stars,
  },
  {
    id: nanoid(4),
    title: "White Shirt",
    views: "(5.1k) Customer Reviews",
    price: "$55",
    position: "Almost Sold Out",
    img: sixthImg,
    stars: stars,
  },
];
export default NewData;
