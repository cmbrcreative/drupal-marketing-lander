import { Disclosure, DisclosureButton } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { globalConstants } from "../../_GlobalConstants/globalConstants";
import { faqConstants } from "./_faqConstants";

const FAQContainer = () => {
  const [activeDisclosurePanel, setActiveDisclosurePanel] = useState(null);
  const [isInitialPanelChanged, setIsInitialPanelChanged] = useState(false);
  const initialPanelCloseRef = useRef(null);
  const disclosureButtonRefs = useRef([]);
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  function togglePanels(newPanel, index) {
    if (!isInitialPanelChanged) {
      initialPanelCloseRef.current();
      setIsInitialPanelChanged(true);
    } else if (activeDisclosurePanel) {
      if (
        activeDisclosurePanel.key !== newPanel.key &&
        activeDisclosurePanel.open
      ) {
        activeDisclosurePanel.close();
      }
    }

    setActiveDisclosurePanel({
      ...newPanel,
      open: !newPanel.open,
    });

    // Set focus to the newly opened disclosure button
    if (disclosureButtonRefs.current[index]) {
      disclosureButtonRefs.current[index].focus();
    }
  }

  return (
    <div className="relative mx-auto max-w-[74.4rem]">
      <div className="flex flex-col items-center gap-[1.6rem]">
        <p className="p-sm-bold md:p-norm-bold text-black">FAQs</p>
        <h2 className="gradient-text-blue">Ask us anything.</h2>
        <div className="absolute -right-1 -top-[100px] z-10 h-[200px] w-2 bg-gradient-to-b from-white to-transparent sm:top-0 sm:h-[100px]"></div>
        <div className="absolute -left-1 -top-[100px] z-10 h-[200px] w-2 bg-gradient-to-b from-white to-transparent sm:top-0 sm:h-[100px]"></div>
        <div className="t-fade-left absolute right-full top-0 z-10 h-[200%] w-[4rem]"></div>
        <div className="t-fade-right absolute left-full top-0 z-10 h-[200%] w-[4rem]"></div>
      </div>
      <div className="t-fade-bottom absolute -bottom-[14rem] -right-3 z-10 h-[12rem] w-[102%] sm:-bottom-[8.4rem] sm:h-[6.4rem]"></div>
      <dl className="border-1 after:border-1 relative mt-10 space-y-6 border-gray-200 px-[4rem] before:absolute before:right-0 before:top-0 before:h-[125%] before:w-0 before:-translate-y-[10%] before:border-r before:border-dashed after:absolute after:left-0 after:top-0 after:h-[125%] after:w-0 after:-translate-y-[10%] after:border-l after:border-dashed after:outline-gray-200">
        {faqConstants.faqs.map((faq, index) => {
          const isLast = index === faqConstants.faqs.length - 1;
          return (
            <Disclosure
              key={faq.question}
              as="div"
              className={`relative mx-auto pt-6 after:absolute after:left-0 after:top-0 after:h-0 after:w-[200%] after:-translate-x-[10%] after:border-t after:border-dashed sm:after:w-[125%] ${isLast ? "before:absolute before:bottom-0 before:left-0 before:h-0 before:w-[200%] before:-translate-x-[10%] before:translate-y-[20px] before:border-b before:border-dashed sm:before:w-[125%]" : ""}`}
              defaultOpen={index === 0}
              onChange={() =>
                togglePanels({ key: index, open: true, close: () => {} }, index)
              }
            >
              {(panel) => {
                const { open, close } = panel;
                if (index === 0) {
                  initialPanelCloseRef.current = close;
                }
                return (
                  <>
                    <DisclosureButton
                      ref={(el) => (disclosureButtonRefs.current[index] = el)} // Store ref for each button
                      className="group flex w-full items-start justify-between text-left text-gray-900 focus-visible:outline-none"
                      onClick={() => {
                        if (!open) {
                          close();
                        }
                        togglePanels({ ...panel, key: index }, index);
                      }}
                    >
                      <span className="gradient-text-blue font-rebond text-[2rem] font-semibold">
                        {faq.question}
                      </span>
                      <ChevronDownIcon className="w-[3.2rem] opacity-[.4] group-data-[open]:rotate-180" />
                    </DisclosureButton>
                    <div className="overflow-hidden py-2">
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            key={faq.question}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              height: {
                                duration: prefersReducedMotion ? 0 : 0.3,
                                ease: easeOut,
                              },
                              opacity: {
                                duration: prefersReducedMotion ? 0 : 0.2,
                                ease: easeOut,
                              },
                            }}
                            style={{ overflow: "hidden" }}
                          >
                            <p className="p-norm-reg">{faq.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </>
                );
              }}
            </Disclosure>
          );
        })}
      </dl>
    </div>
  );
};

export default FAQContainer;
