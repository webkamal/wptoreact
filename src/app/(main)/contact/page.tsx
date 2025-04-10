import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-muted-foreground mb-8">
          Have questions? Fill out the form below and we'll get back to you
          within 24 hours.
        </p>

        <div className="bg-white dark:bg-gray-900 rounded-lg border p-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
