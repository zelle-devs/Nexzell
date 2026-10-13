import { notFound } from "next/navigation";
import LayoutPageCategoryNexzellMain from "@/components/NexzellCategoriesComponents/LayoutPageCategoryNexzellMain/LayoutPageCategoryNexzellMain";
import {
  categoryPagesDataNexzell,
  categorySlugsNexzell,
} from "@/components/NexzellCategoriesComponents/LayoutPageCategoryNexzellMain/categoryPagesDataNexzell";

export function generateStaticParams() {
  return categorySlugsNexzell.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = categoryPagesDataNexzell[slug];
  if (!data) return { title: "Category not found | Nexzell" };
  return {
    title: `${data.name} Ecommerce Platform | Nexzell`,
    description: data.hero.description,
  };
}

export default async function CategoryDetailPage({ params }) {
  const { slug } = await params;
  const data = categoryPagesDataNexzell[slug];
  if (!data) notFound();
  return <LayoutPageCategoryNexzellMain data={data} />;
}