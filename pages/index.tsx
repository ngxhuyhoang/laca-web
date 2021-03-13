import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        <div style={{ width: "60%", height: "100vh", background: "red" }}>
          <Image src="/assets/images/hanoi-map.webp" layout="fill" />
        </div>

        <div
          style={{
            width: "40%",
            height: "100vh",
            background: "#fff",
            borderTopLeftRadius: 16,
            borderBottomLeftRadius: 16,
            padding: 32,
            zIndex: 99,
          }}
        >
          <nav className="flex justify-between items-center">
            <ul className="flex justify-between">
              <li>
                <a href="">Menu Item 1</a>
              </li>
              <li style={{ marginLeft: 16 }}>
                <a href="">Menu Item 1</a>
              </li>
              <li style={{ marginLeft: 16 }}>
                <a href="">Menu Item 1</a>
              </li>
            </ul>
            <div>
              <div
                style={{
                  background: "lightblue",
                  width: 50,
                  height: 50,
                  borderRadius: 10,
                }}
              ></div>
            </div>
          </nav>

          <h1 style={{ fontSize: 40 }}>Hanoi</h1>

          <div style={{ marginTop: "4rem" }}>
            <input
              placeholder="Tìm kiếm"
              style={{
                paddingLeft: 16,
                paddingRight: 16,
                height: 40,
                width: "100%",
                borderRadius: 32,
                background: "#EFEFEF",
                outline: "none",
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
