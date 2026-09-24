import BuildWithoutLimitsHome from "@/components/BuildWithoutLimitsHome/BuildWithoutLimitsHome";
import BuiltBusinessSizesHome from "@/components/HomePageComps/BuiltBusinessSizesHome/BuiltBusinessSizesHome";
import EverythingBusinessStarter from "@/components/HomePageComps/EverythingBusinessStarter/EverythingBusinessStarter";
import GlobalFromDayOne from "@/components/HomePageComps/GlobalFromDayOne/GlobalFromDayOne";
import HomePartnesSlider from "@/components/HomePageComps/HomePartnesSlider/HomePartnesSlider";
import MainSliderHome from "@/components/HomePageComps/MainSliderHome/MainSliderHome";
import OnePlatformEveryCategoryHome from "@/components/HomePageComps/OnePlatformEveryCategory/OnePlatformEveryCategoryHome";
import PricingSectionHome from "@/components/HomePageComps/PricingSectionHome/PricingSectionHome";
import RealBusinessGrowthHome from "@/components/HomePageComps/RealBusinessGrowthHome/RealBusinessGrowthHome";


export default function Home() {
  return (
    <div >
      <MainSliderHome/>
      <HomePartnesSlider/>
      <OnePlatformEveryCategoryHome/>
      <EverythingBusinessStarter/>
      <GlobalFromDayOne/>
      <BuiltBusinessSizesHome/>
      <RealBusinessGrowthHome/>
      <PricingSectionHome/>
      <BuildWithoutLimitsHome/>
    </div>
  );
}
