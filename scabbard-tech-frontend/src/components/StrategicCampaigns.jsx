import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from './CountUp';
import './Marquee.css';

// Logos - Using the one we have as a placeholder
import meghalayaLogo from '../assets/gallery/Scabbardtech-Portfolio-16-1536x1086.png';
// TODO: Add other logos to assets and import them here
import assamHorticultureLogo from '../assets/gallery/assam-horticulture-logo.png';
import axomBeejLogo from '../assets/gallery/axom-beej-logo.png';
import eciLogo from '../assets/gallery/eci-logo.png';

// Marquee Images - Using one image for all as requested
// TODO: Add your actual campaign images to assets and import them
import campaignImg1 from '../assets/gallery/Scabbardtech-Portfolio-12-e1736233807762.png';
import campaignImg2 from '../assets/gallery/Scabbardtech-Portfolio-13-e1736234043236.png';
import campaignImg3 from '../assets/gallery/Scabbardtech-Portfolio-14-e1736234103138.png';
import campaignImg4 from '../assets/gallery/Scabbardtech-Portfolio-15-e1736234173781.png';

import campaignImg5 from '../assets/gallery/Scabbardtech-Portfolio-19.png';
import campaignImg6 from '../assets/gallery/Scabbardtech-Portfolio-18.png';
import campaignImg7 from '../assets/gallery/Scabbardtech-Portfolio-19.png';
import campaignImg8 from '../assets/gallery/Scabbardtech-Portfolio-21.png';
import campaignImg9 from '../assets/gallery/Scabbardtech-Portfolio-22.png';
import campaignImg10 from '../assets/gallery/Scabbardtech-Portfolio-23.png';
import campaignImg11 from '../assets/gallery/Scabbardtech-Portfolio-25.png';

import campaignImg12 from '../assets/gallery/Scabbardtech-Portfolio-27-e1736239387645.png';
import campaignImg13 from '../assets/gallery/Scabbardtech-Portfolio-28.png';




const campaignImages = [
  campaignImg1,
  campaignImg2,
  campaignImg3,
  campaignImg4,
];
const campaignImage2 = [
  campaignImg5,
  campaignImg6,
  campaignImg7,


];

const campaignImage3 = [

  campaignImg8,
  campaignImg9,
  campaignImg10,
  campaignImg11,

];

const campaignImage4 = [
  campaignImg12,
  campaignImg13,
  campaignImg12,
  campaignImg13,

];


const campaignsData = [
  {
    client: "Directorate of Commerce and Industries, Meghalaya",
    project: "3 weeks training program on digital marketing for entrepreneurs.",
    logo: meghalayaLogo,
    stats: [
      { label: "Participants", value: 30, suffix: "+" },
      { label: "Sessions Covered", value: 36, suffix: "" },
    ],
    images: campaignImages,
  },
  {
    client: "Directorate of Horticulture and Food Processing, Assam",
    project: "Branding for Rising Sun Festival 2023.",
    logo: assamHorticultureLogo, // Placeholder
    stats: [
      { label: "Total Footfall", value: 10000, suffix: "+" },
      { label: "Duration", value: 3, suffix: " Day" },
    ],
    images: campaignImage2,
  },
  {
    client: "Merchandise for Axom Beej",
    project: "Assam Seeds Corporation Limited - Innovative Branding for Axom Beej.",
    logo: axomBeejLogo, // Placeholder
    stats: [],
    images: campaignImage3,
  },
  {
    client: "Election Commission of India",
    project: "Photography and Videography for all Election related works at Kamrup Metro for the General Elections 2024.",
    logo: eciLogo, // Placeholder
    stats: [],
    images: campaignImage4,
  },
];

const CampaignCard = ({ campaign, index }) => {
  // Dynamically calculate animation duration based on the number of images
  // This ensures a consistent scroll speed across different marquees
  const animationDuration = campaign.images.length * 5; // 5 seconds per image

  return (
    <div className={`rounded-2xl shadow-lg overflow-hidden ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
      <div className="p-8 md:p-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold text-gray-800">
              {campaign.client}
            </h3>
            <p className="mt-2 text-lg text-gray-600">
              {campaign.project}
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex-shrink-0 md:ml-8">
            <img src={campaign.logo} alt={`${campaign.client} Logo`} className="h-24 w-auto object-contain" />
          </div>
        </div>

        {campaign.stats.length > 0 && (
          <div className={`mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 text-center`}>
            {campaign.stats.map(stat => (
              <div key={stat.label} className={`p-6 rounded-lg ${index % 2 === 0 ? 'bg-purple-50' : 'bg-white'}`}>
                <p className="text-lg font-medium text-purple-800">{stat.label}</p>
                <p className="text-5xl font-bold text-purple-600">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="marquee-container mt-4">
        <div 
          className="marquee-content"
          style={{ animationDuration: `${animationDuration}s` }}
        >
          {[...campaign.images, ...campaign.images].map((src, i) => (
            <img key={i} src={src} alt={`Campaign image ${i + 1}`} className="marquee-item" />
          ))}
        </div>
      </div>
    </div>
  );
};

const StrategicCampaigns = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Strategic Campaigns
          </h2>
          <p className="mt-4 text-lg text-purple-700 font-semibold">
            Powered by Scabbard Tech
          </p>
        </div>

        <div className="space-y-16">
          {campaignsData.map((campaign, index) => (
            <CampaignCard key={index} campaign={campaign} index={index} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/gallery"
            className="inline-block bg-purple-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105"
          >
            View Other Works
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StrategicCampaigns;