export type DiscoveryFieldType =
  | "text" | "email" | "tel" | "url" | "number" | "date"
  | "textarea" | "select" | "multiselect" | "yesno"
  | "departments" | "processes" | "tools" | "uploads" | "ranking" | "consent";

export type DiscoveryField = {
  key: string;
  label: string;
  type: DiscoveryFieldType;
  required?: boolean;
  helper?: string;
  options?: readonly string[];
  placeholder?: string;
};

export type DiscoverySection = {
  id: number;
  title: string;
  description: string;
  fields: readonly DiscoveryField[];
};

const yesNo = ["Yes", "No", "Unsure"] as const;
const employeeRanges = ["Just me", "2–5", "6–10", "11–25", "26–50", "51–100", "More than 100"] as const;

export const departmentOptions = ["Sales", "Marketing", "Customer service", "Operations", "Administration", "Finance", "Human resources", "Procurement", "Stock or inventory", "Logistics", "Project management", "Legal or compliance", "Management", "IT", "Other"] as const;
export const toolOptions = ["Microsoft Excel", "Google Sheets", "Microsoft Word", "Google Docs", "Email", "WhatsApp", "Google Drive", "OneDrive", "Dropbox", "Accounting software", "CRM", "Project management software", "Booking software", "Point-of-sale system", "Inventory software", "HR software", "Payroll software", "Custom software", "Paper files", "Physical registers", "None", "Other"] as const;

export const discoverySections: readonly DiscoverySection[] = [
  { id: 1, title: "You and Your Business", description: "The essentials we need to understand who you are and the context of the business.", fields: [
    {key:"fullName",label:"Full name",type:"text",required:true},{key:"jobTitle",label:"Job title or role",type:"text",required:true},{key:"email",label:"Business email address",type:"email",required:true},{key:"phone",label:"Contact number",type:"tel",required:true},
    {key:"registeredName",label:"Business name",type:"text",required:true},{key:"website",label:"Business website",type:"url"},{key:"industry",label:"Industry",type:"text",required:true},{key:"employees",label:"Number of employees",type:"select",required:true,options:employeeRanges},
    {key:"productsServices",label:"Main products or services",type:"textarea",required:true},{key:"customerType",label:"Typical customers",type:"textarea"},{key:"country",label:"Country",type:"text",required:true}
  ]},
  { id: 2, title: "Goals and Biggest Problems", description: "Focus on the outcomes and operational friction that matter most right now.", fields: [
    {key:"topGoals",label:"What are your three most important business goals?",type:"textarea",required:true},{key:"primaryOutcome",label:"Which outcome matters most?",type:"select",required:true,options:["Save time","Reduce costs","Increase revenue","Improve customer service","Reduce errors","Improve reporting","Improve staff productivity","Scale without hiring immediately","Other"]},
    {key:"growthBlocker",label:"What is the biggest operational problem holding the business back?",type:"textarea",required:true},{key:"repetitiveTasks",label:"Which manual or repetitive tasks consume the most time?",type:"textarea",required:true},{key:"errorTasks",label:"Where do delays, errors or customer complaints occur?",type:"textarea"},
    {key:"unchangedRisk",label:"What happens if nothing changes?",type:"textarea"},{key:"sixMonthSuccess",label:"What would success look like six months after implementation?",type:"textarea",required:true}
  ]},
  { id: 3, title: "Priority Workflow", description: "Describe the one process you most want us to prototype. Add another only if it is closely connected.", fields: [
    {key:"departments",label:"Teams involved in this workflow",type:"multiselect",required:true,options:departmentOptions},{key:"processes",label:"Priority business workflow",type:"processes",required:true}
  ]},
  { id: 4, title: "Tools, Data and Controls", description: "Show us what the workflow uses today and the practical constraints the prototype must respect.", fields: [
    {key:"tools",label:"Tools currently used in this workflow",type:"tools",required:true},{key:"disconnectedSystems",label:"Do these tools need to exchange information?",type:"yesno",options:yesNo},{key:"frequentDocuments",label:"Which forms, spreadsheets, documents or reports are used?",type:"textarea"},
    {key:"documentStorage",label:"Where is the information currently stored?",type:"textarea"},{key:"personalInfo",label:"Does the workflow handle personal or confidential information?",type:"yesno",options:yesNo},{key:"accessLevels",label:"Do different users need different access levels?",type:"yesno",options:yesNo},
    {key:"approvalActions",label:"Which actions must always be approved by a person?",type:"textarea"},{key:"regulations",label:"Any security, legal or industry requirements we should know about?",type:"textarea"}
  ]},
  { id: 5, title: "Prototype Brief", description: "Define what we should prepare so the meeting is visual, useful and decision-ready.", fields: [
    {key:"prototypeDemo",label:"What should the prototype demonstrate?",type:"textarea",required:true},{key:"prototypeProcess",label:"Confirm the exact process the prototype should focus on",type:"textarea",required:true},{key:"essentialFeatures",label:"Which features or screens are essential?",type:"textarea",required:true},
    {key:"managementNumbers",label:"Which numbers, status updates or reports should it show?",type:"textarea"},{key:"usefulAlerts",label:"Which alerts, reminders or automated messages would be useful?",type:"textarea"},{key:"humanDecisions",label:"Which decisions must remain with a person?",type:"textarea"},
    {key:"prototypeData",label:"What data should the prototype use?",type:"select",required:true,options:["Sample data","Client-provided, non-sensitive data","A combination","Unsure"]},{key:"prototypeBranding",label:"Should your branding be reflected in the prototype?",type:"textarea"},
    {key:"meetingAttendees",label:"Who will attend the meeting?",type:"textarea"},{key:"decisionMaker",label:"Who is the final decision-maker?",type:"text"}
  ]},
  { id: 6, title: "Budget and Timing", description: "This helps us keep the proposed solution realistic and appropriately phased.", fields: [
    {key:"budgetRange",label:"Preferred budget range (USD)",type:"select",required:true,options:["Under $1,000","$1,000–$2,500","$2,501–$5,000","$5,001–$10,000","$10,001–$25,000","More than $25,000","Budget not yet determined","Prefer not to disclose"]},
    {key:"desiredStart",label:"Desired start date",type:"date"},{key:"desiredLaunch",label:"Desired launch date",type:"date"},{key:"urgent",label:"Is the project urgent?",type:"yesno",options:yesNo},{key:"deadlineDriver",label:"What is driving the deadline?",type:"textarea"},
    {key:"phasedBuild",label:"Would you consider a phased build?",type:"yesno",options:yesNo},{key:"proceedCriteria",label:"What would convince the business to proceed?",type:"textarea"}
  ]},
  { id: 7, title: "Review and Consent", description: "Review the brief, edit anything necessary and confirm the submission.", fields: [{key:"consent",label:"Confirmations",type:"consent",required:true}]}
] as const;

export const consentStatements = [
  "I confirm that the information provided is accurate to the best of my knowledge.",
  "I understand that this assessment does not create a binding contract.",
  "I understand that Nuvrixa may use this information to prepare a proposed solution, process map, recommendation or prototype.",
  "I understand that any estimated scope or pricing will only be confirmed after review.",
  "I confirm that I am authorised to submit information on behalf of the business.",
  "I agree to the Nuvrixa Privacy Policy.",
  "I agree to be contacted regarding this enquiry."
] as const;

export function requiredKeysForSection(section: DiscoverySection) {
  return section.fields.filter((field) => field.required).map((field) => field.key);
}
