import path from "node:path";
import { parseArgs } from "node:util";
import sharp from "sharp";

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    width: { type: "string", default: "1600" },
    quality: { type: "string", default: "80" },
    crop: { type: "string" },
    out: { type: "string", default: "public/assets/images" },
  },
});

if (positionals.length === 0) {
  console.error(
    "Uso: npm run images -- <archivo...> [--width 1600] [--quality 80] [--crop x,y,ancho,alto] [--out carpeta]",
  );
  process.exit(1);
}

const [left, top, cropWidth, cropHeight] = values.crop
  ? values.crop.split(",").map(Number)
  : [];

for (const input of positionals) {
  const output = path.join(values.out, `${path.parse(input).name}.webp`);
  let image = sharp(input);
  if (values.crop) {
    image = image.extract({ left, top, width: cropWidth, height: cropHeight });
  }
  const info = await image
    .resize({ width: Number(values.width), withoutEnlargement: true })
    .webp({ quality: Number(values.quality) })
    .toFile(output);
  console.log(`${output} · ${info.width}×${info.height} · ${Math.round(info.size / 1024)} KB`);
}
