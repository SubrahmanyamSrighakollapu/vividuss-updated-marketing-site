'use client';

import { useState } from 'react';
import { site } from '@/data/site';
import { Icon } from '@/components/ui/Icon';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal';

const contactFaqs = [
  {
    question: 'How quickly will I get a response to my enquiry?',
    answer:
      'We value your time. Our team typically responds to all website and project enquiries within 2 business hours during operating time (Monday to Saturday, 9:00 AM – 6:00 PM IST).',
  },
  {
    question: 'Can we schedule an in-person meeting at your corporate office?',
    answer:
      `Absolutely! You are welcome to visit our Corresponding & Corporate Office at ${site.correspondingAddress.full}. Please feel free to reach out via phone (${site.phone}) or email (${site.email}) to schedule a preferred time slot.`,
  },
  {
    question: 'Do you sign Non-Disclosure Agreements (NDAs)?',
    answer:
      'Yes, 100%. We take client intellectual property and confidentiality very seriously. We are happy to sign a standard mutual NDA prior to discussing any proprietary project concepts or source code requirements.',
  },
  {
    question: 'What details should I provide in my enquiry for a project estimate?',
    answer:
      'Sharing a brief description of your project goals, required platforms (Web, iOS, Android, WhatsApp CRM), target launch timeframe, and budget range will help us prepare an accurate proposal and demo during our first call.',
  },
  {
    question: 'How do I inquire about Vividuss Franchise opportunities?',
    answer:
      'You can select "Franchise Partnership" in our contact form or contact us directly at ' +
      site.phone +
      '. Our franchise team will send over our complete partner presentation and arrange a discovery session.',
  },
];

export function ContactFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section contact-faq-section pale-section">
      <div className="container">
        <ScrollReveal variant="fade-up" className="section-heading center">
          <p className="eyebrow">GOT QUESTIONS?</p>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about reaching out, scheduling meetings, and starting a project with Vividuss.</p>
        </ScrollReveal>

        <StaggerContainer className="faq-accordion" staggerDelay={0.08}>
          {contactFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <StaggerItem key={index} variant="fade-up" className="faq-item">
                <button
                  type="button"
                  className={'faq-question ' + (isOpen ? 'open' : '')}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-text">{faq.question}</span>
                  <span className="faq-icon">
                    <Icon name={isOpen ? 'Minus' : 'Plus'} size={18} />
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
