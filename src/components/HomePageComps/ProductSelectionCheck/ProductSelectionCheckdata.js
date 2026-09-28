import { BsAmazon } from 'react-icons/bs';
import { SiShopify, SiAmazon, SiEtsy, SiMeta, SiTiktok } from 'react-icons/si';

export const CHANNEL_ICONS_PRODUCT_SELECTION_CHECK = {
  shopify: SiShopify,
  amazon: BsAmazon,
  etsy: SiEtsy,
  meta: SiMeta,
  tiktok: SiTiktok,
};

export const COLOR_VARIANTS_PRODUCT_SELECTION_CHECK = [
  {
    id: 'brown',
    label: 'Brown',
    swatch: '#5D3C36',
    stock: 14,
    chart: [6, 9, 20, 30, 62, 45, 58, 68, 100],
    syncChart: [30, 46, 62, 40, 78, 58],
    shoeImage: './ShoeNexzellBrown.png',
    budsImage: './airpodNexzellBrown.png',
  },
  {
    id: 'black',
    label: 'Black',
    swatch: '#2B2B2E',
    stock: 9,
    chart: [8, 12, 22, 34, 55, 40, 64, 72, 96],
    syncChart: [50, 34, 70, 58, 40, 90],
    shoeImage: './ShoeNexzellBlack.png',
    budsImage: './airpodNexzellBlack.png',
  },
  {
    id: 'gray',
    label: 'Gray',
    swatch: '#50555C',
    stock: 21,
    chart: [5, 10, 18, 28, 66, 48, 54, 74, 100],
    syncChart: [64, 40, 52, 76, 34, 60],
    shoeImage: './ShoeNexzellGray.png',
    budsImage: './airpodNexzellGray.png',
  },
  {
    id: 'peach',
    label: 'Peach',
    swatch: '#F4C2AC',
    stock: 6,
    chart: [7, 11, 24, 32, 58, 42, 60, 70, 98],
    syncChart: [42, 68, 30, 84, 52, 66],
    shoeImage: './ShoeNexzellPeach.png',
    budsImage: './airpodNexzellPeach.png',
  },
  {
    id: 'white',
    label: 'White',
    swatch: '#DFDEE4',
    stock: 30,
    chart: [6, 10, 19, 36, 60, 46, 62, 66, 94],
    syncChart: [56, 80, 44, 62, 36, 70],
    shoeImage: './ShoeNexzellWhite.png',
    budsImage: './airpodNexzellWhite.png',
  },
];

export const SIZES_PRODUCT_SELECTION_CHECK = [7, 8, 9, 10, 11];

export const CHANNELS_PRODUCT_SELECTION_CHECK = [
  { id: 'shopify', label: 'Shopify' },
  { id: 'amazon', label: 'Amazon' },
  { id: 'etsy', label: 'Etsy' },
  { id: 'meta', label: 'Meta' },
  { id: 'tiktok', label: 'TikTok' },
];