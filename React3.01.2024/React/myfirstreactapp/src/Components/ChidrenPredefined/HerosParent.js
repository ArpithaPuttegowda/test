import { Hero } from "./Hero";

export const HerosParent = () => {
  return (
    <div>
      <Hero heroName="Junior NTR" age={35}>
        Kendo UI is a comprehensive web development framework provided by
        Telerik, a Progress company. It offers a set of tools and UI components
        for building modern, responsive, and feature-rich web applications using
        HTML, CSS, and JavaScript (or TypeScript). Kendo UI aims to simplify and
        speed up the development process by providing a collection of pre-built,
        customizable UI components.
      </Hero>
      <Hero heroName="MaheshBabu" age={45}>
        I'm Son of XYZ
      </Hero>
    </div>
  );
};
