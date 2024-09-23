import React, { useState } from 'react';

// Define types for the service data structure
interface PackageDetails {
  feature: string;
  premium?: string;
  standard?: string;
  essentials?: string;
  pro?: string;
  basic?: string;
  free?: string;
  advanced?: string;
  intermediate?: string;
  ecommerce?: string;
  comprehensive?: string;
  native?: string;
  android?: string;
  ios?: string;
  pricing?: string;
  description?: string;
}

interface ServiceData {
  packages: string[];
  details: PackageDetails[];
}

const services: Record<string, ServiceData> = {
  "Web Development": {
    packages: ["Standard", "Premium", "Advanced","Intermediate"],
    details: [
      { feature: "Package Description", premium: "Custom Website", standard: "BASIC (Static  Website)", advanced: "E-commerce website (online stores)", intermediate: "Blogging Website" },
      { feature: "1 Page", premium: "$200-300", standard: "$100", advanced: "-", intermediate: "$130" },
      { feature: "2-5 Pages", premium: "$500-900", standard: "$150", advanced: "$600" , intermediate: "$180"},
      { feature: "6-10 Pages", premium: "$700-1600", advanced: "$900", standard: "$250", intermediate: "$300" },
      { feature: "Responsive Design", premium: "Yes", advanced: "Yes", standard: "Yes", intermediate: "Yes" },
      { feature: "Dynamic Content", premium: "Yes", advanced: "Yes", standard: "No", intermediate: "Yes" },
      { feature: "CMS", premium: "Yes", advanced: "Yes", standard: "No", intermediate: "Yes" },
      { feature: "Order Tracking", premium: "Yes", advanced: "Yes", standard: "No", intermediate: " " },
      { feature: "Payment Integration", premium: "Yes", advanced: "Yes", standard: "No", intermediate: " " },
      { feature: "Custom Forms", premium: "Yes", advanced: "No", standard: "No", intermediate: " " },
      { feature: "User Authentication", premium: "Yes", advanced: "Yes", standard: "No", intermediate: " " },
      { feature: "No. of products (listing)", premium: "-", advanced: "$50 per 12 products", standard: "-", intermediate: "-" },
      { feature: "Hosting Payments", premium: "TBD on meeting", advanced: "TBD on meeting", standard: "TBD on meeting", intermediate: "TBD on meeting" },
      // Add more features as needed...
    ],
  },
  "Logo Design": {
    packages: ["Basic", "Pro", "Advanced"],
    details: [
      { feature: "Price", pro: "$200", basic: "$150", advanced: "$250" },
      { feature: "Number of Concepts", pro: "1", basic: "1", advanced: "3" },
      { feature: "Number of Revisions", pro: "3", basic: "1", advanced: "Unlimited" },
      { feature: "Multiple Sizes", pro: "Yes", basic: "Yes", advanced: "Yes" },
      { feature: "Light and Dark Variants", pro: "Yes", basic: "Additional $20", advanced: "Yes" },
      { feature: "Vector / Source File", pro: "Additional $60", basic: "Additional $60", advanced: "Yes" },
      // Add more features as needed...
    ],
  },
  "Brand Guide": {
    packages: ["Basic", "Pro", "Advanced"],
    details: [
        { feature: "Price", basic: "$400", pro: "$700", advanced: "$1200" },
        { feature: "Color Palette", basic: "Yes",  pro: "Yes", advanced: "Yes" },
        { feature: "Typography", basic: "Yes", pro: "Yes",  advanced: "Yes" },
        { feature: "Logo Usage Guidelines",  basic: "Yes", pro: "Yes", advanced: "Yes" },
        { feature: "Business Card Design",  basic: " ", pro: "Yes", advanced: "Yes" },
        { feature: "Letterhead Design",  basic: " ", pro: "Yes", advanced: "Yes" },
        { feature: "Signage Design",  basic: " ", pro: "Yes", advanced: "Yes" },
        { feature: "Logo Design",  basic: " ", pro: " ", advanced: "Yes" },
        { feature: "Stationery Design",  basic: " ", pro: " ", advanced: "Yes" },
        { feature: "Landing Page Concept",  basic: " ", pro: " ", advanced: "Yes" },
        { feature: "Product Design",  basic: " ", pro: " ", advanced: "Yes" },
      // Add more features as needed...
    ],
  },
  "SEO": {
    packages: ["Basic", "Standard", "Advanced","Ecommerce"],
    details: [
      { feature: "Price", basic: "$300 - 500", standard: "$600 - 900", advanced: "$900 - 1400", ecommerce:"$1,100 - 1,800 " },
      { feature: "Keyword Research", basic: "Yes", standard: "Yes", advanced: "Yes", ecommerce:"Yes" },
      { feature: "On-Page SEO", basic: "Yes", standard: "Yes", advanced: "Yes", ecommerce:"Yes" },
      { feature: "Meta Tag Optimization", basic: "Yes", standard: "Yes", advanced: "Yes", ecommerce:"Yes" },
      { feature: "Content Optimization", basic: "Yes", standard: "Yes", advanced: "Yes", ecommerce:"Yes" },
      { feature: "Technical SEO Audit", basic: "Yes", standard: "Yes", advanced: "Yes", ecommerce:"Yes" },
      { feature: "XML Sitemap Submission", basic: "Yes", standard: "Yes", advanced: "Yes", ecommerce:"Yes" },
      { feature: "Google Analytics Setup", basic: "Yes", standard: "Yes", advanced: "Yes", ecommerce:"Yes" },
      { feature: "Google Search Console Setup", basic: "Yes", standard: "Yes", advanced: "Yes", ecommerce:"Yes" },
      { feature: "Monthly Reporting", basic: "Yes", standard: "Yes", advanced: "Yes", ecommerce:"Yes" },
      { feature: "Backlink Building", basic: " ", standard: "Yes", advanced: "Yes", ecommerce:"Yes" },
      { feature: "Local SEO Competitor Analysis", basic: " ", standard: "Yes", advanced: "Yes", ecommerce:"Yes" },
      { feature: "Content Marketing", basic: " ", standard: "Yes", advanced: "Yes", ecommerce:"Yes" },
      { feature: "Social Media Integration", basic: " ", standard: " ", advanced: "Yes", ecommerce:"Yes" },
      { feature: "E-commerce Optimization", basic: " ", standard: " ", advanced: " ", ecommerce:"Yes" },
      { feature: "Product Schema Markup", basic: " ", standard: " ", advanced: " ", ecommerce:"Yes" },
      { feature: "Conversion Rate Optimization", basic: " ", standard: " ", advanced: " ", ecommerce:"Yes" },
      { feature: "Blog Optimization", basic: " ", standard: " ", advanced: " ", ecommerce:"Yes" },
      { feature: "No. of Keywords", basic: "Up to 10", standard: "Up to 20", advanced: "Up to 40", ecommerce:"Up to 50" },
      // Add more features as needed...
    ],
  },
  "Web Design": {
    packages: ["Basic", "Advanced", "Comprehensive"],
    details: [
      { feature: "1 Page", basic: "$200", advanced: "$300", comprehensive: "$600" },
      { feature: "2-5 Pages", basic: "$350", advanced: "$500", comprehensive: "$1,200" },
      { feature: "6-10 Pages", basic: "$500", advanced: "$700", comprehensive: "$2,500" },
      { feature: "Responsive Design", basic: "Yes", advanced: "Yes", comprehensive: "Yes" },
      { feature: "Logo Design", basic: " ", advanced: "Yes", comprehensive: "Yes" },
      { feature: "Multi-Platform", basic: " ", advanced: "Yes", comprehensive: "Yes" },
      { feature: "Custom Elements", basic: " ", advanced: "Yes", comprehensive: "Yes" },
      { feature: "Splash Animations", basic: " ", advanced: " ", comprehensive: "Yes" },
      { feature: "Wireframes", basic: " ", advanced: " ", comprehensive: "Yes" },
      { feature: "Dark and Light Mode", basic: " ", advanced: " ", comprehensive: "Yes" },
      // Add more features as needed...
    ],
  },
  "Mobile Application": {
  packages: ["Native", "Android", "iOS"],
  details: [
    { feature: "Package Description", native: "Cross-platform (React Native/Flutter)", android: "Android Only", ios: "iOS Only" },
    { feature: "Basic App", native: "$10,000 - $15,000", android: "$5,000 - $7,000", ios: "$6,000 - $8,000" },
    { feature: "Advanced App", native: "$20,000 - $30,000", android: "$15,000 - $20,000", ios: "$18,000 - $22,000" },
    { feature: "E-commerce Integration", native: "$5,000", android: "$3,000", ios: "$3,500" },
    { feature: "Responsive Design", native: "Yes", android: "Yes", ios: "Yes" },
    { feature: "Custom UI/UX", native: "$2,000 - $4,000", android: "$1,500 - $3,000", ios: "$1,500 - $3,500" },
    { feature: "Push Notifications", native: "Yes", android: "Yes", ios: "Yes" },
    { feature: "In-app Purchases", native: "$3,000 - $5,000", android: "$2,000 - $4,000", ios: "$2,500 - $4,500" },
    { feature: "User Authentication", native: "Yes", android: "Yes", ios: "Yes" },
    { feature: "Social Media Integration", native: "$1,500 - $2,500", android: "$1,000 - $1,500", ios: "$1,200 - $1,800" },
    { feature: "Geo-location Services", native: "$2,000", android: "$1,200", ios: "$1,500" },
    { feature: "Chat Integration", native: "$3,000", android: "$2,000", ios: "$2,500" },
    { feature: "Payment Integration", native: "$4,000", android: "$3,000", ios: "$3,500" },
    { feature: "App Store Submission", native: "Yes", android: "Google Play", ios: "Apple App Store" },
    { feature: "Maintenance (Monthly)", native: "$500 - $1,000", android: "$300 - $700", ios: "$350 - $800" },
    { feature: "Cloud Hosting", native: "AWS/GCP", android: "AWS/GCP", ios: "AWS/GCP" },
    { feature: "API Integration", native: "$2,000 - $4,000", android: "$1,500 - $3,000", ios: "$2,000 - $3,500" },
    { feature: "Analytics Integration", native: "$1,500", android: "$1,000", ios: "$1,200" },
    { feature: "Multi-language Support", native: "$3,000", android: "$2,000", ios: "$2,500" },
    { feature: "Testing & QA", native: "$3,000 - $5,000", android: "$2,000 - $3,000", ios: "$2,500 - $3,500" },
    { feature: "Hosting Payments", native: "TBD on meeting", android: "TBD on meeting", ios: "TBD on meeting" },
  ],
},
"Other Services": {
    packages: ["Pricing", "Description"],
    details: [
      { feature: "Social Profile and Banner", pricing: "$50 / logo", description: "Low to High resolution" },
      { feature: "Logo Vectorization", pricing: "$100", description: "linkedIn, Youtube, Facebook, Insta.It will include theme setup as well." },
      { feature: "Amazon store Profile Banners", pricing: "$150", description: "banner images like A+ banner" },
      { feature: "Social Media Post", pricing: "$10 / post", description: "save your money acquire monthly social media management package" },
      { feature: "Site Maps (informative site maps)", pricing: "$150 / 1000msq", description: "map per thousand meter square rate but can vary with complexity." },
      { feature: "2D Floor Plans", pricing: "$1000 - 2000", description: " " },
      { feature: "Standee, Flyer, Banner, Feather Flag (all types)", pricing: "$50/product", description: "Everything will be custom designed this price includes the theme as well if you have a brand guide already then its just 30$. and 10$ extra if you need color variants of the same product." },
      { feature: "2D to 3D logo", pricing: "$50 / logo", description: "cost per logo to be converted to a 3D logo." },
      { feature: "Logo Animation / Splash animation", pricing: "$150 / animation", description: "the animation can be a simple logo animation for a 2D logo may be for a youtube intro or may be for a splash animation for your application." },
      { feature: "3D logo Animation", pricing: "$250 / animation", description: "Custom animation will be designed exclusively for your logo." },
      { feature: "3D product concept", pricing: "$150 / product", description: "It will incude 3 perspective images of your product concept. We will require the 2D blueprint to transform your product to life." },
      { feature: "Product Animation", pricing: "$250 /product", description: "The price covers animation for an already provided 3D product." },
    ],
  },
};

