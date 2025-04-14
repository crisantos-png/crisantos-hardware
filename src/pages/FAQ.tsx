
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FaqPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow py-16 md:py-24">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-8 text-hw-gray-900">Frequently Asked Questions</h1>
          <p className="text-lg mb-12">
            Find answers to common questions about our products, services, and shopping experience.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              <AccordionItem value="item-1" className="border border-hw-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-hw-gray-50">
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-hw-gray-50">
                  We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and shop financing options.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border border-hw-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-hw-gray-50">
                  How long does shipping take?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-hw-gray-50">
                  Standard shipping typically takes 3-5 business days. Express shipping (1-2 business days) is available for an additional fee.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border border-hw-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-hw-gray-50">
                  Do you offer tool rentals?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-hw-gray-50">
                  Yes, we offer tool rentals for select power tools and equipment. Visit our Services page for more information on rental terms and availability.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border border-hw-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-hw-gray-50">
                  What is your return policy?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-hw-gray-50">
                  We offer a 30-day return policy for most items in new, unused condition with original packaging. Visit our Returns page for detailed information.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border border-hw-gray-200 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:bg-hw-gray-50">
                  Do you offer price matching?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-hw-gray-50">
                  Yes, we price match against authorized retailers for identical products. Contact our customer service team with details of the competitor's pricing.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FaqPage;
