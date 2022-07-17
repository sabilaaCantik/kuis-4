import Tombol from "./Tombol";
import { useState } from "react";

function KotakTeks(props) {
  const [Text, setText] = useState("");
  return (
    <>
      <input
        type="Text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <Tombol
        onClick={() => {
          alert(Text);
        }}
      >
        Cetak
      </Tombol>
    </>
  );
}

export default KotakTeks;
