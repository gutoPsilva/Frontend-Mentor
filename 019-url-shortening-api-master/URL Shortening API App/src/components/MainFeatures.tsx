import { CardTextContainer, ConnectionLine, FeatureCard, FeaturesContainer, ImageContainer, SectionContainer, StatisticsContainer } from "../styles/MainFeatures.style";

import BrandIMG from "../assets/images/icon-brand-recognition.svg";
import RecordsIMG from "../assets/images/icon-detailed-records.svg";
import CustomizableIMG from "../assets/images/icon-fully-customizable.svg"

export const MainFeatures = () => {
  return (
    <SectionContainer className="bg-lighter-gray px-4 pb-6">
      <StatisticsContainer>
        <h2 className="font-bold text-3xl md:text-4xl text-very-d-violet">Advanced Statistics</h2>
        <p className="text-grayish-violet">Track how your links are performing across the web with our advanced statistics dashboard.</p>
      </StatisticsContainer>
      <FeaturesContainer className="max-w-6xl xl:px-4">
        <ConnectionLine className="bg-cyan"></ConnectionLine>
        <FeatureCard className="xl:self-start">
          <ImageContainer className="bg-dark-violet">
            <img src={BrandIMG} alt="Brand Recognition"/>
          </ImageContainer>
          <CardTextContainer>
            <h3 className="text-very-d-blue font-bold text-2xl">Brand Recognition</h3>
            <p className="text-base text-grayish-violet">Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
          </CardTextContainer>
        </FeatureCard>
        <FeatureCard>
          <ImageContainer className="bg-dark-violet">
            <img src={RecordsIMG} alt="Detailed Records" />
          </ImageContainer>
          <CardTextContainer>
            <h3 className="text-very-d-blue font-bold text-2xl">Detailed Records</h3>
            <p className="text-base text-grayish-violet">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
          </CardTextContainer>
        </FeatureCard>
        <FeatureCard className="self-end">
          <ImageContainer className="bg-dark-violet">
            <img src={CustomizableIMG} alt="Fully Customizable" className="max-w-[40px]"/>
          </ImageContainer>
          <CardTextContainer>
            <h3 className="text-very-d-blue font-bold text-2xl">Fully Customizable</h3>
            <p className="text-base text-grayish-violet">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
          </CardTextContainer>
        </FeatureCard>
      </FeaturesContainer>
    </SectionContainer>
  );
};