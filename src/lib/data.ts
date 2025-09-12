import { Building, Cpu, Home, LineChart, Zap } from 'lucide-react';

export const businessDivisions = [
  {
    name: 'Construction',
    description: 'Building the foundations of tomorrow with cutting-edge engineering and sustainable practices.',
    icon: Building,
  },
  {
    name: 'Real Estate',
    description: 'Developing and managing properties that redefine urban living and commercial spaces.',
    icon: Home,
  },
  {
    name: 'Technology',
    description: 'Innovating with scalable technology solutions that power businesses and industries.',
    icon: Cpu,
  },
  {
    name: 'Investment Management',
    description: 'Strategically growing capital and creating value through expert financial management.',
    icon: LineChart,
  },
  {
    name: 'Energy',
    description: 'Powering a sustainable future with efficient and renewable energy projects and solutions.',
    icon: Zap,
  },
];

export const projects = [
    {
      id: 'p1',
      name: 'Azure Tower',
      division: 'Construction',
      description: 'A 70-story skyscraper that has reshaped the city skyline, featuring state-of-the-art sustainable building materials and a mixed-use design for commercial and residential purposes.',
      imageUrl: 'https://picsum.photos/seed/project-1/600/400',
      imageHint: 'skyscraper architecture',
    },
    {
      id: 'p2',
      name: 'Greenwood Estates',
      division: 'Real Estate',
      description: 'An exclusive gated community with 200 luxury villas, offering residents a serene environment with lush landscaping, a private lake, and world-class amenities.',
      imageUrl: 'https://picsum.photos/seed/project-2/600/400',
      imageHint: 'apartment building',
    },
    {
      id: 'p3',
      name: 'Nexus Data Hub',
      division: 'Technology',
      description: 'A Tier IV data center providing secure, scalable, and high-availability solutions for enterprise clients, powered by 100% renewable energy.',
      imageUrl: 'https://picsum.photos/seed/project-3/600/400',
      imageHint: 'data center',
    },
    {
      id: 'p4',
      name: 'Momentum Growth Fund',
      division: 'Investment Management',
      description: 'A diversified investment fund focusing on emerging technologies and high-growth startups, delivering consistent returns for our investors.',
      imageUrl: 'https://picsum.photos/seed/project-4/600/400',
      imageHint: 'stock market',
    },
    {
      id: 'p5',
      name: 'Helios Wind Farm',
      division: 'Energy',
      description: 'A 500 MW onshore wind farm, utilizing the latest turbine technology to provide clean energy to over 250,000 homes annually.',
      imageUrl: 'https://picsum.photos/seed/project-5/600/400',
      imageHint: 'wind turbine',
    },
    {
      id: 'p6',
      name: 'Golden Gate Bridge II',
      division: 'Construction',
      description: 'A landmark suspension bridge project designed to improve regional connectivity and withstand seismic activity, completed ahead of schedule.',
      imageUrl: 'https://picsum.photos/seed/project-6/600/400',
      imageHint: 'bridge construction',
    },
    {
      id: 'p7',
      name: 'The Orchard Residences',
      division: 'Real Estate',
      description: 'A master-planned residential development that integrates smart home technology and eco-friendly design in a vibrant, family-oriented community.',
      imageUrl: 'https://picsum.photos/seed/project-7/600/400',
      imageHint: 'modern house',
    },
    {
      id: 'p8',
      name: 'Solara Solar Plant',
      division: 'Energy',
      description: 'One of the largest solar power installations in the region, covering 1,000 acres and generating 300 MW of clean, sustainable energy.',
      imageUrl: 'https://picsum.photos/seed/project-8/600/400',
      imageHint: 'solar panels',
    },
];