const PricingComparison: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('Web Development');
  
    // Render the table dynamically based on the active tab
    const renderTable = () => {
      const serviceData = services[activeTab];
      return (
        <div className="overflow-x-auto hide-scrollbar">
          <table className="table-auto w-full text-left">
            <thead>
              <tr>
                {activeTab === "Other Services" ? <th className="px-4 py-2 uppercase font-semibold text-[14px] md:text-[20px] md:tracking-widest">Services</th> : <th className="px-4 py-2 uppercase font-semibold text-[14px] md:text-[20px] md:tracking-widest">Features</th>}
                {serviceData.packages.map((pkg) => (
                  <th key={pkg} className="px-4 py-2 uppercase font-semibold text-[14px] md:text-[20px] md:tracking-widest">{`${pkg}`}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {serviceData.details.map((row, index) => (
                <tr key={index}>
                  <td className={`border px-6 py-2 text-[14px] md:text-[18px] ${(row.feature === 'Package Description' || row.feature === 'Price') ? 'bg-white text-blue border-blue' : ''} `}>
                      {row.feature}
                  </td>
                  {serviceData.packages.map((pkg) => (
                    <td key={pkg} className={`border px-6 py-2 text-[14px] md:text-[18px] ${(row.feature === 'Package Description' || row.feature === 'Price') ? 'bg-white text-blue border-blue' : ''} `}>{row[pkg.toLowerCase() as keyof PackageDetails] || "N/A"}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };
  
    return (
      <div className="px-4 lg:px-24 py-12 h-contain">
        {/* Tabs */}
        <div className="overflow-x-auto hide-scrollbar whitespace-nowrap flex justify-center mb-8">
          {Object.keys(services).map((service) => (
              <button
              key={service}
              onClick={() => setActiveTab(service)}
              className={`px-4 py-2 mx-2 text-sm md:text-md lg:text-lg font-semibold ${
                  activeTab === service
                  ? 'bg-yellow-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } rounded`}
              >
              {service}
              </button>
          ))}
        </div>
  
        {/* Pricing Table */}
        {renderTable()}
      </div>
    );
  };
  
  export default PricingComparison;
