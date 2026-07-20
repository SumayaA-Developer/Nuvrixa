import { NextResponse } from "next/server";

export async function POST(request:Request){
 try{
  const data=await request.json();
  const required=["firstname","email","company","industry","inquiry_type","subject","message","timeline"];
  if(required.some(key=>!data[key])) return NextResponse.json({error:"Please complete all required fields."},{status:400});
  const token=process.env.HUBSPOT_PRIVATE_APP_TOKEN;
  if(!token) return NextResponse.json({error:"Contact automation is not configured."},{status:503});
  const detailedMessage=[data.message,`Inquiry type: ${data.inquiry_type}`,`Timeline: ${data.timeline}`,`Budget: ${data.budget||"Not supplied"}`,`Industry: ${data.industry}`].join("\n\n");
  const response=await fetch("https://api.hubapi.com/crm/v3/objects/contacts/batch/upsert",{method:"POST",headers:{Authorization:`Bearer ${token}`,"Content-Type":"application/json"},body:JSON.stringify({inputs:[{id:data.email,idProperty:"email",properties:{email:data.email,firstname:data.firstname,lastname:data.lastname||"",company:data.company,jobtitle:data.jobtitle||"",industry:data.industry,message:detailedMessage,hs_lead_status:"NEW"}}]})});
  if(!response.ok){console.error("HubSpot contact submission failed",await response.text());return NextResponse.json({error:"We could not deliver your message."},{status:502})}
  return NextResponse.json({ok:true});
 }catch{return NextResponse.json({error:"We could not process your message."},{status:500})}
}
