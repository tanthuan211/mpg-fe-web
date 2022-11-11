import Faq from "@components/pages/homepage/Faq";
import { ProductDetail, ProductForm, ProductGallery, ProductSteps } from "@components/pages/product";
import { ProductBox } from "@components/pages/product/ProductBox";
import { Container } from "@components/ui";
import { GetStaticProps } from "next";

const shop = () => {
  return (
    <Container>
      <div className="pt-[27px] px-[180px] mb-[135px]">
        <ProductSteps />
        <div className="flex items-start justify-between w-full">
          <ProductGallery />
          <div>
            <ProductDetail />
            <ProductForm />
          </div>
        </div>
        <ProductBox />
      </div>
      <Faq />
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      data: null,
    },
  };
};

export default shop;
