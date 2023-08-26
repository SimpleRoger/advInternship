import Image from "next/image";
import styles from "./page.module.css";
import Navbar1 from "@/components/Navbar1";
import Landing1 from "@/components/Landing1";

export default function Home() {
  return (
    <>
      <Navbar1 />
      <Landing1 />
    </>
  );
}
