{
  //

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      price: number;
      model: string;
    };
    smartWatch: T;
    bike?: X;
  }

  const developer1: Developer<{ brand: string; price: number }, null> = {
    name: "ra",
    computer: {
      brand: "samsung",
      price: 101010,
      model: "s20",
    },
    smartWatch: {
      brand: "apple",
      price: 1010,
    },
  };
  interface HP {
    brand: string;
    price: number;
    model: string;
  }
  interface Yamaha {
    brand: string;
    price: number;
    version: string;
    releaseYear: number;
  }
  const developer2: Developer<HP, Yamaha> = {
    name: "saki",
    computer: {
      brand: "hp",
      price: 1600,
      model: "h31",
    },
    smartWatch: {
      brand: "xiomi",
      price: 1600,
      model: "x50",
    },
    bike: {
      brand: "yamaha",
      price: 220000,
      version: "fz",
      releaseYear: 2224,
    },
  };
  //
}
