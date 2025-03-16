import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_CzGQMyQf.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$Icon } from '../chunks/BaseLayout_DJ8iLASj.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.madohakja.com");
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const addressHeading = "\uCC3E\uC544\uC624\uC2DC\uB294 \uAE38:";
  const emailHeading = "\uC774\uBA54\uC77C:";
  const contactDetails = {
    addressLine1: "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uC1A1\uD30C\uAD6C \uC911\uB300\uB85C",
    addressLine2: "207 2\uCE35 201-J396\uD638",
    email: "madohakja.inc@gmail.com"
  };
  const title = "Contact Us";
  const subTitle = "\uBB38\uC758\uC0AC\uD56D\uC774 \uC788\uC73C\uC2DC\uBA74 \uC5B8\uC81C\uB4E0\uC9C0 \uC5F0\uB77D\uD574\uC8FC\uC138\uC694.";
  const seo = {
    title: "\uB9C8\uB3C4\uD559\uC790 \uC8FC\uC2DD\uD68C\uC0AC",
    description: "\uB9C8\uB3C4\uD559\uC790 \uC8FC\uC2DD\uD68C\uC0AC\uC5D0 \uB300\uD55C \uBB38\uC758 \uC0AC\uD56D\uC774 \uC788\uC73C\uC2DC\uBA74 \uC774\uBA54\uC77C\uC744 \uD1B5\uD574 \uC5F0\uB77D\uC8FC\uC138\uC694. AI, \uBA38\uC2E0\uB7EC\uB2DD, \uB370\uC774\uD130 \uBD84\uC11D \uB4F1 \uB2E4\uC591\uD55C \uBD84\uC57C\uC5D0\uC11C \uD611\uC5C5\uC744 \uD658\uC601\uD569\uB2C8\uB2E4."
  };
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    inLanguage: "ko-KR",
    "@id": Astro2.url.href,
    url: Astro2.url.href,
    name: "\uB9C8\uB3C4\uD559\uC790 \uC8FC\uC2DD\uD68C\uC0AC",
    description: "\uB9C8\uB3C4\uD559\uC790 \uC8FC\uC2DD\uD68C\uC0AC\uB294 \uC778\uACF5\uC9C0\uB2A5, \uBA38\uC2E0\uB7EC\uB2DD, \uB370\uC774\uD130 \uBD84\uC11D \uB4F1\uC758 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4.",
    isPartOf: {
      "@type": "WebSite",
      url: `${Astro2.site}`,
      name: "\uB9C8\uB3C4\uD559\uC790 \uC8FC\uC2DD\uD68C\uC0AC",
      description: "\uB9C8\uB3C4\uD559\uC790 \uC8FC\uC2DD\uD68C\uC0AC\uB294 \uC778\uACF5\uC9C0\uB2A5, \uBA38\uC2E0\uB7EC\uB2DD, \uB370\uC774\uD130 \uBD84\uC11D \uB4F1\uC758 \uC11C\uBE44\uC2A4\uB97C \uC81C\uACF5\uD569\uB2C8\uB2E4."
    }
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "seo": seo, "schema": schema }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-[85rem] px-4 pb-28 pt-48 sm:px-6 lg:px-8"> <div class="mb-10 max-w-3xl lg:mb-14"> <h2 class="text-balance text-4xl text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl"> ${title} </h2> <p class="ml-1 mt-1 text-slate-600">${subTitle}</p> </div> <div class="space-y-14"> <div class="flex gap-x-5"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mapPin" })} <div class="grow"> <h4 class="font-semibold text-slate-600">${addressHeading}</h4> <address class="mt-1 text-sm not-italic text-slate-500"> ${contactDetails.addressLine1} <br> ${contactDetails.addressLine2} </address> </div> </div> <div class="flex gap-x-5"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "email", "class": "size-6 shrink-0 text-slate-600" })} <div class="grow"> <h4 class="font-semibold text-slate-600">${emailHeading}</h4> <a class="mt-1 text-sm text-slate-500 transition-colors duration-300 hover:text-yellow-400 focus:text-slate-400 focus:outline-hidden"${addAttribute(`mailto:${contactDetails.email}`, "href")}> ${contactDetails.email} </a> </div> </div> </div> </div> ` })}`;
}, "C:/Users/stoic/Documents/work/8_dev/homepage_madohakja/themes/Madohakja/src/pages/contact.astro", void 0);

const $$file = "C:/Users/stoic/Documents/work/8_dev/homepage_madohakja/themes/Madohakja/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
