export const Mock = [
  {
    id: 1,
    name: "Bella Vista Hotel",
    description: "A luxurious hotel with panoramic ocean views",
    location: "Coastal city",
    price: 200,
    availability: true,
    reviews: [
      { author: "Marco", comment: "Excellent service and spacious rooms" },
      { author: "Giulia", comment: "Friendly staff and delicious breakfast" },
    ],
    imageUrl:
      "https://img.staticmb.com/mbcontent/images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg",
    amenities: ["Free Wi-Fi", "Swimming pool", "Fitness center"],
    rating: 4.5,
    contact: {
      phone: "+1234567890",
      email: "info@bellavista.com",
    },
    website: "https://www.bellavista.com",
    checkInTime: "15:00",
    checkOutTime: "11:00",
    nearbyAttractions: ["Beach", "Shopping mall", "Fine dining"],
    roomsAvailable: [
      { type: "Standard", price: 200, quantity: 5 },
      { type: "Deluxe", price: 300, quantity: 3 },
    ],
    featured: true,
  },
  {
    id: 2,
    name: "Mountain Green Hotel",
    description: "A cozy hotel nestled in the mountains",
    location: "Mountain area",
    price: 150,
    availability: false,
    reviews: [
      { author: "Luca", comment: "Quiet and relaxing atmosphere" },
      { author: "Simona", comment: "Clean rooms and friendly staff" },
    ],
    imageUrl:
      "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
    amenities: ["Free parking", "Restaurant", "Spa"],
    rating: 4.2,
    contact: {
      phone: "+9876543210",
      email: "info@mountaingreen.com",
    },
    website: "https://www.mountaingreen.com",
    checkInTime: "14:00",
    checkOutTime: "12:00",
    nearbyAttractions: ["Hiking trails", "Ski resort", "Nature reserve"],
    roomsAvailable: [
      { type: "Standard", price: 150, quantity: 8 },
      { type: "Suite", price: 250, quantity: 2 },
    ],
    featured: false,
  },
];

export const Users = [
  {
    username: "stefano",
    password: "stefano",
    name: "Test1",
    email: "test1@gmail.com",
  },
  {
    username: "username",
    password: "password",
    name: "Test2",
    email: "test2@gmail.com",
  },
];

/* export const STORAGE_KEYS = {
  USER: "router_prj_user",
}; */
