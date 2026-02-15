
import { Property, Service, Testimonial } from './types';

export const COMPANY_INFO = {
  name: "Lovely Estates",
  tagline: "Premier Real Estate Brokers in Mumbai",
  phone: "+91 9821018631",
  email: "dkmatani@gmail.com",
  address: "Pali Road, Corner of 29th Road, Bandra (West), Mumbai 400050",
  aboutShort: "With over 25 years of excellence, Lovely Estates is Mumbai's premier luxury real estate advisory. We specialize in residential and commercial properties, offering unmatched expertise in rentals, leasing, and strategic relocation services.",
};

export const PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Ocean View Residence",
    price: "₹ 85.00 Cr",
    location: "Worli Sea Face, Mumbai",
    type: "Residential Penthouse",
    bedrooms: 5,
    bathrooms: 6,
    sqft: "8,500",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
    description: "A breathtaking duplex penthouse offering 360-degree views of the Arabian Sea."
  },
  {
    id: "2",
    title: "Heritage Bandra Villa",
    price: "₹ 42.50 Cr",
    location: "Pali Hill, Bandra West",
    type: "Luxury Bungalow",
    bedrooms: 4,
    bathrooms: 4,
    sqft: "4,200",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    description: "Nestled in the quiet enclaves of Pali Hill, a colonial-style masterpiece with modern amenities."
  },
  {
    id: "3",
    title: "Skyline Business Suite",
    price: "Upon Request",
    location: "BKC, Mumbai",
    type: "Commercial Office",
    bedrooms: 0,
    bathrooms: 12,
    sqft: "25,000",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    description: "Premium Grade-A office space in the heart of Mumbai's financial district."
  },
  {
    id: "4",
    title: "Juhu Sands Estate",
    price: "₹ 110.00 Cr",
    location: "Juhu Tara Road, Mumbai",
    type: "Beachfront Residential",
    bedrooms: 6,
    bathrooms: 7,
    sqft: "12,000",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200",
    description: "An ultra-modern architectural marvel directly overlooking the silver sands of Juhu."
  }
];

export const SERVICES: Service[] = [
  {
    id: "s1",
    title: "Buying & Selling",
    description: "End-to-end assistance for residential and commercial transactions with maximum transparency.",
    icon: "Home"
  },
  {
    id: "s2",
    title: "Rentals & Leasing",
    description: "Specialized in high-value rentals and commercial leasing across Mumbai's prime locations.",
    icon: "Building"
  },
  {
    id: "s3",
    title: "Relocation Coordination",
    description: "Seamless relocation services for corporate executives and individuals moving to Mumbai.",
    icon: "Map"
  },
  {
    id: "s4",
    title: "Investment Advisory",
    description: "Strategic real estate investment guidance based on 25+ years of Mumbai market data.",
    icon: "TrendingUp"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Vikram Malhotra",
    role: "Corporate Executive",
    content: "The level of professionalism and discretion provided by Lovely Estates is unparalleled. They found us the perfect home in Bandra efficiently.",
    image: "https://i.pravatar.cc/150?u=vikram"
  },
  {
    id: "t2",
    name: "Ananya Singhania",
    role: "Private Investor",
    content: "Their 25 years of experience truly shows. Their insights into the Mumbai market are invaluable for any serious investor.",
    image: "https://i.pravatar.cc/150?u=ananya"
  }
];
