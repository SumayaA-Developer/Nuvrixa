"use client";

import { useEffect } from "react";

export function AuditLinkRouter(){
  useEffect(()=>{
    function routeAuditClick(event:MouseEvent){
      const link=(event.target as HTMLElement).closest("a");
      if(link && /^FAQ$/i.test((link.textContent||"").trim())){
        event.preventDefault();
        window.location.href="/faq";
        return;
      }
      if(link && /^Contact$/i.test((link.textContent||"").trim())){
        event.preventDefault();
        window.location.href="/contact";
        return;
      }
      if(link && /^Explore Solutions/i.test((link.textContent||"").trim())){
        event.preventDefault();
        window.location.href="/solutions";
        return;
      }
      if(!link || window.location.pathname==="/audit" || link.pathname==="/audit") return;
      if(/audit/i.test(link.textContent||"")){
        event.preventDefault();
        window.location.href="/audit";
      }
    }
    document.addEventListener("click",routeAuditClick);
    return()=>document.removeEventListener("click",routeAuditClick);
  },[]);
  return null;
}
