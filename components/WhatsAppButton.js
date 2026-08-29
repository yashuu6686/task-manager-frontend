'use client';

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { companyInfo } from '@/data/siteData';

export default function WhatsAppButton() {
  return (
    <Link
      href={companyInfo.whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Chat with Core King Ply Specialist on WhatsApp"
      title="Chat with Core King Ply Specialist on WhatsApp"
    >
      <MessageCircle size={28} strokeWidth={2.2} />
    </Link>
  );
}

