
import { ReactNode } from "react";

export interface DonationCenter {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  isOpen: boolean;
  distance: string;
  icon: ReactNode;
}

export interface DonationImage {
  src: string;
  alt: string;
}
