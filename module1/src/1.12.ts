interface Developer<T, X = null> {
  name: string;
  computer: {
    brand: string;
    model: string;
    price: number;
    releaseYear: number;
  };
  smartWatch: T;
  bike?: X;
}
interface Apple {
  brand: "iphone";
  price: 1000;
}
const poorDeveloper: Developer<Apple> = {
  name: "rakib",
  computer: {
    brand: "lenovo",
    model: "ht101",
    price: 20000,
    releaseYear: 2001,
  },
  smartWatch: {
    brand: "iphone",
    price: 1000,
  },
};

interface Samsung {
  brand: string;
  price: number;
  model: string;
  heartTrack: boolean;
  sleepTrack: boolean;
}

interface Yamaha {
  brand: string;
  price: number;
}
const richDeveloper: Developer<Samsung, Yamaha> = {
  name: "rakib",
  computer: {
    brand: "lenovo",
    model: "ht101",
    price: 20000,
    releaseYear: 2001,
  },
  smartWatch: {
    brand: "iphone",
    price: 1000,
    model: "ul122",
    heartTrack: true,
    sleepTrack: false,
  },
  bike: {
    brand: "yamaha",
    price: 20000,
  },
};
