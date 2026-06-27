import phoneImg from '../assets/product_phone.png';
import laptopImg from '../assets/product_laptop.png';
import shoesImg from '../assets/product_shoes.png';
import watchImg from '../assets/product_watch.png';

export const products = [
  {
    id: 'p1',
    name: 'NeoPhone 15 Pro (128GB, Stealth Gray)',
    category: 'Mobiles',
    image: phoneImg,
    price: 79999,
    originalPrice: 89999,
    discount: 11,
    rating: 4.6,
    ratingCount: 12450,
    isAssured: true,
    deliveryDays: 1,
    description: 'Experience the pinnacle of mobile technology with the NeoPhone 15 Pro. Featuring a cutting-edge processor, a bezel-less dynamic AMOLED display, and a triple-lens pro camera system that redefines mobile photography.',
    highlights: [
      '128 GB ROM | 8 GB RAM',
      '17.02 cm (6.7 inch) Super Retina XDR Display',
      '48MP + 12MP + 12MP Triple Primary Camera | 12MP Front Camera',
      'Next-Gen A17 Bionic Chip with 6-Core GPU',
      'Titanium Design with Ceramic Shield front'
    ],
    specs: {
      'In The Box': 'Handset, USB-C Charge Cable, Documentation',
      'Model Number': 'NP15P-SG',
      'Model Name': 'NeoPhone 15 Pro',
      'Color': 'Stealth Gray',
      'Display Size': '17.02 cm (6.7 inch)',
      'Resolution': '2796 x 1290 Pixels',
      'Processor Type': 'A17 Bionic Chip',
      'Internal Storage': '128 GB'
    }
  },
  {
    id: 'p2',
    name: 'ZenBook Aero 14 Intel Core i7 (16GB/512GB SSD/Windows 11)',
    category: 'Electronics',
    image: laptopImg,
    price: 64990,
    originalPrice: 84990,
    discount: 23,
    rating: 4.4,
    ratingCount: 3820,
    isAssured: true,
    deliveryDays: 2,
    description: 'The ZenBook Aero 14 combines powerful performance with incredible portability. With a sleek metallic body, a stunning color-accurate 2K display, and long-lasting battery life, it is the ultimate productivity companion.',
    highlights: [
      'Intel Core i7 12th Gen Processor',
      '16 GB DDR5 RAM | 512 GB SSD Storage',
      '35.56 cm (14 inch) 2K IPS Anti-Glare Display',
      'Pre-installed Windows 11 Home',
      'Sleek Aluminum Body | Weight: 1.29 kg'
    ],
    specs: {
      'In The Box': 'Laptop, Power Adapter, User Guide',
      'Model Number': 'ZB-A14-I7',
      'Model Name': 'ZenBook Aero 14',
      'Processor': 'Intel Core i7 (12th Gen)',
      'RAM': '16 GB LPDDR5',
      'SSD Capacity': '512 GB',
      'Operating System': 'Windows 11 Home',
      'Screen Size': '35.56 cm (14 inch)'
    }
  },
  {
    id: 'p3',
    name: 'SpeedRun Pro Lightweight Running Shoes (Vibrant Blue/Orange)',
    category: 'Fashion',
    image: shoesImg,
    price: 2499,
    originalPrice: 4999,
    discount: 50,
    rating: 4.2,
    ratingCount: 9540,
    isAssured: false,
    deliveryDays: 3,
    description: 'Dominate your daily runs with the SpeedRun Pro. Designed with breathable mesh upper, high-rebound cushioning, and a durable traction outsole to provide maximum comfort and responsiveness with every stride.',
    highlights: [
      'Type: Running / Sports Shoes',
      'Outer Material: Breathable Mesh & Knit',
      'Sole Material: High-Bounce EVA & Rubber Outsole',
      'Cushioned footbed for premium shock absorption',
      'Vibrant dual-color design'
    ],
    specs: {
      'Type': 'Sports / Running',
      'Sole Material': 'Rubber & EVA',
      'Weight': '280g (Single Shoe)',
      'Closure': 'Lace-Up',
      'Ideal For': 'Men & Women'
    }
  },
  {
    id: 'p4',
    name: 'PulseFit Active Smartwatch (Full Touch, GPS, Black Strap)',
    category: 'Electronics',
    image: watchImg,
    price: 3499,
    originalPrice: 6999,
    discount: 50,
    rating: 4.3,
    ratingCount: 18240,
    isAssured: true,
    deliveryDays: 1,
    description: 'Track your health and fitness goals effortlessly with the PulseFit Active Smartwatch. Featuring 24/7 heart rate monitoring, built-in GPS, multiple sports modes, and a brilliant high-contrast touchscreen.',
    highlights: [
      '3.55 cm (1.4 inch) HD Always-On AMOLED Display',
      'Built-in GPS & Multi-Sport Tracking',
      'Heart Rate, SpO2 & Sleep Quality Monitoring',
      'Up to 10 Days Battery Life on a single charge',
      'IP68 Water Resistant | Smart Notifications'
    ],
    specs: {
      'In The Box': 'Smartwatch, Magnetic Charger, User Manual',
      'Dial Color': 'Black',
      'Strap Material': 'Silicone',
      'Compatible OS': 'Android & iOS',
      'Water Resistant': 'Yes, IP68',
      'Battery Life': 'Up to 10 Days'
    }
  },
  {
    id: 'p5',
    name: 'NeoPhone Lite 5G (128GB, Arctic White)',
    category: 'Mobiles',
    image: phoneImg,
    price: 19999,
    originalPrice: 24999,
    discount: 20,
    rating: 4.3,
    ratingCount: 45010,
    isAssured: true,
    deliveryDays: 2,
    description: 'High-speed 5G performance at an unbeatable price. The NeoPhone Lite features a smooth 120Hz display, dual rear camera, and a massive 5000mAh battery that keeps you going all day.',
    highlights: [
      '128 GB ROM | 6 GB RAM',
      '16.76 cm (6.6 inch) Full HD+ 120Hz Display',
      '50MP + 2MP Dual Camera | 16MP Front Camera',
      'Snapdragon 4 Gen 2 Octa-Core Processor',
      '5000 mAh Battery with 33W Fast Charging'
    ],
    specs: {
      'In The Box': 'Handset, Adapter, USB Cable, TPU Case',
      'Model Number': 'NPL-5G-W',
      'Model Name': 'NeoPhone Lite 5G',
      'Color': 'Arctic White',
      'Processor Type': 'Snapdragon 4 Gen 2',
      'Internal Storage': '128 GB',
      'Battery Capacity': '5000 mAh'
    }
  },
  {
    id: 'p6',
    name: 'AeroSound Pro Hybrid ANC Wireless Headphones',
    category: 'Electronics',
    image: watchImg, // reuse watch or we can style with CSS/visuals. Let's map it nicely.
    price: 4999,
    originalPrice: 9999,
    discount: 50,
    rating: 4.5,
    ratingCount: 1280,
    isAssured: true,
    deliveryDays: 2,
    description: 'Immerse yourself in music with the AeroSound Pro. Offering advanced hybrid active noise cancellation, custom-tuned high-fidelity drivers, and up to 40 hours of playtime with fast charge.',
    highlights: [
      'Hybrid Active Noise Cancellation (up to 40dB)',
      '40mm Dynamic Drivers for Deep Bass',
      'Up to 40 Hours Playtime | 10 min charge = 4 hours',
      'Bluetooth 5.3 with Multi-Point Connection',
      'Foldable Premium Ergonomic Design'
    ],
    specs: {
      'Type': 'Over the Ear',
      'Connectivity': 'Bluetooth 5.3',
      'Noise Cancellation': 'Yes, Hybrid ANC',
      'Battery Life': '40 Hours',
      'Charging Time': '1.5 Hours'
    }
  },
  {
    id: 'p7',
    name: 'UrbanClassic Casual Cotton Slim Fit Shirt',
    category: 'Fashion',
    image: shoesImg, // reuse shoes image, but we can make it display nicely or hide.
    price: 899,
    originalPrice: 1999,
    discount: 55,
    rating: 4.0,
    ratingCount: 4200,
    isAssured: false,
    deliveryDays: 3,
    description: 'Elevate your everyday style with the UrbanClassic Slim Fit Shirt. Made from 100% breathable premium cotton, it features a classic collar and long sleeves, perfect for both work and weekend wear.',
    highlights: [
      '100% Premium Breathable Cotton',
      'Slim Fit | Curved Hemline',
      'Solid Casual/Semi-Formal Shirt',
      'Machine Washable | Fade Resistant'
    ],
    specs: {
      'Fit': 'Slim Fit',
      'Fabric': 'Cotton',
      'Sleeve': 'Full Sleeve',
      'Pattern': 'Solid',
      'Collar': 'Spread Collar'
    }
  },
  {
    id: 'p8',
    name: 'SmartBrew Automatic Espresso & Coffee Maker',
    category: 'Home',
    image: laptopImg, // reuse laptop image
    price: 12999,
    originalPrice: 19999,
    discount: 35,
    rating: 4.7,
    ratingCount: 650,
    isAssured: true,
    deliveryDays: 2,
    description: 'Bring the coffee shop experience home. The SmartBrew Espresso Maker features a 15-bar professional pump, a steam wand for creamy lattes and cappuccinos, and an easy-touch control panel.',
    highlights: [
      '15-Bar Italian Professional Pressure Pump',
      'Built-in Steam Wand for milk frothing',
      '1.5L Removable Transparent Water Tank',
      'Dual-cup filter and espresso options',
      'Overheating & Overpressure Protection'
    ],
    specs: {
      'Type': 'Espresso & Coffee Maker',
      'Pressure': '15 Bar',
      'Capacity': '1.5 Litres',
      'Power Consumption': '1050 Watts',
      'Body Material': 'Stainless Steel'
    }
  }
];

export const getProductsByCategory = (category) => {
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase());
};

export const getProductById = (id) => {
  return products.find(p => p.id === id);
};
