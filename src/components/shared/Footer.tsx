"use client";

import Link from "next/link";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/Button"; // Adjusted relative path
import { cn } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy", href: "/privacy" },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/yourusername",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/yourprofile",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://twitter.com/yourhandle",
    },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:your@email.com" },
  ];

  return (
    <footer className="border-t bg-secondary/50">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-bold text-xl">WPToReact</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Transforming WordPress experiences into modern web applications.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                {footerLinks.slice(0, 3).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.slice(3).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter/Social */}
          <div className="space-y-4">
            <h3 className="font-semibold">Stay Updated</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  asChild
                >
                  <Link href={social.href} target="_blank" rel="noopener">
                    {social.icon}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-6 text-center text-sm text-muted-foreground">
          © {currentYear} WPToReact. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
