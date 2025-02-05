# Furniro Marketplace Builder Hackathon 2025

## Day 1: Laying the Foundation for Your Marketplace Journey

### Overview
This repository contains my completed task for Day 1 of the Hackathon, which involved setting up the foundational elements of a general e-commerce marketplace focused on household and office furniture. The tasks included outlining business goals, selecting a marketplace type, and designing a data schema with key fields and relationships between entities.

### Task Breakdown
#### Step 1: Marketplace Type
- **Marketplace Type:** General E-Commerce
- **Primary Purpose:** A platform connecting buyers with high-quality household and office furniture. The platform offers durable, stylish, and affordable furniture with customization options.

#### Step 2: Business Goals
- **Problem Solved:**
  - Providing a one-stop solution for durable and stylish furniture.
  - Addressing functionality, aesthetics, and affordability needs.

- **Target Audience:**
  - Homeowners
  - Office managers and business owners
  - Interior designers and architects

- **Offered Products and Services:**
  - Household and office furniture
  - Customization options
  - Delivery and installation services
  - Furniture bundles

- **Unique Selling Points:**
  - Quality assurance
  - Customization flexibility
  - Affordable pricing
  - Broad variety of styles and designs
  - Convenient platform with dedicated customer support

#### Step 3: Data Schema
**Entities in the Marketplace:**
1. **Products:** ID, Name, Description, Price, Stock, Category, Material, Dimensions, Image URL, Customization Options.
2. **Orders:** Order ID, Customer ID, Order Date, Product Details (Product ID, Quantity), Total Price, Status, Payment Method.
3. **Customers:** Customer ID, Name, Email, Phone, Address, Registration Date.
4. **Delivery Zones:** Zone ID, Zone Name, Coverage Area, Assigned Drivers, Delivery Charges.

**Relationships Between Entities:**
- Products → Orders: Products can appear in multiple orders.
- Orders → Customers: An order is placed by one customer.
- Delivery Zones → Orders: Orders are associated with delivery zones based on shipping address.

#### Step 4: Data Schema Diagram
A visual representation of entity relationships is available in the "images" folder.

---

## Furniro Marketplace Builder Hackathon 2025 - Day 2: Technical Foundation

### Goal
The objective of Day 2 was to transition from business planning to creating a technical foundation for the Furniro Marketplace. This involved designing the system architecture, defining workflows, creating schemas, and specifying API requirements to ensure the marketplace is scalable, efficient, and user-friendly.

### Day 2 Deliverables
#### 1. eCommerce Schema
- Developed schemas using **Sanity CMS** to manage:
  - Product data
  - Customer details
  - Order records
- Created detailed schema files to represent real-world data for seamless integration.

#### 2. Marketplace Technical Foundation
- **System Architecture:**
  - **Frontend:** Next.js
  - **Backend:** Sanity CMS
  - **Third-Party APIs:** ShipEngine for shipments, Stripe for payments.

- **Defined Workflows:**
  - Product Browsing
  - Order Placement
  - Shipment Tracking

- **Identified Dependencies** to streamline the implementation phase.

#### 3. Third-Party API Documentation
- Defined APIs for:
  - Product management via **Sanity CMS**
  - Payment processing using **Stripe**
  - Shipment tracking using **ShipEngine**
- Documented API endpoints, methods, payloads, and sample responses.

#### System Architecture
**Workflow Overview:**
1. **Frontend (Next.js):** A responsive UI for product browsing, cart management, and checkout.
2. **Sanity CMS:** Manages product data, order records, and customer details.
3. **Third-Party APIs:**
   - **ShipEngine** for shipment tracking
   - **Stripe** for secure payment processing

**Data Flow:**
- User actions on the frontend trigger API calls to Sanity CMS for product and order data.
- Payment and shipment details are handled by Stripe and ShipEngine, respectively, with seamless integration.

### Technical Documentation
Detailed documentation is available in the "PDF files" section:
1. **eCommerce Schema:** Detailed schemas for Sanity CMS.
2. **Marketplace Technical Foundation:** High-level architecture and workflows.
3. **Third-Party API:** API documentation for integrations with ShipEngine and Stripe.

### GitHub Repository
Access the full project files, schemas, and documentation on GitHub:
[Furniro Marketplace Builder Hackathon 2025](https://github.com/AreebaNadeem567/Furniro-Marketplace-Builder-Hackathon-2025.git)

#### Step 4: Diagram
The data schema diagram visualizes the relationships between the entities and is also available in the **images folder**.

### Next Steps
- Begin implementation on **Day 3**, focusing on frontend integration with Sanity CMS and third-party APIs.
- Regularly test and validate workflows to ensure functionality.

### Acknowledgments
Special thanks to mentors and collaborators for their guidance and feedback in refining the technical foundation.

---

## Furniro Marketplace Builder

### Project Overview
Furniro Marketplace Builder is a web application designed to simplify the creation and management of online furniture marketplaces. It utilizes modern technologies like **Next.js, Sanity, and TailwindCSS** to deliver a seamless and responsive user experience.

### Live Links
- **GitHub Repository:** [Furniro Marketplace Builder](https://github.com/AreebaNadeem567/Furniro-Marketplace-Builder-Hackathon-2025.git)
- **Live Deployment:** [Furniro on Vercel](https://furniro-marketplace-builder-hackathon-2025-h3uk.vercel.app/)

### Technologies Used
#### Frontend
- **Next.js (v15.1.5)**
- **React (v19.0.0)**
- **TailwindCSS (v3.4.1)**

#### Backend
- **Sanity CMS**

#### Additional Libraries
- **Radix UI** (Accessible UI components)
- **EmailJS** (Email communication)
- **Embla Carousel** (Advanced carousel functionalities)
- **Jotai** (State management)
- **Styled Components** (Component-level styling)
- **Axios** (API integration)

### How to Run the Project Locally
1. Clone the repository:
   ```sh
   git clone https://github.com/AreebaNadeem567/Furniro-Marketplace-Builder-Hackathon-2025.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Furniro-Marketplace-Builder-Hackathon-2025
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables:
   - Create a `.env.local` file in the root directory.
   - Add the necessary environment variables (refer to `.env.example` if available).
5. Start the development server:
   ```sh
   npm run dev
   ```
6. Open your browser and visit: [http://localhost:3000](http://localhost:3000)

### Deployment
The application is hosted on **Vercel**. The staging and production builds can be deployed using the following commands:
```sh
npm run build
npm run start
```

### Day 6 Checklist
- **Deployment Preparation:** ✔
- **Staging Environment Testing:** ✔
- **Documentation:** ✔
- **Form Submission:** ✔
- **Final Review:** ✔

### Contributing
We welcome contributions! Follow these steps:
1. Fork the repository.
2. Create a feature branch:
   ```sh
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```sh
   git commit -m "Your descriptive commit message"
   ```
4. Push to the branch:
   ```sh
   git push origin feature-name
   ```
5. Open a Pull Request.

### Acknowledgments
Special thanks to mentors and collaborators for their guidance and support!

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
