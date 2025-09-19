import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const items = [
  {
    value: "item-1",
    trigger: "Product Information",
    content1: "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
    content2: "Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts."
  },
  {
    value: "item-2",
    trigger: "Shipping Details",
    content1: "We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.",
    content2: "All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal."
  },
  {
    value: "item-3",
    trigger: "Return Policy",
    content1: "We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition.",
    content2: "Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item."
  }
];

export default function Home() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >

      {
        items.map(({ value, trigger, content1, content2 }) => (
          <AccordionItem value={value} key={value} >
            <AccordionTrigger>{trigger}</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                {content1}
              </p>
              <p>
                {content2}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))
      }

    </Accordion>
  );
}
