import React from "react";
import { JosephineSans, openSans } from "@/fonts";
import { ContactForm } from "./contact-form";

export const ContactUsSection = () => {
  const imageUrl =
    "https://plus.unsplash.com/premium_photo-1661414893075-8413a90506a4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="w-full flex flex-col-reverse lg:flex-row">
      <svg className="clippy">
        <clipPath id="wavy-clip-path" clipPathUnits="objectBoundingBox">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.818468 0.0437779C0.785552 0.0113583 0.732766 0.0119365 0.700569 0.0450693L0.0220637 0.743275C-0.0101342 0.776408 -0.00955207 0.829549 0.0233639 0.861968C0.0562799 0.894388 0.109065 0.893809 0.141263 0.860677L0.819768 0.162471C0.851966 0.129338 0.851384 0.0761974 0.818468 0.0437779ZM0.973241 0.165999C0.940365 0.133619 0.887645 0.134196 0.855486 0.167288L0.635416 0.393748C0.603258 0.426841 0.603839 0.479916 0.636715 0.512296C0.66959 0.544676 0.722311 0.544098 0.754469 0.511006L0.974539 0.284546C1.0067 0.251454 1.00612 0.198378 0.973241 0.165999ZM0.792901 0.493225C0.825039 0.460154 0.877726 0.459577 0.91058 0.491936C0.943435 0.524295 0.944016 0.577336 0.911878 0.610407L0.600127 0.93121C0.56799 0.964281 0.515303 0.964858 0.482448 0.932499C0.449594 0.90014 0.449013 0.847099 0.481151 0.814028L0.792901 0.493225ZM0.834629 0.726465C0.866879 0.693279 0.91975 0.6927 0.95272 0.725172C0.985689 0.757644 0.986272 0.810871 0.954022 0.844057L0.837855 0.963597C0.805605 0.996783 0.752734 0.997363 0.719765 0.96489C0.686796 0.932418 0.686213 0.879191 0.718463 0.846005L0.834629 0.726465ZM0.490172 0.53473C0.522341 0.501627 0.575078 0.501049 0.607965 0.53344C0.640851 0.56583 0.641433 0.618923 0.609264 0.652026L0.276743 0.994201C0.244574 1.0273 0.191837 1.02788 0.15895 0.995492C0.126064 0.963101 0.125482 0.910008 0.157651 0.876905L0.490172 0.53473ZM0.387774 0.0889849C0.420438 0.0553725 0.473987 0.054786 0.50738 0.0876749C0.540772 0.120564 0.541363 0.174474 0.508699 0.208086L0.198304 0.527493C0.16564 0.561106 0.112091 0.561692 0.0786983 0.528803C0.0453058 0.495915 0.0447152 0.442005 0.0773793 0.408392L0.387774 0.0889849ZM0.276571 0.0530805C0.243804 0.0208084 0.191259 0.0213839 0.159208 0.054366L0.0423217 0.174646C0.0102702 0.207628 0.0108497 0.260527 0.043616 0.292799C0.0763822 0.325071 0.128927 0.324496 0.160979 0.291514L0.277865 0.171234C0.309916 0.138252 0.309337 0.0853526 0.276571 0.0530805Z"
            fill="#D9D9D9"
          />
        </clipPath>
      </svg>
      <div className={`LEFT-SIDE lg:w-1/2 flex flex-col`}>
        <h1 className={`${JosephineSans.variable} text-[64px] text-gray-300`}>
          About Us
        </h1>
        <p
          className={`${openSans.variable} text-gray-100 text-[20px] font-medium`}
        >
          Amidst the bustling streets, our carwash store emerged as a beacon of
          service and excellence. With cutting-edge equipment and eco-friendly
          solutions, we transformed vehicles into sparkling tales of
          rejuvenation. Each wash, a chapter in our commitment to quality,
          ensuring every customer's journey began with a shine.
        </p>
        <ContactForm />
      </div>
      <div className="RIGHT-SIDE w-full lg:w-1/2">
        <div className="IMAGE-WRAPPER w-full">
          <img
            src={imageUrl}
            alt="image"
            style={{
              clipPath: `url(#wavy-clip-path)`,
            }}
            className="IMAGE object-cover  "
          />
        </div>
      </div>
    </div>
  );
};
