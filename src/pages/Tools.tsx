import Styles from "@styles/Tools.module.css";
import { useEffect, useState } from "react";

export default function Tools() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    // set width of the sidebar to 10rem if active
    const sideBar = document.querySelector(
      `.${Styles.sideBarContainer}`
    ) as HTMLElement | null;
    if (sideBar) {
      sideBar.style.width = active ? "10rem" : "2rem";
    }
  }, [active]);

  return (
    <div>
      <div
        className={Styles.sideBarContainer}
        style={{
          background: active ? "orange" : "lightgray",
          // transition: "background 0.2s",
        }}
        onTouchStart={() => setActive(true)}
        onTouchEnd={() => setActive(false)}
        onTouchCancel={() => setActive(false)}
        // on screen leave
        // onTouchCancelCapture={() => setActive(false)}
        // onTouchEndCapture={() => setActive(false)}
      >
        <div>about</div>
        <div>home</div>
        <div>tools</div>
        <div>react</div>
        <div>public</div>
        <div>index</div>
        <div>home</div>
        <div>package.json</div>
        <div>package.json</div>

        <div>assets/react.svg</div>
        <div>main.tsx</div>
        <div>styles/App.module.css</div>

        <div>components/App.tsx</div>
        <div>pages/About.tsx</div>
        <div>styles/Home.module.css</div>

        <div>components/MainHeader.tsx</div>
        <div>pages/Home.tsx</div>
        <div>styles/Tools.module.css</div>

        <div>index.css</div>
        <div>pages/Tools.tsx</div>
        <div>vite-env.d.ts</div>

        <div>main.css</div>
        <div>routes/Router.tsx</div>

        <div>------------------</div>

        <div>about</div>
        <div>home</div>
        <div>tools</div>
        <div>react</div>
        <div>public</div>
        <div>index</div>
        <div>home</div>
        <div>package.json</div>
        <div>package.json</div>

        <div>assets/react.svg</div>
        <div>main.tsx</div>
        <div>styles/App.module.css</div>

        <div>components/App.tsx</div>
        <div>pages/About.tsx</div>
        <div>styles/Home.module.css</div>

        <div>components/MainHeader.tsx</div>
        <div>pages/Home.tsx</div>
        <div>styles/Tools.module.css</div>

        <div>index.css</div>
        <div>pages/Tools.tsx</div>
        <div>vite-env.d.ts</div>

        <div>main.css</div>
        <div>routes/Router.tsx</div>

        <div className={Styles.sideBarBottomFiller}></div>
      </div>
      <h1>Tools</h1>
      <p>This is the Tools page.</p>
    </div>
  );
}
