import swc from "@swc/core";
import fs from "fs";


async function main() {
  const source = await fs.promises.readFile("bad.js", "utf8");

  const { code, map } = await swc.minify(
    source,
    {
      compress: true,
  });
}

await main();
