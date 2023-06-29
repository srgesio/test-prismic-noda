import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Title`.
 */
export type TitleProps = SliceComponentProps<Content.TitleSlice>;

/**
 * Component for "Title" Slices.
 */
const Title = ({ slice }: TitleProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* Placeholder component for title (variation: {slice.variation}) Slices */}
      <PrismicRichText field={slice.primary.title} />
    </section>
  );
};

export default Title;
