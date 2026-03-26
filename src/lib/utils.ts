import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const phone = "41992475613";

export function getWhatsAppLink(planName: string) {
  const message = `Olá! Tudo bem? Vi o plano ${planName} no site e gostei bastante. Tenho interesse em me matricular, pode me orientar nos próximos passos?`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function getWhatsappNavbarLink() {
  const message = `Olá, tudo bem? Tenho interesse em me matricular na academia e gostaria de saber os próximos passos.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
