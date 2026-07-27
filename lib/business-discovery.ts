export type DiscoveryField = {
  key: string;
  label: string;
  type: "text" | "email" | "tel" | "url" | "number" | "textarea" | "select" | "multi";
  required?: boolean;
  options?: readonly string[];
  placeholder?: string;
};

export type DiscoverySection = {
  id: number;
  title: string;
  description: string;
  fields: readonly DiscoveryField[];
};

const channels = ["Walk-ins", "Phone", "WhatsApp", "Facebook", "Instagram", "Website", "Referral", "Other"];
const pains = ["Too much paperwork", "Duplicate capturing", "Missed appointments", "Missed quotations", "Slow internal hand-offs", "Lost documents", "Manual invoicing", "Poor communication", "Forgetting follow-ups", "Stock problems", "Customer complaints", "Too many WhatsApp messages", "Too many emails", "Other"];
const paper = ["Job cards", "Quotations", "Invoices", "Delivery notes", "Checklists", "Inspection forms", "Timesheets", "Leave forms", "Incident reports", "Customer forms", "Contracts", "Stock sheets", "Other"];
const software = ["Xero", "Sage", "QuickBooks", "Pastel", "HubSpot", "Zoho", "Salesforce", "WhatsApp", "Microsoft Teams", "Slack", "Gmail", "Outlook", "Google Calendar", "Calendly", "PayFast", "Yoco", "Peach Payments", "Microsoft Excel", "Google Sheets", "Other"];
const automation = ["Quoting", "Customer follow-up", "Appointment booking", "Email replies", "WhatsApp replies", "Invoice generation", "Report generation", "Data capturing", "Employee onboarding", "Leave approvals", "Stock updates", "Reminder messages", "AI chatbot", "Internal knowledge base", "Customer portal"];
const ai = ["Answer customer questions", "Generate quotations", "Summarise meetings", "Write emails", "Analyse reports", "Forecast sales", "Schedule appointments", "Train staff", "Answer employee questions", "Search company documents", "Voice assistant", "Other"];

