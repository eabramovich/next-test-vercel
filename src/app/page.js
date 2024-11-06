import Image from "next/image";
import { carBrands } from "@/utils/constants";
import Link from "next/link";
import Header from "@/components/Header/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
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
    </div>
  );
}
