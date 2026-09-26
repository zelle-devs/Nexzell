
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
    chart: [38, 54, 34, 68, 92],
    syncChart: [30, 46, 62, 40, 78, 58],
    shoeImage: './ShoeNexzellBrown.png',
    budsImage: './airpodNexzellBrown.png',
  },
  {
    id: 'black',
    label: 'Black',
    swatch: '#2B2B2E',
    stock: 9,
    chart: [58, 32, 82, 48, 66],
    syncChart: [50, 34, 70, 58, 40, 90],
    shoeImage: './ShoeNexzellBlack.png',
    budsImage: './airpodNexzellBlack.png',
  },
  {
    id: 'gray',
    label: 'Gray',
    swatch: '#50555C',
    stock: 21,
    chart: [46, 74, 40, 86, 56],
    syncChart: [64, 40, 52, 76, 34, 60],
    shoeImage:'./ShoeNexzellGray.png',
    budsImage:'./airpodNexzellGray.png',
  },
  {
    id: 'peach',
    label: 'Peach',
    swatch: '#F4C2AC',
    stock: 6,
    chart: [34, 60, 90, 44, 70],
    syncChart: [42, 68, 30, 84, 52, 66],
    shoeImage: './ShoeNexzellPeach.png',
    budsImage:'./airpodNexzellPeach.png',
  },
  {
    id: 'white',
    label: 'White',
    swatch: '#DFDEE4',
    stock: 30,
    chart: [70, 42, 56, 82, 60],
    syncChart: [56, 80, 44, 62, 36, 70],
    shoeImage: './ShoeNexzellWhite.png',
    budsImage:'./airpodNexzellWhite.png',
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