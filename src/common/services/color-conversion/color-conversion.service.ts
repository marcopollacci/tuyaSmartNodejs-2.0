import { Injectable } from '@nestjs/common';
import { IMakeCalc } from 'src/interfaces/colorConversion.interface';

@Injectable()
export class ColorConversionService {
  async RGBtoHSV(rgb: string) {
    const split = await this.slitString(rgb);
    const hsv = await this.makeCalc(split[0], split[1], split[2]);
    return await this.DecimalHexTwosComplement(~~hsv.h);
  }

  async makeCalc(r: number, g: number, b: number): Promise<IMakeCalc> {
    const max = Math.max(r, g, b),
      min = Math.min(r, g, b),
      d = max - min,
      s = max === 0 ? 0 : d / max,
      v = max / 255;

    return {
      h: await this.choose(max, min, d, Number(r), Number(g), Number(b)),
      s: s * 1000,
      v: v * 1000,
    };
  }

  async choose(
    max: number,
    min: number,
    d: number,
    r: number,
    g: number,
    b: number,
  ): Promise<number> {
    return new Promise((resolve) => {
      let h = 0;
      switch (max) {
        case min:
          h = 0;
          break;
        case r:
          h = g - b + d * (g < b ? 6 : 0);
          h /= 6 * d;
          break;
        case g:
          h = b - r + d * 2;
          h /= 6 * d;
          break;
        case b:
          h = r - g + d * 4;
          h /= 6 * d;
          break;
      }
      resolve(h * 360);
    });
  }
  async DecimalHexTwosComplement(decimal: number): Promise<string> {
    const size = 4;
    let i: number;
    let hexadecimal: string;

    if (decimal >= 0) {
      hexadecimal = decimal.toString(16);

      while (hexadecimal.length % size != 0) {
        hexadecimal = '' + 0 + hexadecimal;
      }
      return hexadecimal;
    } else {
      hexadecimal = Math.abs(decimal).toString(16);
      while (hexadecimal.length % size != 0) {
        hexadecimal = '' + 0 + hexadecimal;
      }

      let output = '';
      for (i = 0; i < hexadecimal.length; i++) {
        output += (0x0f - parseInt(hexadecimal[i], 16)).toString(16);
      }

      output = (0x01 + parseInt(output, 16)).toString(16);
      return output;
    }
  }
  slitString(toSplit: string) {
    return new Promise((resolve) => {
      resolve(toSplit.split(','));
    });
  }
}
