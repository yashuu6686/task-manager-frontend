'use client';

import Link from 'next/link';
import { Mail } from 'lucide-react';
import { companyInfo } from '@/data/siteData';

export default function WhatsAppButton() {
  return (
    <Link
      href={companyInfo.emailLink}
      className="whatsapp-float"
      aria-label="Email Core King Ply Specialist"
      title="Email Core King Ply Specialist"
    >
      <Mail size={28} strokeWidth={2.2} />
    </Link>
  );
}

