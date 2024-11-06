import Image from "next/image";
import Link from "next/link";
import { carBrands } from "@/utils/constants";
import Header from "@/components/Header/Header";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className="content">
        <h1>Каталог</h1>
        <ul>
          {
            carBrands.map((brand =>
            (
              <li key={brand.name}>
                <Link
                  href={`/cars/${brand.name}`}
                >
                  {brand.name}
                </Link>
              </li>
            )
            ))}
        </ul>
      </main>
    </div>
  );
}
