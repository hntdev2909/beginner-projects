import type { NextPage } from "next";
import Head from "next/head";
import { Input } from "../../components/common";
import { useState } from "react";

const BinaryToDecimal: NextPage = () => {
  const [decimal, setDecimal] = useState<number>(0);
  const [isShowWarning, setIsShowWarning] = useState<boolean>(false);

  const onChangeBinary = (e: any) => {
    const binary = e.target.value;
    const regexBinary = new RegExp(/\b[01]+\b/);
    const isBinaryValid = regexBinary.test(binary);
    if (isBinaryValid) {
      const convertedBinary = parseInt(binary, 2);
      setDecimal(convertedBinary);
      setIsShowWarning(false);
    } else {
      binary.trim() !== "" ? setIsShowWarning(true) : setIsShowWarning(false);
      setDecimal(0);
    }
  };

  console.log(decimal);

  return (
    <div>
      <Head>
        <title>Binary to Decimal Converter</title>
        <meta name="description" content="Binary-to-Decimal number converter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Input
          placeholder="Binary"
          className="binary"
          onChange={(e: any) => onChangeBinary(e)}
        />
        {isShowWarning && <span>Binary only contains 0 and 1</span>}
        <p>{decimal}</p>
      </main>
    </div>
  );
};

export default BinaryToDecimal;
