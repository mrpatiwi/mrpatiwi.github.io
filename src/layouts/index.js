import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "./index.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Patricio López J."
      meta={[
        {
          name: "description",
          content: "Software Engineer, IT Consultant and Full-stack developer.",
        },
        {
          name: "subject",
          content: "Software Engineer, IT Consultant and Full-stack developer.",
        },
        {
          name: "keywords",
          content: [
            "software consultant",
            "software developer",
            "chile",
            "santiago",
            "react",
            "react-native",
            "node",
          ].join(", "),
        },
        {
          name: "geo.region",
          content: "CL",
        },
        {
          name: "geo.placename",
          content: "Santiago",
        },
        { name: "og:url", content: "https://lopezjuri.com" },
        { name: "og:type", content: "website" },
        { name: "og:title", content: "Patricio López J." },
        {
          name: "og:image",
          content: "https://lopezjuri.com/favicons/apple-touch-icon.png",
        },
        {
          name: "og:description",
          content:
            "Software Engineer, IT Consultant and Full-stack developer passionate in producing real solutions using the best tools available. Interested in state of the art technology. Focused in high quality code and top-tier development/deployment procedures.",
        },
        { name: "og:site_name", content: "lopezjuri.com" },
        { name: "og:locale", content: "en_US" },
        {
          name: "twitter:card",
          content:
            "Software Engineer, IT Consultant and Full-stack developer passionate in producing real solutions using the best tools available. Interested in state of the art technology. Focused in high quality code and top-tier development/deployment procedures.",
        },
        { name: "twitter:site", content: "@mrpatiwi" },
        { name: "twitter:creator", content: "@mrpatiwi" },
        { name: "twitter:url", content: "https://lopezjuri.com" },
        { name: "twitter:title", content: "Patricio López J." },
        {
          name: "twitter:description",
          content:
            "Software Engineer, IT Consultant and Full-stack developer passionate in producing real solutions using the best tools available. Interested in state of the art technology. Focused in high quality code and top-tier development/deployment procedures.",
        },
        {
          name: "twitter:image",
          content: "https://lopezjuri.com/favicons/apple-touch-icon.png",
        },
      ]}
    />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
