// Default configuration
const defaultConfig = {
  hero_title: "Crafting Digital Experiences",
  hero_subtitle:
    "We transform ideas into stunning digital realities. Premium design meets cutting-edge technology for brands that dare to stand out.",
  about_title: "Kami Adalah Storyteller Digital",
  services_title: "Solusi Lengkap untuk Brand Anda",
  cta_text: "Kirim Pesan",
  background_color: "#0a0a0a",
  surface_color: "#1a1a1a",
  text_color: "#ffffff",
  primary_action_color: "#d4af37",
  secondary_action_color: "#9ca3af",
  font_family: "Outfit",
  font_size: 16,
};

export const initSdk = () => {
  // Initialize Element SDK
  if (typeof window !== "undefined" && (window as any).elementSdk) {
    (window as any).elementSdk.init({
      defaultConfig,
      onConfigChange: async (config: any) => {
        const cfg = { ...defaultConfig, ...config };

        // Update text content
        const heroTitle = document.getElementById("hero-title");
        if (heroTitle) {
          heroTitle.innerHTML = `
            <span class="hero-text-reveal"><span style="animation-delay: 0.5s;">Crafting</span></span>
            <span class="text-gradient hero-text-reveal"><span style="animation-delay: 0.7s;"> Digital</span></span><br>
            <span class="hero-text-reveal"><span style="animation-delay: 0.9s;">Experiences</span></span>
          `;
        }

        const heroSubtitle = document.getElementById("hero-subtitle");
        if (heroSubtitle) heroSubtitle.textContent = cfg.hero_subtitle;

        const ctaButton = document.getElementById("cta-button");
        if (ctaButton) ctaButton.textContent = cfg.cta_text;

        // Apply colors
        document.documentElement.style.setProperty("--bg-color", cfg.background_color);
        document.documentElement.style.setProperty("--surface-color", cfg.surface_color);
        document.documentElement.style.setProperty("--text-color", cfg.text_color);
        document.documentElement.style.setProperty("--primary-color", cfg.primary_action_color);
        document.documentElement.style.setProperty("--secondary-color", cfg.secondary_action_color);

        // Apply font
        const fontStack = `${cfg.font_family}, system-ui, sans-serif`;
        document.body.style.fontFamily = fontStack;

        // Apply font size scaling
        const baseSize = cfg.font_size;
        document.documentElement.style.fontSize = `${baseSize}px`;
      },
      mapToCapabilities: (config: any) => {
        const cfg = { ...defaultConfig, ...config };
        return {
          recolorables: [
            {
              get: () => cfg.background_color,
              set: (value: string) => (window as any).elementSdk.setConfig({ background_color: value }),
            },
            {
              get: () => cfg.surface_color,
              set: (value: string) => (window as any).elementSdk.setConfig({ surface_color: value }),
            },
            {
              get: () => cfg.text_color,
              set: (value: string) => (window as any).elementSdk.setConfig({ text_color: value }),
            },
            {
              get: () => cfg.primary_action_color,
              set: (value: string) => (window as any).elementSdk.setConfig({ primary_action_color: value }),
            },
            {
              get: () => cfg.secondary_action_color,
              set: (value: string) => (window as any).elementSdk.setConfig({ secondary_action_color: value }),
            },
          ],
          borderables: [],
          fontEditable: {
            get: () => cfg.font_family,
            set: (value: string) => (window as any).elementSdk.setConfig({ font_family: value }),
          },
          fontSizeable: {
            get: () => cfg.font_size,
            set: (value: number) => (window as any).elementSdk.setConfig({ font_size: value }),
          },
        };
      },
      mapToEditPanelValues: (config: any) => {
        const cfg = { ...defaultConfig, ...config };
        return new Map([
          ["hero_title", cfg.hero_title],
          ["hero_subtitle", cfg.hero_subtitle],
          ["about_title", cfg.about_title],
          ["services_title", cfg.services_title],
          ["cta_text", cfg.cta_text],
        ]);
      },
    });
  }
};