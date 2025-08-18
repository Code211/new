"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: "registration",
    question: "How do I register for Code211 Hackathon 2025?",
    answer:
      "Registration is completely free! Simply click the 'Register Now' button and fill out the form with your details. You'll receive a confirmation email with all the necessary information including venue details, what to bring, and pre-event resources.",
  },
  {
    id: "team-formation",
    question: "Can I participate solo or do I need a team?",
    answer:
      "Both options are welcome! You can register as a solo participant and we'll help you find teammates during the opening ceremony, or you can register with a pre-formed team of up to 4 members. We encourage collaboration and will facilitate team formation for those who need it.",
  },
  {
    id: "experience-level",
    question: "What skill level is required to participate?",
    answer:
      "Code211 welcomes hackers of all skill levels! Whether you're a complete beginner or a seasoned developer, there's a place for you. We'll have mentors available throughout the event to help with technical challenges, and workshops designed for different experience levels.",
  },
  {
    id: "prizes",
    question: "What prizes can I win?",
    answer:
      "We have amazing prizes worth over $10,000! Categories include Best Overall Project ($3,000), Best AI/ML Implementation ($2,000), Best Social Impact ($1,500), Best Design ($1,000), and several sponsor-specific prizes. All participants also receive exclusive swag and certificates.",
  },
  {
    id: "what-to-bring",
    question: "What should I bring to the hackathon?",
    answer:
      "Bring your laptop, chargers, any hardware you want to use, and a positive attitude! We'll provide meals, snacks, drinks, WiFi, power outlets, and basic hardware like Arduino kits. Don't forget a sleeping bag if you plan to stay overnight, though we'll have designated rest areas.",
  },
  {
    id: "judging-criteria",
    question: "How will projects be judged?",
    answer:
      "Projects will be evaluated on four main criteria: Innovation & Creativity (25%), Technical Implementation (25%), Design & User Experience (25%), and Presentation & Demo (25%). Our panel includes industry experts, startup founders, and technical leaders who will provide valuable feedback.",
  },
  {
    id: "intellectual-property",
    question: "Who owns the intellectual property of my project?",
    answer:
      "You retain full ownership of your intellectual property! Code211 follows standard hackathon practices - you own what you create. We only ask for permission to showcase winning projects in our portfolio and social media for promotional purposes.",
  },
  {
    id: "food-accommodation",
    question: "Will food and accommodation be provided?",
    answer:
      "Yes! We provide all meals during the 48-hour period including breakfast, lunch, dinner, and plenty of snacks and beverages. The venue will be open 24/7 with designated sleeping areas, but you're also free to go home if you prefer. We accommodate dietary restrictions - just let us know during registration.",
  },
]

export function FAQ() {
  const titleRef = useRef(null)
  const isTitleInView = useInView(titleRef, { once: true })

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#161b22] via-[#0d1117] to-[#161b22] opacity-50" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-[#1f6feb]" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#e6edf3]">FAQ</h2>
          </div>
          <p className="text-xl text-[#8b949e] max-w-2xl mx-auto">
            Got questions? We've got answers. Everything you need to know about Code211.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={faq.id}
                  className="bg-[#161b22] border border-[#1f6feb]/30 rounded-lg overflow-hidden hover:border-[#1f6feb] transition-all duration-300 group"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group-hover:bg-[#1f6feb]/5 transition-all duration-300">
                    <div className="flex items-center justify-between w-full">
                      <span className="text-[#e6edf3] font-semibold text-lg pr-4 group-hover:text-[#58a6ff] transition-colors duration-300">
                        {faq.question}
                      </span>
                      <motion.div
                        className="text-[#1f6feb] flex-shrink-0"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-5 h-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                      </motion.div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="text-[#8b949e] leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Still have questions section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#161b22] border border-[#1f6feb] rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#e6edf3] mb-4">Still have questions?</h3>
            <p className="text-[#8b949e] mb-6">
              Can't find what you're looking for? Our team is here to help you get ready for the ultimate coding
              experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-[#1f6feb] hover:bg-[#58a6ff] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  boxShadow: "0 0 20px rgba(31, 111, 235, 0.3)",
                }}
              >
                Contact Us
              </motion.button>
              <motion.button
                className="border border-[#1f6feb] text-[#1f6feb] hover:bg-[#1f6feb] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Discord
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-48 h-48 border border-[#1f6feb] rounded-full opacity-5 animate-spin-slow" />
      <div
        className="absolute bottom-1/3 left-0 w-24 h-24 border border-[#1f6feb] rounded-full opacity-5 animate-spin-slow"
        style={{ animationDirection: "reverse" }}
      />

      {/* Floating question marks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#1f6feb] text-2xl opacity-10"
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          >
            ?
          </motion.div>
        ))}
      </div>
    </section>
  )
}
