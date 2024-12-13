import { Phone, Mail, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function TopHeader({
  logo = '/uPVCnova.png',
  videoLink = '#videoRef',
  phone = '+91 9826057359',
  email = 'novaupvc@gmail.com',
}) {
  return (
    <header className="w-full px-4 py-0 shadow-sm">
      <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-40">
        {/* Logo */}
        <div className="text-white font-bold text-lg w-[20%]">
          <Link href="/">
            <Image
              src={logo}
              width={100}
              height={100}
              alt="Logo"
              className="bg-white w-10 sm:w-20 rounded-lg"
            />
          </Link>
        </div>

        {/* Contact Information */}
        <div className="flex flex-row items-center justify-between gap-6 w-[60%]">
          {/* Watch Video Button */}
          <a href={videoLink} className="flex items-center gap-2 text-[#c69240] hover:text-hover">
            <Play className="h-5 w-5" />
            <span className="text-sm font-medium">Watch Corporate<br />Video</span>
          </a>

          {/* Phone Numbers */}
          <div className="flex items-start gap-2">
            <Phone className="h-5 w-5 text-[#c69240] mt-1" />
            <div className="text-sm">
              
              <p className="text-gray-600">
                Phone: <Link href={`tel:${phone}`} className="text-gray-900">{phone}</Link>
              </p>
            </div>
          </div>

          {/* Email Addresses */}
          <div className="flex items-start gap-2">
            <Mail className="h-5 w-5 text-[#c69240] mt-1" />
            <div className="text-sm">
              <p className="text-gray-600">
                <a
                  href={`mailto:${email}`}
                  className="text-gray-900 hover:text-[#c69240]"
                >
                  {email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