export const jobs = [
    {
        id: 'job1',
        title: 'Senior Project Manager',
        division: 'Construction',
        location: 'New York, NY',
        description: 'Lead large-scale construction projects from inception to completion. Requires 10+ years of experience in commercial construction and a PMP certification.',
    },
    {
        id: 'job2',
        title: 'Real Estate Analyst',
        division: 'Real Estate',
        location: 'London, UK',
        description: 'Conduct market research and financial analysis for potential real estate acquisitions. Strong analytical and modeling skills required.',
    },
    {
        id: 'job3',
        title: 'Cloud Solutions Architect',
        division: 'Technology',
        location: 'Remote',
        description: 'Design and implement scalable cloud infrastructure for our enterprise clients. Expertise in AWS, Azure, and GCP is essential.',
    },
    {
        id: 'job4',
        title: 'Investment Associate',
        division: 'Investment Management',
        location: 'Hong Kong',
        description: 'Support the investment team in sourcing, due diligence, and execution of new investment opportunities. MBA preferred.',
    },
];

export const locations = [
  { id: 'ny', name: 'New York HQ', lat: 40.7128, lng: -74.0060 },
  { id: 'london', name: 'London Office', lat: 51.5074, lng: -0.1278 },
  { id: 'tokyo', name: 'Tokyo Office', lat: 35.6895, lng: 139.6917 },
  { id: 'sydney', name: 'Sydney Office', lat: -33.8688, lng: 151.2093 },
  { id: 'project-1-loc', name: 'Azure Tower Site', lat: 40.7580, lng: -73.9855 },
  { id: 'project-5-loc', name: 'Helios Wind Farm', lat: 34.0522, lng: -118.2437 },
];

export const exhibitions = [
  { event: 'PharmaTech Expo 2011', date: '22 to 24 April 2011', location: 'Indore' },
  { event: 'PharmaTech Expo 2013', date: '6 to 8 October 2013', location: 'Indore' },
  { event: 'PharmaTech Expo and Pack & PrinTech Expo 2015', date: '30 Oct to 1 November 2015', location: 'Indore' },
  { event: 'PharmaTech Expo and Pack & PrinTech Expo 2016', date: '21 to 23 August 2016', location: 'Ahmedabad' },
  { event: 'PharmaTech Expo & LabTech Expo 2017', date: '11 to 13 April 2017', location: 'Chandigarh' },
  { event: 'PharmaTech Expo & LabTech Expo 2017', date: '3 to 5 August 2017', location: 'Ahmedabad' },
  { event: 'PharmaTech Expo & LabTech Expo 2018', date: '27 to 29 April 2018', location: 'Chandigarh' },
  { event: 'PharmaTech Expo & LabTech Expo 2018', date: '22 to 24 August 2018', location: 'Ahmedabad' },
  { event: 'PharmaTech Expo & LabTech Expo 2019', date: '19 to 21 April 2019', location: 'Chandigarh' },
  { event: 'PharmaTech Expo & LabTech Expo 2019', date: '20 to 22 August 2019', location: 'Ahmedabad' },
  { event: 'PharmaTech Expo & LabTech Expo 2020', date: '4 to 6 March 2020', location: 'Mumbai' },
  { event: 'PharmaTech Expo & LabTech Expo 2022', date: '28 to 30 April 2022', location: 'Chandigarh' },
  { event: 'PharmaTech Expo & LabTech Expo 2022', date: '05 to 07 August 2022', location: 'Gandhinagar' },
];

export const upcomingExhibitions = [
    { event: 'PharmaTech Expo and LabTech Expo 2023', date: '11 to 13 April 2023', location: 'Chandigarh' },
    { event: 'PharmaTech Expo and LabTech Expo 2023', date: '25 to 27 August 2023', location: 'Gandhinagar' },
    { event: 'PharmaTech Expo & LabTech Expo 2024', date: '13 to 15 April 2024', location: 'Chandigarh' },
    { event: 'PharmaTech Expo & LabTech Expo 2024', date: '08 to 10 August 2024', location: 'Gandhinagar' },
    { event: 'PharmaTech Expo & LabTech Expo 2025', date: '08 to 10 January 2025', location: 'Bengaluru' },
    { event: 'PharmaTech Expo & LabTech Expo 2025', date: '10 to 12 April 2025', location: 'Chandigarh' },
];

