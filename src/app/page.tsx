"use client";
import { useEffect, useState } from "react";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return <LandingPage />;
}