export const discoverySections: readonly DiscoverySection[] = [
  { id: 1, title: "Business Information", description: "Tell us who you are and give us the context needed to research the business.", fields: [
    {key:"businessName",label:"Business name",type:"text",required:true},{key:"industry",label:"Industry",type:"text",required:true},{key:"website",label:"Website",type:"url"},{key:"socialLinks",label:"Facebook, Instagram or LinkedIn links",type:"textarea"},{key:"businessAddress",label:"Business address",type:"textarea",required:true},
    {key:"fullName",label:"Contact person",type:"text",required:true},{key:"position",label:"Position",type:"text",required:true},{key:"email",label:"Business email",type:"email",required:true},{key:"phone",label:"Phone number",type:"tel",required:true},{key:"employees",label:"Number of employees",type:"number",required:true},{key:"branches",label:"Number of branches",type:"number",required:true},{key:"yearsInBusiness",label:"Years in business",type:"number",required:true}
  ]},
  { id: 2, title: "Business Overview", description: "Help us understand what you sell, who you serve and how customers reach you.", fields: [
    {key:"companyDescription",label:"Describe what your company does",type:"textarea",required:true},{key:"productsServices",label:"What products or services do you sell?",type:"textarea",required:true},{key:"idealCustomers",label:"Who are your ideal customers?",type:"textarea",required:true},{key:"customerChannels",label:"How do customers usually find you?",type:"multi",required:true,options:channels}
  ]},
  { id: 3, title: "Biggest Pain Points", description: "Show us where time, revenue and customer experience are being lost.", fields: [
    {key:"dailyFrustration",label:"What frustrates you the most every day?",type:"textarea",required:true},{key:"painPoints",label:"Which problems affect the business?",type:"multi",required:true,options:pains},{key:"hoursLost",label:"Hours lost to manual work each week",type:"select",required:true,options:["Less than 5","5–10","10–20","20+"]},{key:"oneProblem",label:"If you could remove one business problem tomorrow, what would it be?",type:"textarea",required:true}
  ]},
  { id: 4, title: "Current Workflows", description: "Describe the real steps, hand-offs and delays. This becomes the basis of your prototype and process map.", fields: [
    {key:"customerJourney",label:"How does a new customer become a paying customer? Describe every step.",type:"textarea",required:true,placeholder:"Enquiry → appointment → quotation → approval → invoice → payment → delivery → support"},
    {key:"salesWorkflow",label:"Sales workflow",type:"textarea"},{key:"serviceWorkflow",label:"Customer service and support workflow",type:"textarea"},{key:"projectWorkflow",label:"Project or job delivery workflow",type:"textarea"},{key:"staffWorkflow",label:"Staff onboarding and management workflow",type:"textarea"},{key:"financeWorkflow",label:"Finance and invoicing workflow",type:"textarea"},{key:"inventoryWorkflow",label:"Inventory or stock workflow",type:"textarea"},{key:"bookingWorkflow",label:"Booking or appointment workflow",type:"textarea"},{key:"afterSalesWorkflow",label:"After-sales and follow-up workflow",type:"textarea"}
  ]},
  { id: 5, title: "Paper and Document Processes", description: "Identify paperwork that can be digitised, routed or generated automatically.", fields: [
    {key:"paperProcesses",label:"Which processes still use paper?",type:"multi",options:paper},{key:"paperVolume",label:"Approximately how many paper forms are completed each day?",type:"number"},{key:"duplicateEntry",label:"Do employees rewrite the same information more than once?",type:"select",required:true,options:["Yes","No","Sometimes"]},{key:"documentStorage",label:"Where are documents stored?",type:"multi",required:true,options:["Office files","Filing cabinets","Google Drive","Dropbox","OneDrive","Email","WhatsApp","Other"]}
  ]},
  { id: 6, title: "Software and Integrations", description: "List the systems that a proposed solution must work with.", fields: [
    {key:"software",label:"Which systems do you currently use?",type:"multi",required:true,options:software},{key:"otherSoftware",label:"Other software, versions or important details",type:"textarea"},{key:"integrationProblems",label:"Which systems do not communicate properly today?",type:"textarea"},{key:"dataSources",label:"Where is your most important business data stored?",type:"textarea",required:true}
  ]},
  { id: 7, title: "Automation Opportunities", description: "Choose the workflows you would most like Nuvrixa to improve.", fields: [
    {key:"automationInterests",label:"What would you like to automate?",type:"multi",required:true,options:automation},{key:"automationPriority",label:"Which automation would create the biggest immediate impact?",type:"textarea",required:true},{key:"approvals",label:"Which actions must always be approved by a person?",type:"textarea"}
  ]},
  { id: 8, title: "AI Opportunities", description: "Identify where carefully governed AI could assist customers, staff and management.", fields: [
    {key:"aiInterests",label:"Where would you like AI to help?",type:"multi",options:ai},{key:"knowledgeSources",label:"Which documents or knowledge should an AI assistant use?",type:"textarea"},{key:"aiRestrictions",label:"What must AI never decide or do without human approval?",type:"textarea"}
  ]},
  { id: 9, title: "Budget, Timing and Success", description: "Keep the prototype and three implementation options realistic.", fields: [
    {key:"budget",label:"Comfortable investment range (USD)",type:"select",required:true,options:["$1,500–$2,500","$2,500–$5,000","$5,000–$10,000","$10,000–$25,000","$25,000+"]},{key:"timeline",label:"When would you like this implemented?",type:"select",required:true,options:["Immediately","Within 30 days","1–3 months","3–6 months","Just exploring"]},{key:"successMeasures",label:"How will you measure whether the solution is successful?",type:"textarea",required:true},{key:"decisionMakers",label:"Who will approve the project and who should attend the meeting?",type:"textarea",required:true}
  ]},
  { id: 10, title: "Prototype Brief and Supporting Files", description: "Give us the final direction and optional evidence needed to prepare before we meet.", fields: [
    {key:"prototypeFocus",label:"What should the first prototype demonstrate?",type:"textarea",required:true},{key:"idealBusiness",label:"If Nuvrixa redesigned your operations, what would your ideal business look like one year from today?",type:"textarea",required:true},{key:"documentLinks",label:"Optional links to forms, spreadsheets, reports, flowcharts, logos or brand guides",type:"textarea"}
  ]}
];