export const seminars = [
    {
      event: 'Swarnim Vision\non 1st September 2012',
      location: 'Ahmedabad',
      topics: ['National Biotechnology Symposium (NBS) 2012'],
      partners: ['NYU Poly University, New York', 'FIP, Amsterdem'],
    },
    {
      event: 'Swarnim Vision\non 16th February 2013',
      location: 'Ahmedabad',
      topics: ['National Symposium on "Innovations in Pharmaceutical Sciences - NSIPS 2013"'],
      partners: ['FIP, Amsterdem'],
    },
    {
      event: 'Swarnim Vision\non 19th & 20th July, 2013',
      location: 'Ahmedabad',
      topics: ['"National Symposium on Bioequivalence Studies & Generic Product Development"'],
      partners: ['Association of Clinical Research Organisation (ACRO)'],
    },
    {
      event: 'PharmaTech Expo & Pack & PrinTech Expo 2016\nfrom 21 to 23 August 2016',
      location: 'Ahmedabad',
      topics: ['GMP for SME\'s - Schedule "M" & "Beyond"', 'Ayurveda - "The future of Healthcare"', 'Track & Trace - The Need of the Industry'],
      partners: ['Pharmaceutical Export Promotional Council (PHARMEXCIL)', 'B. V. Patel PERD Centre, Ahmedabad', 'Aseptic Technology Inc.'],
    },
    {
      event: 'PharmaTech Expo & LabTech Expo 2017\nfrom 11 to 13 April 2017',
      location: 'Chandigarh',
      topics: ['Pharma cGMP, Data Integrity and Documentation: Current Challenges'],
      partners: ['National Institute of Pharmaceutical Education and Research (NIPER)'],
    },
    {
      event: 'PharmaTech Expo & LabTech Expo 2017\nfrom 3 to 5 August 2017',
      location: 'Ahmedabad',
      topics: ['Doing Business with Africa', 'Impact of Analytical Technology on Quality Production of Pharmaceuticals'],
      partners: ['Indo-African Chamber of Commerce & Industry (IACCI) and Embassy of Niger and Embassy of Togo.', 'B. V. Patel PERD Centre, Ahmedabad'],
    },
    {
      event: 'PharmaTech Expo & LabTech Expo 2018\nfrom 27 to 29 April 2018',
      location: 'Chandigarh',
      topics: ['Technical Discussion on Pharmaceutical & Machinery industry'],
      partners: ['Indian Pharmaceutical Association, Delhi Branch'],
    },
    {
      event: 'PharmaTech Expo & LabTech Expo 2018\nfrom 22 to 24 August 2018',
      location: 'Ahmedabad',
      topics: ['Indian Pharma Industry: "Gearing for Global Giant"', 'Current Trends in Compliance - The Role of Human Resources'],
      partners: ['Food and Drugs Control Administration (FDCA), Gujarat', 'Pharma Knowledge Centre, Ahmedabad'],
    },
    {
      event: 'PharmaTech Expo & LabTech Expo 2019\nfrom 27 to 29 April 2019',
      location: 'Chandigarh',
      topics: ['Recent Developments in Indian Regulations and Needs of Pharma Industry'],
      partners: ['Indian Pharmaceutical Association, Delhi Branch'],
    },
    {
      event: 'PharmaTech Expo & LabTech Expo 2019\nfrom 20 to 22 August 2019',
      location: 'Ahmedabad',
      topics: ['Business & Investment Opportunity in Ethiopia Specially in Pharma & Healthcare Sector'],
      partners: ['Indo-Africa Chamber of Commerce and Industry (IACCI)'],
    },
    {
      event: 'PharmaTech Expo & LabTech Expo 2019\nfrom 28 to 30 April 2022',
      location: 'Chandigarh',
      topics: ['Quality and Regulatory Requirements of Pharma Export Business', 'Haryana Exporter\'s Conclave'],
      partners: ['Haryana Government', 'EEPC INDIA'],
    },
];
