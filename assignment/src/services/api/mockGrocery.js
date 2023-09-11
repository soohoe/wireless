const fruits = [
    {
      id: 1,
      price: 40,
      type: "FRUIT",
      weight: "1000g",
      name: "Banana",
      image: require("../../../assets/images/banana.png"),
      color: "#ffffb1",
      desc: "Deliciously sweet and yellow, bananas are a great source of energy and potassium. They're perfect for snacking or adding to smoothies.",
    },
    {
      id: 2,
      name: "Apple",
      type: "FRUIT",
      image: require("../../../assets/images/apple.png"),
      price: 150,
      weight: "500g",
      color: "#ffb1b1",
      desc: "Crisp and refreshing, apples are a classic favorite. They're a healthy choice for a quick snack and come in a variety of flavors.",
    },
    {
      id: 3,
      name: "Avocado",
      type: "FRUIT",
      image: require("../../../assets/images/avocado.png"),
      price: 400,
      weight: "500g",
      color: "#a7ffa7",
      desc: "Creamy and rich, avocados are packed with good fats and nutrients. They're perfect for making guacamole or adding to salads.",
    },
    {
      id: 4,
      name: "Pomegranate",
      type: "FRUIT",
      image: require("../../../assets/images/pomegranate.png"),
      price: 360,
      weight: "1000g",
      color: "#ffa7a7",
      desc: "Bursting with juicy seeds, pomegranates are known for their antioxidant properties. They add a unique and tangy flavor to your diet.",
    },
    {
      id: 5,
      name: "Kiwi",
      type: "FRUIT",
      image: require("../../../assets/images/kiwi.png"),
      price: 150,
      weight: "500g",
      color: "#a7ffa7",
      desc: "Small but packed with vitamin C, kiwis have a tangy-sweet taste. They make a great addition to fruit salads and desserts.",
    },
    {
      id: 6,
      name: "Coconut",
      type: "FRUIT",
      image: require("../../../assets/images/coconut.png"),
      price: 50,
      weight: "1 unit",
      color: "#edb9b9",
      desc: "Coconuts offer a taste of the tropics with their sweet, nutty flavor. You can enjoy the refreshing coconut water and scoop out the delicious meat.",
    },
    {
      id: 7,
      name: "Lime",
      type: "FRUIT",
      image: require("../../../assets/images/lime.png"),
      price: 50,
      weight: "500g",
      color: "#ebffb1",
      desc: "Limes add zesty and tangy flavors to your dishes and beverages. They're a must-have for cocktails, marinades, and Mexican cuisine.",
    },
    {
      id: 8,
      name: "Pineapple",
      type: "FRUIT",
      image: require("../../../assets/images/pineapple.png"),
      price: 60,
      weight: "1 unit",
      color: "#ffffb1",
      desc: "Pineapples are a tropical delight with their sweet and juicy flesh. They're great for snacking, making fruit salads, or adding a tropical twist to your meals.",
    },
    {
      id: 9,
      name: "Green Apple",
      image: require("../../../assets/images/green-apple.png"),
      price: 400,
      type: "FRUIT",
      weight: "1000g",
      color: "#a7ffa7",
      desc: "These apples have a tart and crisp taste. They're excellent for making pies, applesauce, or simply enjoying as a healthy snack",
    },
    {
      id: 10,
      name: "Grapes",
      image: require("../../../assets/images/grape.png"),
      price: 100,
      type: "FRUIT",
      weight: "1000g",
      color: "#ffa7ff",
      desc: "Grapes come in various colors and are sweet, juicy, and convenient to snack on. They're also great for making wine and jams.",
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
      desc: "Carrots are crunchy and slightly sweet. They're a versatile vegetable, perfect for salads, snacking, and adding to various dishes.",
    },
    {
      id: 2,
      name: "Broccoli",
      image: require("../../../assets/images/broccoli.png"),
      price: 1.49,
      type: "VEGETABLE",
      weight: "300g",
      color: "#a7ffa7",
      desc: "Broccoli is a nutritious green vegetable with a mild, earthy taste. It's great steamed, roasted, or added to stir-fries.",
    },
    {
      id: 3,
      name: "Tomato",
      image: require("../../../assets/images/tomato.png"),
      price: 2.29,
      type: "VEGETABLE",
      weight: "400g",
      color: "#ffa7a7",
      desc: "Tomatoes are juicy and versatile. They add flavor to sandwiches, salads, and pasta dishes. They're also the base for many sauces.",
    },
    {
      id: 4,
      name: "Spinach",
      image: require("../../../assets/images/spinach.png"),
      price: 1.79,
      type: "VEGETABLE",
      weight: "200g",
      color: "#edb9b9",
      desc: "Spinach is a dark leafy green with a mild taste. It's perfect for salads, smoothies, and as a nutritious addition to cooked dishes.",
    },
    {
      id: 5,
      name: "Bell Pepper",
      image: require("../../../assets/images/bell-pepper.png"),
      price: 1.99,
      type: "VEGETABLE",
      weight: "250g",
      color: "#ebffb1",
      desc: "Bell peppers come in vibrant colors and have a sweet and crunchy texture. They're great for stuffing, grilling, or adding to fajitas.",
    },
    {
      id: 6,
      name: "Zucchini",
      image: require("../../../assets/images/zucchini.png"),
      price: 0.89,
      type: "VEGETABLE",
      weight: "300g",
      color: "#ffffb1",
      desc: "Zucchini is a versatile summer squash with a mild flavor. You can use it in stir-fries, sautés, or even make zucchini noodles.",
    },
    {
      id: 7,
      name: "Cucumber",
      image: require("../../../assets/images/cucumber.png"),
      price: 0.69,
      type: "VEGETABLE",
      weight: "200g",
      color: "#ffb1b1",
      desc: "Cucumbers are crisp and refreshing. They're perfect for salads, sandwiches, or simply sliced for a healthy snack.",
    },
    {
      id: 8,
      name: "Lettuce",
      image: require("../../../assets/images/lettuce.png"),
      price: 1.29,
      type: "VEGETABLE",
      weight: "400g",
      color: "#a7ffa7",
      desc: "Lettuce is a staple in salads and sandwiches. It has a mild, leafy taste and adds a refreshing crunch to your dishes.",
    },
    {
      id: 9,
      name: "Onion",
      image: require("../../../assets/images/onion.png"),
      price: 0.79,
      type: "VEGETABLE",
      weight: "500g",
      color: "#ffa7ff",
      desc: "Onions are aromatic and add depth of flavor to many recipes. They're essential for soups, stews, and various savory dishes.",
    },
    {
      id: 10,
      name: "Potato",
      image: require("../../../assets/images/potato.png"),
      price: 0.69,
      type: "VEGETABLE",
      weight: "800g",
      color: "#edb9b9",
      desc: "Potatoes are a versatile staple, suitable for mashing, frying, baking, or boiling. They're a comfort food with endless culinary possibilities.",
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
      setTimeout(() => {
        try {
          const data = vegetables
            ? vegetables
            : fruits.filter((d) =>
                d.name.toLowerCase().includes(searchText.toLowerCase())
              );
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
  