const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'dummyData.js');
let content = fs.readFileSync(filePath, 'utf8');

const sellerMock = {
  id: 1,
  name: "Rahul Sharma",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  isVerified: true,
  rating: 4.7,
  reviewsCount: 98,
  memberSince: "Jan 2022",
  activeListings: 32,
  positiveReviews: "98%",
};

const templates = {
  Mobile: {
    keyFeatures: [
      { icon: "HardDrive", text: "128 GB / 256 GB Storage" },
      { icon: "Cpu", text: "4 GB / 6 GB RAM" },
      { icon: "Smartphone", text: "6+ inch Display" },
      { icon: "Camera", text: "Advanced Camera Setup" },
      { icon: "Battery", text: "Excellent Battery Health" },
      { icon: "CheckCircle", text: "Mint Condition" },
    ],
    specifications: [
      { label: "Condition", value: "Used - Like New" },
      { label: "Warranty", value: "Out of Warranty" },
      { label: "Invoice Available", value: "Yes" },
      { label: "Box Available", value: "Yes" },
      { label: "Accessories Included", value: "Charging Cable" },
    ],
    description: "Selling my phone in excellent condition. Always used with screen protector and case. No scratches or dents. Original box, charging cable, and bill available. Selling because I upgraded to a new phone.",
  },
  Car: {
    keyFeatures: [
      { icon: "Settings", text: "Manual Transmission" },
      { icon: "Gauge", text: "45,000 km Driven" },
      { icon: "Droplet", text: "Petrol" },
      { icon: "Users", text: "1st Owner" },
      { icon: "Shield", text: "Comprehensive Insurance" },
    ],
    specifications: [
      { label: "Make Year", value: "2020-2021" },
      { label: "Registration", value: "WB" },
      { label: "Insurance", value: "Valid till 2025" },
      { label: "Service History", value: "Authorized Service Center" },
      { label: "Accidental", value: "No" },
      { label: "Flood Driven", value: "No" },
    ],
    description: "Well maintained car, single hand driven. Regularly serviced at authorized service center only. New tires and battery recently installed. All original papers available. Price is slightly negotiable.",
  },
  Bike: {
    keyFeatures: [
      { icon: "Gauge", text: "15,000 km Driven" },
      { icon: "Droplet", text: "Petrol" },
      { icon: "Users", text: "1st Owner" },
      { icon: "CheckCircle", text: "Mint Condition" },
    ],
    specifications: [
      { label: "Make Year", value: "2021" },
      { label: "Registration", value: "WB" },
      { label: "Insurance", value: "Valid till 2024" },
      { label: "Service History", value: "Available" },
    ],
    description: "Bike is in excellent condition. Scratchless body, smooth engine. Timely serviced. Selling as I am relocating. All papers are clear.",
  },
  Property: {
    keyFeatures: [
      { icon: "Home", text: "Spacious Layout" },
      { icon: "MapPin", text: "Prime Location" },
      { icon: "ShieldCheck", text: "Gated Community" },
      { icon: "Car", text: "Dedicated Parking" },
    ],
    specifications: [
      { label: "Furnishing", value: "Semi-Furnished" },
      { label: "Facing", value: "South-East" },
      { label: "Floor", value: "3rd Floor" },
      { label: "Age of Construction", value: "New Construction" },
      { label: "Ownership", value: "Freehold" },
    ],
    description: "Premium property available in a prime location. Excellent connectivity to main road, schools, and hospitals. Well ventilated rooms with ample natural light. Safe and secure neighborhood.",
  },
  Furniture: {
    keyFeatures: [
      { icon: "CheckCircle", text: "Premium Wood" },
      { icon: "Clock", text: "2 Years Old" },
      { icon: "Shield", text: "Termite Proof" },
    ],
    specifications: [
      { label: "Material", value: "Teak Wood" },
      { label: "Condition", value: "Good" },
      { label: "Age", value: "2 Years" },
    ],
    description: "High quality furniture in very good condition. Rarely used. Selling due to house renovation. Dimensions can be shared on chat.",
  },
  Laptop: {
    keyFeatures: [
      { icon: "Cpu", text: "M1 / Core i5 Processor" },
      { icon: "HardDrive", text: "256 GB / 512 GB SSD" },
      { icon: "MemoryStick", text: "8 GB / 16 GB RAM" },
      { icon: "Battery", text: "Great Battery Life" },
    ],
    specifications: [
      { label: "Condition", value: "Used - Like New" },
      { label: "Warranty", value: "Out of Warranty" },
      { label: "Invoice", value: "Available" },
    ],
    description: "Laptop is in perfect working condition. Used carefully for office work. No hardware or software issues. Charger and original box included.",
  },
};

function determineType(title) {
  title = title.toLowerCase();
  if (title.includes('iphone') || title.includes('mobile')) return 'Mobile';
  if (title.includes('hyundai') || title.includes('honda') || title.includes('car')) return 'Car';
  if (title.includes('enfield') || title.includes('bajaj') || title.includes('bike')) return 'Bike';
  if (title.includes('bhk') || title.includes('flat') || title.includes('space')) return 'Property';
  if (title.includes('sofa') || title.includes('table') || title.includes('furniture')) return 'Furniture';
  if (title.includes('macbook') || title.includes('laptop')) return 'Laptop';
  return 'Mobile';
}

function augmentArray(arrayString, arrayName) {
  // We'll use a regex to replace each object in the array with an augmented version
  // Wait, parsing JS with regex is hard. Let's just evaluate the arrays, augment them, and write them back.
}
