/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Naveen Traders Website",
    description:
      "I Designed and Deployed a dynamic, real-time website for Naveen Traders, a leading hardware shop specializing in paints, electrical, plumbing materials, construction items and many more...",
    url: "http://akhila.online/NaveenTraders",
  },
  {
    title: "Professional Portfolio Website",
    description:
      "I've designed and deployed a dynamic professional portfolio for myself, featuring sections an About Me, My Services, My Projects and My Skills...",
    url: "http://akhila.online",
  },
  {
    title: "QR Code Generator",
    description:
      "Created a verstile QR Code Generator capable of encoding various types of content into QR codes, including text, numbers, URLs and more...",
    url: "https://amruthaakhila0730.github.io/QRCode-Generator/",
  },
  {
    title: "My Portfolio Site",
    description:
      "Created from Microsoft's portfolio workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://amruthaakhila0730.github.io/Portfolio-in-js/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
