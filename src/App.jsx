import React, { useState } from 'react';
import { Shuffle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';


const companies = [ // hardcoded bitch
  "Uber", "Airbnb", "Spotify", "Netflix", "Instagram", "LinkedIn", "Amazon", "eBay",
  "Etsy", "Shopify", "Gmail", "WhatsApp", "YouTube", "Twitter", "Pinterest", "Reddit",
  "Dropbox", "Zoom", "Slack", "Discord", "TikTok", "Snapchat", "Microsoft Teams", "Google Drive",
  "Apple Music", "Google Maps", "Waze", "Venmo", "PayPal", "Square", "DoorDash", "Grubhub",
  "Instacart", "Postmates", "Robinhood", "Coinbase", "Duolingo", "Coursera", "Udemy", "Khan Academy",
  "Strava", "Nike Run Club", "Peloton", "ClassPass", "Headspace", "Calm", "MyFitnessPal", "Fitbit",
  "OpenTable", "Yelp", "Tripadvisor", "Booking.com", "Expedia", "Kayak", "Zillow", "Redfin",
  "Indeed", "Glassdoor", "AngelList", "Craigslist", "Medium", "Substack", "WordPress", "Squarespace",
  "Canva", "Adobe Creative Cloud", "Figma", "Sketch", "Notion", "Evernote", "Trello", "Asana",
  "VSCO", "Lightroom", "Twitch", "Steam", "PlayStation Now", "Xbox Game Pass", "Nintendo Online", "Roblox",
  "Tinder", "Bumble", "Hinge", "Match", "Meetup", "Eventbrite", "TaskRabbit", "Fiverr",
  "Upwork", "Behance", "DeviantArt", "SoundCloud", "Bandcamp", "Shazam", "Audible", "Kindle",
  "Google Photos", "iCloud", "OneDrive", "Box", "WeTransfer", "BitTorrent", "Signal", "Telegram",
  "Wix", "Shopify", "BigCommerce", "WooCommerce", "Mailchimp", "Constant Contact", "Calendly", "Doodle"
];

const users = [
  "photographers", "musicians", "artists", "designers", "writers", "developers", "entrepreneurs", "students",
  "teachers", "doctors", "nurses", "therapists", "trainers", "coaches", "athletes", "gamers",
  "chefs", "bakers", "food critics", "wine enthusiasts", "travelers", "backpackers", "digital nomads", "expats",
  "parents", "kids", "teenagers", "seniors", "pet owners", "dog walkers", "cat lovers", "bird watchers",
  "gardeners", "farmers", "florists", "landscapers", "architects", "interior designers", "real estate agents", "homeowners",
  "renters", "landlords", "property managers", "contractors", "plumbers", "electricians", "mechanics", "handymen",
  "lawyers", "accountants", "consultants", "freelancers", "remote workers", "office workers", "retail workers", "service workers",
  "researchers", "scientists", "engineers", "mathematicians", "data analysts", "marketers", "salespeople", "entrepreneurs",
  "investors", "traders", "financial advisors", "insurance agents", "bankers", "loan officers", "crypto traders", "miners",
  "artists", "sculptors", "painters", "illustrators", "graphic designers", "UI designers", "UX designers", "web designers",
  "videographers", "editors", "producers", "directors", "actors", "musicians", "dancers", "performers",
  "bloggers", "vloggers", "influencers", "streamers", "podcasters", "journalists", "reporters", "editors",
  "fitness enthusiasts", "yogis", "runners", "cyclists", "swimmers", "climbers", "hikers", "campers",
  "foodies", "bartenders", "baristas", "sommeliers", "nutritionists", "dietitians", "health coaches", "personal trainers"
];

const technologies = [
  "AI", "machine learning", "deep learning", "neural networks", "computer vision", "natural language processing", "robotics", "automation",
  "blockchain", "cryptocurrency", "smart contracts", "NFTs", "DeFi", "Web3", "decentralized storage", "distributed computing",
  "IoT", "sensors", "wearables", "smart home", "connected devices", "edge computing", "5G", "mesh networks",
  "AR", "VR", "mixed reality", "spatial computing", "3D printing", "additive manufacturing", "CAD", "digital twins",
  "cloud computing", "serverless", "containers", "microservices", "APIs", "webhooks", "real-time data", "streaming",
  "quantum computing", "quantum encryption", "quantum sensors", "quantum networks", "biometrics", "facial recognition", "voice recognition", "gesture control",
  "drones", "autonomous vehicles", "self-driving cars", "electric vehicles", "vertical takeoff", "flying cars", "hyperloop", "space tech",
  "genomics", "CRISPR", "biotech", "synthetic biology", "neurotechnology", "brain-computer interfaces", "prosthetics", "exoskeletons",
  "renewable energy", "solar power", "wind power", "battery storage", "smart grid", "microgrids", "energy harvesting", "fusion power",
  "cybersecurity", "encryption", "zero trust", "biometric authentication", "privacy tech", "data protection", "identity management", "access control",
  "computer graphics", "ray tracing", "motion capture", "volumetric video", "holography", "light field", "photogrammetry", "rendering",
  "voice assistants", "chatbots", "conversational AI", "speech synthesis", "language translation", "text-to-speech", "speech-to-text", "natural language generation",
  "predictive analytics", "big data", "data mining", "statistical analysis", "forecasting", "optimization", "simulation", "modeling"
];

const App = () => {
  const [numIdeas, setNumIdeas] = useState(5);
  const [ideas, setIdeas] = useState([]);

  const generateIdeas = () => {
    const newIdeas = Array(numIdeas).fill(0).map(() => ({
      company: companies[Math.floor(Math.random() * companies.length)],
      user: users[Math.floor(Math.random() * users.length)],
      tech: technologies[Math.floor(Math.random() * technologies.length)]
    }));
    setIdeas(newIdeas);
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-200">
      <Card className="w-full max-w-3xl mx-auto p-6 shadow-xl bg-white rounded-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-indigo-600">
            🚀 onemillionideas.xyz
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4 justify-center">
            <label className="flex items-center gap-2 text-gray-700">
              <span className="font-medium">Number of ideas:</span>
              <input
                type="number"
                min="1"
                max="20"
                value={numIdeas}
                onChange={(e) => setNumIdeas(parseInt(e.target.value))}
                className="w-16 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </label>
            <button
              onClick={generateIdeas}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg shadow hover:bg-indigo-600 transition"
            >
              <Shuffle size={18} />
              Generate
            </button>
          </div>
          <div className="space-y-4">
            {ideas.map((idea, index) => (
              <div
                key={index}
                className="p-4 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <p className="text-lg font-medium text-gray-800">
                  <span className="text-indigo-600 font-bold">
                    {idea.company}
                  </span>{" "}
                  for{" "}
                  <span className="text-teal-600 font-semibold">
                    {idea.user}
                  </span>
                  , using{" "}
                  <span className="text-blue-600 font-bold">{idea.tech}</span>.
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

};

export default App;
