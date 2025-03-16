import { a as createComponent, m as maybeRenderHead, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_CzGQMyQf.mjs';
import 'kleur/colors';
import { b as $$Button, $ as $$BaseLayout } from '../chunks/BaseLayout_DJ8iLASj.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BoNmq4-a.mjs';
export { renderers } from '../renderers.mjs';

const image_7 = new Proxy({"src":"/_astro/logo_yellow_big.CAIfca7A.png","width":868,"height":747,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/stoic/Documents/work/8_dev/homepage_madohakja/themes/Madohakja/src/assets/images/logo_yellow_big.png";
							}
							
							return target[name];
						}
					});

const $$HeroContent = createComponent(($$result, $$props, $$slots) => {
  const title = "Find Core, Make More";
  const subTitle = "";
  const secondaryCTA = { text: "\uC11C\uBE44\uC2A4 \uC548\uB0B4", href: "/service/education" };
  const primaryCTA = { text: "\uC5F0\uB77D\uCC98 \uC548\uB0B4", href: "/contact" };
  const logo = {
    image: image_7,
    // Associated image
    class: "content-center py-1 sm:col-span-2 sm:p-5",
    // Custom CSS classes for layout and styling
    alignment: "mx-auto mt-0 sm:w-[40%]"
    // Alignment and styling for the image
  };
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto max-w-4xl select-none text-left sm:text-center">  ${renderComponent($$result, "Image", $$Image, { "src": logo.image, "class": `${logo.class} ${logo.alignment}`, "alt": "Company Logo" })} <h1 class="block text-balance text-3xl text-[#E6E6E6] sm:text-4xl md:text-5xl lg:text-6xl"> ${title} </h1> </div> <div class="mx-auto max-w-3xl text-left sm:text-center"> <p class="text-pretty text-lg text-[#E6E6E6]"> ${subTitle} </p> </div>  <div class="flex flex-col justify-center gap-5 sm:flex-row"> ${renderComponent($$result, "Button", $$Button, { "href": secondaryCTA.href, "variant": "secondary", "target": "_blank" }, { "default": ($$result2) => renderTemplate`${secondaryCTA.text}` })} ${renderComponent($$result, "Button", $$Button, { "href": primaryCTA.href, "variant": "primary" }, { "default": ($$result2) => renderTemplate`${primaryCTA.text}` })} </div> <br> <br> <br> <br> <br> <br>`;
}, "C:/Users/stoic/Documents/work/8_dev/homepage_madohakja/themes/Madohakja/src/components/common/HeroContent.astro", void 0);

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-linear-to-b/oklch from-[#585858] via-[#1C1C1C] to-[#585858]"> <div class="mx-auto max-w-[85rem] space-y-8 px-4 pb-12 pt-42 sm:px-6 lg:px-8">  ${renderComponent($$result, "HeroContent", $$HeroContent, {})} </div> </section>`;
}, "C:/Users/stoic/Documents/work/8_dev/homepage_madohakja/themes/Madohakja/src/components/sections/HeroSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$HeroSection, {})} ` })}`;
}, "C:/Users/stoic/Documents/work/8_dev/homepage_madohakja/themes/Madohakja/src/pages/index.astro", void 0);

const $$file = "C:/Users/stoic/Documents/work/8_dev/homepage_madohakja/themes/Madohakja/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
