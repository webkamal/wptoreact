import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Link from "next/link";

export default function Home() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">
          Transform Your WordPress Site to Modern React
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Professional migration services with performance optimization and SEO
          preservation
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {[
          {
            title: "Performance Boost",
            description: "60-80% faster load times with modern architecture",
            icon: "⚡",
          },
          {
            title: "SEO Preserved",
            description: "Maintain your search rankings during migration",
            icon: "🔍",
          },
          {
            title: "Modern Stack",
            description: "Next.js, React, and TypeScript for future-proofing",
            icon: "💎",
          },
        ].map((feature) => (
          <Card key={feature.title} className="p-6">
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
