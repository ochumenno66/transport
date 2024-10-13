const data = [
  {
    id: 1,
    type: "car",
    brand: "Audi",
    doors: 4,
    price: 4300000,
    image:
      "<https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg>",
  },
  {
    id: 2,
    type: "car",
    brand: "Mercedes-Benz",
    doors: 4,
    price: 2800000,
    image:
      "<https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg>",
  },
  {
    id: 3,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 210,
    price: 1300000,
    image:
      "<https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg>",
  },
  {
    id: 4,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 220,
    price: 1400000,
    image:
      "<https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png>",
  },
];

//Создаем общий контейнер
const mainContainer = document.createElement("div");
mainContainer.classList.add("mainContainer");
document.body.appendChild(mainContainer);

const header = document.createElement("h2");
header.textContent = "МОДЕЛЬНЫЙ РЯД";
header.classList.add("header");
mainContainer.appendChild(header);

const main = document.createElement("div");
main.classList.add("main");
mainContainer.appendChild(main);

//!!! ДЗ НАПИСАНИЕ КОДА !!!
//создать класс Transport, у него есть свойства: type, price, brand и два метода getInfo() и getPrice() ;
class Transport {
  constructor(type, price, brand) {
    this.type = type;
    this.price = price;
    this.brand = brand;
  }

  getInfo() {
    return `${this.type}, ${this.brand}`;
  }

  getPrice() {
    return this.price;
  }
}

//создать класс Car, который наследует от Transport. Этот класс должен содержать метод getDoorsCount() , который возвращает количество дверей;
class Car extends Transport {
  constructor(type, price, brand, doors) {
    super(type, price, brand);
    this.doors = doors;
  }
  getDoorsCount() {
    return this.doors;
  }
}

//создать класс Bike, который наследует от Transport. Этот класс должен содержать метод getMaxSpeed(), который возвращает максимальную скорость мотоцикла.
class Bike extends Transport {
  constructor(type, price, brand, maxSpeed) {
    super(type, price, brand);
    this.maxSpeed = maxSpeed;
  }
  getMaxSpeed() {
    return this.maxSpeed;
  }
}

// цикл чтобы узнать транспорт car или bike
const transports = data.map((item) => {
  if (item.type == "car") {
    return new Car(item.type, item.price, item.brand, item.doors);
  } else {
    return new Bike(item.type, item.price, item.brand, item.maxSpeed);
  }
});

// выводим информацию о транспорте в консоль
transports.forEach((transport) => {
  // выводит тип и марку
  console.log(transport.getInfo());

  // выводит цену
  console.log(`Price: ${transport.getPrice()}`);

  if (transport instanceof Car) {
    // Выводит количество дверей
    console.log(`Doors: ${transport.getDoorsCount()}`);
  }

  if (transport instanceof Bike) {
    console.log(`maxSpeed: ${transport.getMaxSpeed()}`);
  }
});

//контейнер для элементов чтобы вывести на экран
data.forEach((elem, inform) => {
  const containerElem = document.createElement("div");
  containerElem.classList.add("element");
  main.appendChild(containerElem);

  //выводим фотографию
  const dataImage = document.createElement("img");
  dataImage.classList.add("img");
  dataImage.src = elem.image.replace(/<|>/g, "");
  containerElem.appendChild(dataImage);

  //добавляем параграф
  const info = document.createElement("p");
  const price = document.createElement("p");
  const doors = document.createElement("p");
  const maxSpeed = document.createElement("p");

  // класс
  info.classList.add("p");
  price.classList.add("p");
  doors.classList.add("p");
  maxSpeed.classList.add("p");

  containerElem.appendChild(info);
  containerElem.appendChild(price);
  containerElem.appendChild(doors);
  containerElem.appendChild(maxSpeed);

  const transport = transports[inform];
  info.textContent = `${transport.getInfo()}`;
  price.textContent = `Price: ${transport.getPrice()}`;

  if (transport instanceof Car) {
    // выводит количество дверей
    doors.textContent = `Doors: ${transport.getDoorsCount()}`;
  }

  if (transport instanceof Bike) {
    //выводим максимальную скорость
    maxSpeed.textContent = `maxSpeed: ${transport.getMaxSpeed()}`;
  }
});
