"use client";

import { useLanguage } from "./language-context";

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="py-8 px-6 border-t border-border border-outline bg-background/50">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2 text-sm">
          {t("footer.builtby")}
        </p>
        <p className="text-xs text-muted-foreground/60 mt-2 font-mono">
          {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}