import React from "react";
import Head from "next/head";

interface Props  {
  url: string,
  title: string,
  description: string,
  image: string,
  siteName?: string,
  openGraphType: string,
}

const socialTags = ({openGraphType, url, title, description, image, siteName}: Props) => {
  const metaTags = [
    {name: "og:title", content: title},
    {name: "og:type", content: openGraphType},
    {name: "og:url", content: url},
    {name: "og:image", content: image},
    {name: "og:description", content: description},
    {
      name: "og:site_name",
      content: siteName || "PAT Starter Next.js Template"
    },
    // TODO would those be useful?
    // {
    //   name: "og:published_time",
    //   content: createdAt || new Date().toISOString(),
    // },
    // {
    //   name: "og:modified_time",
    //   content: updatedAt || new Date().toISOString(),
    // },
  ];

  return metaTags;
};

export const Meta = (props: Props) => {
  const {title, description, image} = props;

  return (
    <Head>
      <title>{title} | App</title>
      <meta name="description" content={description}/>
      <meta itemProp="name" content={title}/>
      <meta itemProp="description" content={description}/>
      <meta itemProp="image" content={image}/>
      {socialTags(props).map(({name, content}) => {
        return <meta key={name} name={name} content={content}/>;
      })}
    </Head>
  );
};
