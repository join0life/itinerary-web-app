import "./global.css";
import ModalProvider from "@/components/provider/modal-provider";
import SessionProvider from "@/components/provider/session-provider";
import RootRoute from "./root-route";

export default function App() {
  return (
    <SessionProvider>
      <ModalProvider>
        <RootRoute />
      </ModalProvider>
    </SessionProvider>
  );
}
