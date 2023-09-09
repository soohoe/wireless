const fruits = [
    {
      id: 1,
      price: 40,
      type: "FRUIT",
      weight: "1000g",
      name: "Banana",
      image: require("../../../assets/images/banana.png"),
      color: "#ffffb1",
    },
    {
      id: 2,
      name: "Apple",
      type: "FRUIT",
      image: require("../../../assets/images/apple.png"),
      price: 150,
      weight: "500g",
      color: "#ffb1b1",
    },
    {
      id: 3,
      name: "Avocado",
      type: "FRUIT",
      image: require("../../../assets/images/avocado.png"),
      price: 400,
      weight: "500g",
      color: "#a7ffa7",
    },
    {
      id: 4,
      name: "Pomegranate",
      type: "FRUIT",
      image: require("../../../assets/images/pomegranate.png"),
      price: 360,
      weight: "1000g",
      color: "#ffa7a7",
    },
    {
      id: 5,
      name: "Kiwi",
      type: "FRUIT",
      image: require("../../../assets/images/kiwi.png"),
      price: 150,
      weight: "500g",
      color: "#a7ffa7",
    },
    {
      id: 6,
      name: "Coconut",
      type: "FRUIT",
      image: require("../../../assets/images/coconut.png"),
      price: 50,
      weight: "1 unit",
      color: "#edb9b9",
    },
    {
      id: 7,
      name: "Lime",
      type: "FRUIT",
      image: require("../../../assets/images/lime.png"),
      price: 50,
      weight: "500g",
      color: "#ebffb1",
    },
    {
      id: 8,
      name: "Pineapple",
      type: "FRUIT",
      image: require("../../../assets/images/pineapple.png"),
      price: 60,
      weight: "1 unit",
      color: "#ffffb1",
    },
    {
      id: 9,
      name: "Green Apple",
      image: require("../../../assets/images/green-apple.png"),
      price: 400,
      type: "FRUIT",
      weight: "1000g",
      color: "#a7ffa7",
    },
    {
      id: 10,
      name: "Grapes",
      image: require("../../../assets/images/grape.png"),
      price: 100,
      type: "FRUIT",
      weight: "1000g",
      color: "#ffa7ff",
    },
  ];

  const vegetables = [
    {
      id: 1,
      name: "Carrot",
      image: require("../../../assets/images/carrot.png"),
      price: 0.99,
      type: "VEGETABLE",
      weight: "500g",
      color: "#ffb1b1",
    },
    {
      id: 2,
      name: "Broccoli",
      image: require("../../../assets/images/broccoli.png"),
      price: 1.49,
      type: "VEGETABLE",
      weight: "300g",
      color: "#a7ffa7",
    },
    {
      id: 3,
      name: "Tomato",
      image: require("../../../assets/images/tomato.png"),
      price: 2.29,
      type: "VEGETABLE",
      weight: "400g",
      color: "#ffa7a7",
    },
    {
      id: 4,
      name: "Spinach",
      image: require("../../../assets/images/spinach.png"),
      price: 1.79,
      type: "VEGETABLE",
      weight: "200g",
      color: "#edb9b9",
    },
    {
      id: 5,
      name: "Bell Pepper",
      image: require("../../../assets/images/bell-pepper.png"),
      price: 1.99,
      type: "VEGETABLE",
      weight: "250g",
      color: "#ebffb1",
    },
    {
      id: 6,
      name: "Zucchini",
      image: require("../../../assets/images/zucchini.png"),
      price: 0.89,
      type: "VEGETABLE",
      weight: "300g",
      color: "#ffffb1",
    },
    {
      id: 7,
      name: "Cucumber",
      image: require("../../../assets/images/cucumber.png"),
      price: 0.69,
      type: "VEGETABLE",
      weight: "200g",
      color: "#ffb1b1",
    },
    {
      id: 8,
      name: "Lettuce",
      image: require("../../../assets/images/lettuce.png"),
      price: 1.29,
      type: "VEGETABLE",
      weight: "400g",
      color: "#a7ffa7",
    },
    {
      id: 9,
      name: "Onion",
      image: require("../../../assets/images/onion.png"),
      price: 0.79,
      type: "VEGETABLE",
      weight: "500g",
      color: "#ffa7ff",
    },
    {
      id: 10,
      name: "Potato",
      image: require("../../../assets/images/potato.png"),
      price: 0.69,
      type: "VEGETABLE",
      weight: "800g",
      color: "#edb9b9",
    },
  ];
  

  
  export const getGroceryItems = (searchText = "", type) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const data = fruits
            .filter((d) =>
              d.name.toLowerCase().includes(searchText.toLowerCase())
            )
            .filter((f) => f.type === type);
          resolve({
            data: data,
            total: data.length,
          });
        } catch (err) {
          reject(err);
        }
      }, 250);
    });
  };
  
  export const getGroceryItem = (id = "") => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve({
            data: fruits.find((f) => f.id == id),
          });
        } catch (err) {
          reject(err);
        }
      }, 0);
    });
  };
  