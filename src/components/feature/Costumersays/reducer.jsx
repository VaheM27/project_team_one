import { nanoid } from "nanoid";

import img5 from "../../../assets/images/image (5).png";
import img6 from "../../../assets/images/image (6).png";
import img8 from "../../../assets/images/image (8).png";
import rating from '../../../assets/images/stars.png'

export const initialState = {
  images: [
    {
      id: nanoid(4),
      image: img5,
      quote:
        "'You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!'",
      name: "John Doe",
      profession: "CEO, Example Corp",
      rating: rating,
    },
    {
      id: nanoid(4),
      image: img6,
      quote:
        "'You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!'",
      name: "Jane Smith",
      profession: "Marketing Director, ",
      rating: rating,
    },
    {
      id: nanoid(4),
      image: img8,
      quote:
        "'You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!'",
      name: "Emily Johnson",
      profession: "Product Manager",
      rating: rating,
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
