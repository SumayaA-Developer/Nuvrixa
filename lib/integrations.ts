export const integrationsConfig = {
  hubSpotPortalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || "148852199",
  hubSpotRegion: process.env.NEXT_PUBLIC_HUBSPOT_REGION || "eu1",
  hubSpotAuditFormId: process.env.NEXT_PUBLIC_HUBSPOT_AUDIT_FORM_ID || "",
  hubSpotTrackingId: process.env.NEXT_PUBLIC_HUBSPOT_TRACKING_ID || "",
  calBookingUrl: process.env.NEXT_PUBLIC_CAL_BOOKING_URL || "",
  googleDriveUrl: process.env.NEXT_PUBLIC_GOOGLE_DRIVE_URL || "",
};

export const hasHubSpotAuditForm = Boolean(integrationsConfig.hubSpotAuditFormId);
export const hasHubSpotTracking = Boolean(integrationsConfig.hubSpotTrackingId);
export const hasCalBooking = Boolean(integrationsConfig.calBookingUrl);
