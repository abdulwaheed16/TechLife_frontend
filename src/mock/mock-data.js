import blogImage1 from "/public/blogImage1.jpeg";
import blogImage2 from "/public/blogImage2.jpeg";
import clientName1 from "/public/microsoft-removebg-preview.png";
import clientName2 from "/public/silicon-removebg-preview.png";
import clientName3 from "/public/amazon-removebg-preview.png";

// Blog data

export const blogs = [
  {
    title: "AI Innovations",
    image: { blogImage2 },
    date: "03/10/23",
    author: "Abdul Waheed",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title: "AI Innovations",
    image: { blogImage2 },
    date: "03/10/23",
    author: "Abdul Waheed",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title: "AI Innovations",
    image: { blogImage2 },
    date: "03/10/23",
    author: "Abdul Waheed",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title: "AI Innovations",
    image: { blogImage2 },
    date: "03/10/23",
    author: "Abdul Waheed",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title: "AI Innovations",
    image: { blogImage2 },
    date: "03/10/23",
    author: "Abdul Waheed",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    title: "AI Innovations",
    image: { blogImage2 },
    date: "03/10/23",
    author: "Abdul Waheed",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

// Services Information

export const services = [
  {
    id: 1,
    title: "Web Design & Development",
    slug: "web-development",

    description:
      "Crafting digital experiences with precision, our web development services bring your vision to life. From responsive designs to robust functionality, we create websites that engage, convert, and inspire.",
    benefits: [
      "Responsive design",
      "User-friendly interfaces",
      "High-performance websites",
    ],
    price: "$120",
  },
  {
    id: 2,
    title: "Graphic Designing",
    slug: "web-development",

    description:
      "Transforming ideas into captivating visuals, our graphic designing services capture attention and convey your message effectively. We blend creativity with strategy to craft eye-catching designs for your brand.",
    benefits: [
      "Secure payment gateways",
      "Inventory management",
      "Shopping cart functionality",
    ],
    price: "Custom Quote",
  },
  {
    id: 3,
    title: "App Development",
    slug: "app-development",

    description:
      "Building innovative mobile and web applications tailored to your business needs. Our app development services deliver seamless user experiences and cutting-edge features that elevate your digital presence",
    benefits: [
      "Cross-platform compatibility",
      "Custom features",
      "Scalable solutions",
    ],
    price: "Starting at $126",
  },
];

// Projects

export const projects = [
  {
    id: 1,
    title: "Web Design & Development",
    description: "Crafting beautiful and functional websites.",
    benefits: [
      "Responsive design",
      "User-friendly interfaces",
      "High-performance websites",
    ],
    price: "$XXXX",
  },
  {
    id: 2,
    title: "E-commerce Solutions",
    description: "Creating online stores for your products.",
    benefits: [
      "Secure payment gateways",
      "Inventory management",
      "Shopping cart functionality",
    ],
    price: "Custom Quote",
  },
  {
    id: 3,
    title: "App Development",
    description: "Building mobile and web applications.",
    benefits: [
      "Cross-platform compatibility",
      "Custom features",
      "Scalable solutions",
    ],
    price: "Starting at $XXXX",
  },
  {
    id: 4,
    title: "App Development",
    description: "Building mobile and web applications.",
    benefits: [
      "Cross-platform compatibility",
      "Custom features",
      "Scalable solutions",
    ],
    price: "Starting at $XXXX",
  },
  {
    id: 4,
    title: "App Development",
    description: "Building mobile and web applications.",
    benefits: [
      "Cross-platform compatibility",
      "Custom features",
      "Scalable solutions",
    ],
    price: "Starting at $XXXX",
  },
  {
    id: 5,
    title: "App Development",
    description: "Building mobile and web applications.",
    benefits: [
      "Cross-platform compatibility",
      "Custom features",
      "Scalable solutions",
    ],
    price: "Starting at $XXXX",
  },
  {
    id: 6,
    title: "App Development",
    description: "Building mobile and web applications.",
    benefits: [
      "Cross-platform compatibility",
      "Custom features",
      "Scalable solutions",
    ],
    price: "Starting at $XXXX",
  },
];

// Contact Information

export const contactInfo = {
  address: "30 N Gould St Ste 36191 Sheridan, WY 82801",
  phone: "+1 ( 737 ) 313 1967 ",
  email: "Support@thetechlife.co",
};

// Clients

export const clients = [
  {
    id: 1,
    image: clientName1,
    title: "Microsoft",
  },
  {
    id: 2,
    image: clientName3,
    title: "Amazon",
  },
  {
    id: 3,
    image: clientName1,
    title: "Silicon",
  },
  {
    id: 1,
    image: clientName3,
    title: "Microsoft",
  },
  {
    id: 2,
    image: clientName2,
    title: "Amazon",
  },
  {
    id: 3,
    image: clientName3,
    title: "Silicon",
  },
];

// export const users = [
//   {
//     username: "user1",
//     useremail: "user1@example.com",
//     referralcode: "1234567890",
//     timestamps: "2023-10-13T13:15:22.000Z",
//   },
//   {
//     username: "user2",
//     useremail: "user2@example.com",
//     referralcode: "9876543210",
//     timestamps: "2023-10-13T13:15:23.000Z",
//   },
//   {
//     username: "user3",
//     useremail: "user3@example.com",
//     referralcode: "0123456789",
//     timestamps: "2023-10-13T13:15:24.000Z",
//   },
// ];
const color = "#000";

// Define a function to add or remove packages from servicesOptions
export const updateServicesOptions = (
  servicesOptions,
  service,
  plan,
  subPlan,
  selectedPackages
) => {
  if (service && plan && subPlan) {
    // Remove the selected package from servicesOptions
    servicesOptions = servicesOptions.map((category) => {
      category.options = category.options.filter(
        (option) => option.value !== plan
      );
      return category;
    });
  }

  if (selectedPackages.length > 0) {
    // Add the selected packages back to servicesOptions if not already present
    selectedPackages.forEach((selectedPackage) => {
      const category = servicesOptions.find(
        (category) => category.label === selectedPackage.service
      );
      if (category) {
        const exists = category.options.some(
          (option) => option.value === selectedPackage.package
        );
        if (!exists) {
          category.options.push({
            value: selectedPackage.package,
            label: selectedPackage.package,
            color: color, // Ensure you have color defined somewhere
          });
        }
      }
    });
  }

  return servicesOptions;
};
