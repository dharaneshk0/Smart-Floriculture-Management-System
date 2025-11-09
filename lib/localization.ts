
import type { Language, TranslationKey } from '../types';

export const translations: Record<TranslationKey, Record<Language, string>> = {
  appName: {
    en: "Smart Floriculture Management System",
    hi: "स्मार्ट पुष्पकृषि प्रबंधन प्रणाली",
    te: "స్మార్ట్ ఫ్లోరికల్చర్ మేనేజ్‌మెంట్ సిస్టమ్",
  },
  navHome: {
    en: "Home",
    hi: "होम",
    te: "హోమ్",
  },
  navDiseaseDetection: {
    en: "Disease Detection",
    hi: "रोग पहचान",
    te: "వ్యాధి నిర్ధారణ",
  },
  navYieldPrediction: {
    en: "Yield Prediction",
    hi: "उपज भविष्यवाणी",
    te: "దిగుబడి అంచనా",
  },
  navMarketPrice: {
    en: "Market Price",
    hi: "बाजार मूल्य",
    te: "మార్కెట్ ధర",
  },
  navTraining: {
    en: "Training",
    hi: "प्रशिक्षण",
    te: "శిక్షణ",
  },
  navChatbot: {
    en: "KisanGPT",
    hi: "किसानGPT",
    te: "కిసాన్‌జిపిటి",
  },
  language: {
    en: "Language",
    hi: "भाषा",
    te: "భాష",
  },
  english: {
    en: "English",
    hi: "अंग्रेज़ी",
    te: "ఆంగ్లము",
  },
  hindi: {
    en: "Hindi",
    hi: "हिंदी",
    te: "హిందీ",
  },
  telugu: {
    en: "Telugu",
    hi: "तेलुगू",
    te: "తెలుగు",
  },
  selectLanguage: {
    en: "Select Your Language",
    hi: "अपनी भाषा चुनें",
    te: "మీ భాషను ఎంచుకోండి",
  },
  welcomeMessage: {
    en: "Revolutionizing Floriculture with AI",
    hi: "AI के साथ पुष्पकृषि में क्रांति",
    te: "AIతో పూల పెంపకంలో విప్లవం",
  },
  welcomeSubtitle: {
    en: "Your intelligent partner for flower farming. Get insights on disease detection, yield prediction, market prices, and more.",
    hi: "फूलों की खेती के लिए आपका बुद्धिमान साथी। रोग पहचान, उपज भविष्यवाणी, बाजार मूल्य, और बहुत कुछ पर जानकारी प्राप्त करें।",
    te: "పూల పెంపకంలో మీ తెలివైన భాగస్వామి. వ్యాధి నిర్ధారణ, దిగుబడి అంచనా, మార్కెట్ ధరలు మరియు మరిన్నింటిపై అంతర్దృష్టులను పొందండి.",
  },
  exploreFeatures: {
    en: "Explore Our Features",
    hi: "हमारी सुविधाएँ अन्वेषण करें",
    te: "మా ఫీచర్‌లను అన్వేషించండి",
  },
  diseaseDetectionTitle: {
    en: "Flower Disease Detection",
    hi: "फूल रोग पहचान",
    te: "పూల వ్యాధి నిర్ధారణ",
  },
  diseaseDetectionDesc: {
    en: "Upload an image of a flower to detect diseases instantly using our advanced CNN model.",
    hi: "हमारे उन्नत सीएनएन मॉडल का उपयोग करके तुरंत रोगों का पता लगाने के लिए फूल की एक छवि अपलोड करें।",
    te: "మా అధునాతన CNN మోడల్‌ని ఉపయోగించి తక్షణమే వ్యాధులను గుర్తించడానికి పువ్వు యొక్క చిత్రాన్ని అప్‌లోడ్ చేయండి.",
  },
  yieldPredictionTitle: {
    en: "Crop Yield Prediction",
    hi: "फसल उपज भविष्यवाणी",
    te: "పంట దిగుబడి అంచనా",
  },
  yieldPredictionDesc: {
    en: "Predict your flower crop yield based on weather conditions and soil parameters.",
    hi: "मौसम की स्थिति और मिट्टी के मापदंडों के आधार पर अपनी फूलों की फसल की उपज की भविष्यवाणी करें।",
    te: "వాతావరణ పరిస్థితులు మరియు నేల పారామితుల ఆధారంగా మీ పూల పంట దిగుబడిని అంచనా వేయండి.",
  },
  marketPriceTitle: {
    en: "Market Price Analysis",
    hi: "बाजार मूल्य विश्लेषण",
    te: "మార్కెట్ ధర విశ్లేషణ",
  },
  marketPriceDesc: {
    en: "Get insights into market price trends and predict future prices for your flower crops.",
    hi: "बाजार मूल्य के रुझानों में अंतर्दृष्टि प्राप्त करें और अपनी फूलों की फसलों के लिए भविष्य की कीमतों की भविष्यवाणी करें।",
    te: "మార్కెట్ ధరల ట్రెండ్‌లపై అంతర్దృష్టులను పొందండి మరియు మీ పూల పంటలకు భవిష్యత్తు ధరలను అంచనా వేయండి.",
  },
  trainingTitle: {
    en: "AI Model Training",
    hi: "एआई मॉडल प्रशिक्षण",
    te: "AI మోడల్ శిక్షణ",
  },
  trainingDesc: {
    en: "Improve the AI by training it with your own datasets. Supports CSV, PDF, and image files.",
    hi: "अपने स्वयं के डेटासेट के साथ AI को प्रशिक्षित करके उसमें सुधार करें। सीएसवी, पीडीएफ और छवि फ़ाइलों का समर्थन करता है।",
    te: "మీ స్వంత డేటాసెట్‌లతో AIకి శిక్షణ ఇవ్వడం ద్వారా దాన్ని మెరుగుపరచండి. CSV, PDF మరియు చిత్ర ఫైల్‌లకు మద్దతు ఇస్తుంది.",
  },
  chatbotTitle: {
    en: "AI Chatbot (KisanGPT)",
    hi: "एआई चैटबॉट (किसानGPT)",
    te: "AI చాట్‌బాట్ (కిసాన్‌జిపిటి)",
  },
  chatbotDesc: {
    en: "Ask questions and get expert advice in your preferred language from our AI assistant.",
    hi: "हमारे एआई सहायक से अपनी पसंदीदा भाषा में प्रश्न पूछें और विशेषज्ञ सलाह प्राप्त करें।",
    te: "మా AI సహాయకుడి నుండి మీకు ఇష్టమైన భాషలో ప్రశ్నలు అడగండి మరియు నిపుణుల సలహాలను పొందండి.",
  },
  launch: {
    en: "Launch",
    hi: "लॉन्च",
    te: "ప్రారంభించండి",
  },
  uploadImage: {
    en: "Upload an image of the flower",
    hi: "फूल की एक छवि अपलोड करें",
    te: "పువ్వు యొక్క చిత్రాన్ని అప్‌లోడ్ చేయండి",
  },
  detectDisease: {
    en: "Detect Disease",
    hi: "रोग का पता लगाएं",
    te: "వ్యాధిని గుర్తించండి",
  },
  analyzing: {
    en: "Analyzing...",
    hi: "विश्लेषण कर रहा है...",
    te: "విశ్లేషిస్తోంది...",
  },
  noFileSelected: {
    en: "No file selected",
    hi: "कोई फ़ाइल नहीं चुनी गई",
    te: "ఫైల్ ఎంచుకోలేదు",
  },
  temperature: {
    en: "Temperature (°C)",
    hi: "तापमान (°C)",
    te: "ఉష్ణోగ్రత (°C)",
  },
  humidity: {
    en: "Humidity (%)",
    hi: "नमी (%)",
    te: "తేమ (%)",
  },
  soilPH: {
    en: "Soil pH",
    hi: "मिट्टी का पीएच",
    te: "నేల pH",
  },
  rainfall: {
    en: "Rainfall (mm)",
    hi: "वर्षा (मिमी)",
    te: "వర్షపాతం (mm)",
  },
  predictYield: {
    en: "Predict Yield",
    hi: "उपज की भविष्यवाणी करें",
    te: "దిగుబడిని అంచనా వేయండి",
  },
  predicting: {
    en: "Predicting...",
    hi: "भविष्यवाणी कर रहा है...",
    te: "అంచనా వేస్తోంది...",
  },
  marketPriceHeader: {
    en: "Market Price & Profit/Loss Analysis",
    hi: "बाजार मूल्य और लाभ/हानि विश्लेषण",
    te: "మార్కెట్ ధర & లాభం/నష్టం విశ్లేషణ",
  },
  priceChartTitle: {
    en: "Flower Prices Over Last Year (per unit)",
    hi: "पिछले वर्ष के दौरान फूलों की कीमतें (प्रति यूनिट)",
    te: "గత సంవత్సరంలో పూల ధరలు (ఒక్కో యూనిట్‌కు)",
  },
  profitLossChartTitle: {
    en: "Profit / Loss Projection",
    hi: "लाभ / हानि प्रक्षेपण",
    te: "లాభం / నష్టం ప్రొజెక్షన్",
  },
  months: {
    en: "Months",
    hi: "महीने",
    te: "నెలలు",
  },
  price: {
    en: "Price",
    hi: "कीमत",
    te: "ధర",
  },
  profit: {
    en: "Profit",
    hi: "लाभ",
    te: "లాభం",
  },
  loss: {
    en: "Loss",
    hi: "हानि",
    te: "నష్టం",
  },
  trainModelHeader: {
    en: "Train the Disease Detection AI",
    hi: "रोग पहचान एआई को प्रशिक्षित करें",
    te: "వ్యాధి నిర్ధారణ AIకి శిక్షణ ఇవ్వండి",
  },
  uploadDataset: {
    en: "Upload Dataset",
    hi: "डेटासेट अपलोड करें",
    te: "డేటాసెట్‌ను అప్‌లోడ్ చేయండి",
  },
  supportedFormats: {
    en: "Supported formats: CSV, PDF, ZIP (with images)",
    hi: "समर्थित प्रारूप: सीएसवी, पीडीएफ, ज़िप (छवियों के साथ)",
    te: "మద్దతు ఉన్న ఫార్మాట్‌లు: CSV, PDF, ZIP (చిత్రాలతో)",
  },
  startTraining: {
    en: "Start Training",
    hi: "प्रशिक्षण शुरू करें",
    te: "శిక్షణ ప్రారంభించండి",
  },
  trainingProgress: {
    en: "Training in Progress...",
    hi: "प्रशिक्षण चल रहा है...",
    te: "శిక్షణ పురోగతిలో ఉంది...",
  },
  chatbotHeader: {
    en: "KisanGPT - Your AI Farming Assistant",
    hi: "किसानजीपीटी - आपका एआई खेती सहायक",
    te: "కిసాన్‌జిపిటి - మీ AI వ్యవసాయ సహాయకుడు",
  },
  chatbotPlaceholder: {
    en: "Ask about crop diseases, market prices, or farming techniques...",
    hi: "फसल रोगों, बाजार कीमतों, या खेती की तकनीकों के बारे में पूछें...",
    te: "పంట వ్యాధులు, మార్కెట్ ధరలు, లేదా వ్యవసాయ పద్ధతుల గురించి అడగండి...",
  },
  chatbotWelcome: {
    en: "Hello! I am KisanGPT. How can I assist you with your floriculture needs today?",
    hi: "नमस्ते! मैं किसानजीपीटी हूँ। मैं आज आपकी पुष्पकृषि की जरूरतों में कैसे सहायता कर सकता हूँ?",
    te: "నమస్కారం! నేను కిసాన్‌జిపిటిని. ఈ రోజు మీ పూల పెంపకం అవసరాలకు నేను ఎలా సహాయపడగలను?",
  },
  jan: { en: "Jan", hi: "जन", te: "జన" },
  feb: { en: "Feb", hi: "फ़र", te: "ఫిబ్ర" },
  mar: { en: "Mar", hi: "मार्च", te: "మార్చి" },
  apr: { en: "Apr", hi: "अप्रैल", te: "ఏప్రి" },
  may: { en: "May", hi: "मई", te: "మే" },
  jun: { en: "Jun", hi: "जून", te: "జూన్" },
  jul: { en: "Jul", hi: "जुलाई", te: "జూలై" },
  aug: { en: "Aug", hi: "अग", te: "ఆగ" },
  sep: { en: "Sep", hi: "सित", te: "సెప్టెం" },
  oct: { en: "Oct", hi: "अक्टू", te: "అక్టో" },
  nov: { en: "Nov", hi: "नव", te: "నవం" },
  dec: { en: "Dec", hi: "दिस", te: "డిసెం" },
  footerText: {
    en: "© 2024 Smart Floriculture Management System. All Rights Reserved.",
    hi: "© 2024 स्मार्ट पुष्पकृषि प्रबंधन प्रणाली। सर्वाधिकार सुरक्षित।",
    te: "© 2024 స్మార్ట్ ఫ్లోరికల్చర్ మేనేజ్‌మెంట్ సిస్టమ్. అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.",
  }
};
