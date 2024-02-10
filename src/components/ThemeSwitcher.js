import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import SVG from "react-inlinesvg";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="col-12 my-9 text-center">
      {theme == "dark" ? (
        <button onClick={() => setTheme("light")}>
          <SVG src="/svg/dark-theme.svg" />
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <SVG src="/svg/light-theme.svg" />
        </button>
      )}
    </div>
  );
}
