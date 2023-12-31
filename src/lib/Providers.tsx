"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import ThemeRegistry from "./ThemeRegistry";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeRegistry>{children}</ThemeRegistry>
    </Provider>
  );
};

export default Providers;
