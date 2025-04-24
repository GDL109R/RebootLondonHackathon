import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./navbar";
import UserProfile from "./userProfile";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.ctas}>
          <UserProfile />
        </div>
      </main>
      <footer className={styles.footer}>
        <p>
          (c) Morse Coders :)
        </p>
      </footer>
    </div>
  );
}
