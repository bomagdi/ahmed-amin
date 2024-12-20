"use client";
import LinkButton from "./LinkButton";

import { useEffect, useState } from "react";


const DownloadButton = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // التأكد من أن الكود يتم تشغيله على العميل فقط
  }, []);

  const fileUrl = "/resume.pdf"; // المسار الصحيح للملف

  if (!isClient) return null;

  return (
    <LinkButton href={fileUrl} className="gap-x-2" outline>
      <a
        download="CV.pdf" // اسم الملف المقترح للتنزيل
        className="gap-x-2 flex items-center text-secondary"
      >
        Download CV
      </a>
    </LinkButton>
  );
};

export default DownloadButton;
