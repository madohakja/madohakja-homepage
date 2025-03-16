import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as renderScript, e as addAttribute } from '../chunks/astro/server_CzGQMyQf.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$Icon, b as $$Button } from '../chunks/BaseLayout_DJ8iLASj.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.madohakja.com");
const pageContent = {
  errorCode: "404",
  title: "This page does not exist",
  description: "Sorry, we couldn't find the page you're looking for.",
  goBackLabel: "Go back"
};
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const resources = [
    {
      title: "Knowledge Base",
      description: "Find answers to common questions.",
      icon: "info",
      link: "/support/knowledge-base"
    },
    {
      title: "Articles",
      description: "Explore insights and best practices.",
      icon: "articles",
      link: "/support/articles"
    },
    {
      title: "Whitepapers",
      description: "Read in-depth technical reports.",
      icon: "blankDocument",
      link: "/support/whitepapers"
    },
    {
      title: "Reference",
      description: "Browse technical documentation.",
      icon: "documentMagnifyingGlass",
      link: "/support/reference"
    }
  ];
  const seo = {
    title: "Page Not Found - DataNova",
    description: "Sorry, we couldn't find the page you're looking for. Explore our resources or go back to the homepage."
  };
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": Astro2.url.href,
    url: Astro2.url.href,
    name: "Page Not Found",
    description: "Sorry, we couldn't find the page you're looking for. Explore our resources or go back to the homepage.",
    isPartOf: {
      "@type": "WebSite",
      url: `${Astro2.site}`,
      name: "DataNova",
      description: "DataNova Analytics Inc. provides advanced analytics for Excel to help businesses unlock actionable insights quickly with no coding required."
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "seo": seo, "schema": schema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="grid min-h-full place-items-center px-6 pb-10 pt-32 sm:pt-48 lg:px-8"> <div class="text-center"> <p class="text-xl font-semibold text-teal-600"> ${pageContent.errorCode} </p> <h1 class="mt-4 text-balance text-4xl text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl"> ${pageContent.title} </h1> <p class="mt-6 text-pretty text-lg font-medium text-slate-500 sm:text-xl/8"> ${pageContent.description} </p> </div> <div class="mx-auto w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> <div class="mx-auto w-full max-w-lg px-4 sm:px-6 lg:px-8"> <ul class="divide-y divide-dashed divide-slate-300"> ${resources.map((resource) => renderTemplate`<li> <a${addAttribute(resource.link, "href")} class="group flex gap-x-5 px-2 py-8 transition hover:bg-slate-100"> ${renderComponent($$result2, "Icon", $$Icon, { "name": resource.icon, "class": "size-6 text-teal-600" })} <div class="grow"> <h3 class="font-semibold text-slate-600 transition group-hover:text-teal-700"> ${resource.title} </h3> <p class="mt-1 text-slate-500">${resource.description}</p> </div> ${renderComponent($$result2, "Icon", $$Icon, { "name": "chevronRight", "class": "self-center text-slate-400 transition" })} </a> </li>`)} </ul> </div> <div class="mt-5 flex items-center justify-center"> ${renderComponent($$result2, "Button", $$Button, { "id": "go-back", "variant": "primary" }, { "default": ($$result3) => renderTemplate`${pageContent.goBackLabel}` })} </div> </div> </section> ${renderScript($$result2, "C:/Users/stoic/Documents/work/8_dev/homepage_madohakja/themes/Madohakja/src/pages/404.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/stoic/Documents/work/8_dev/homepage_madohakja/themes/Madohakja/src/pages/404.astro", void 0);

const $$file = "C:/Users/stoic/Documents/work/8_dev/homepage_madohakja/themes/Madohakja/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  pageContent,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
