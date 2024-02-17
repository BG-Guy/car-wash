import React from "react";
import { ContactUsSection } from "./contact-section";
import Container from "@/components/container";

export const AboutSection = () => {
  return (
    <div className="svg-background lg:h-screen">
      <Container>
        <ContactUsSection />
      </Container>
    </div>
  );
};
