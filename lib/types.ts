export interface NavItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export interface MenuTab {
  label: string;
  items: MenuItem[];
}

export interface Testimonial {
  name: string;
  source: string;
  rating: number;
  quote: string;
}

export interface RestaurantHours {
  days: string;
  hours: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}

export interface ReservationRequest {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  partySize: string;
  notes?: string;
}

export interface CateringInquiry {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  guestCount: number;
  serviceType: "Drop-off catering" | "Pickup catering" | "On-site private event";
  notes?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone?: string;
  topic: "General question" | "Reservation help" | "Catering / events" | "Feedback";
  message: string;
}
