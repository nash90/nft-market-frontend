import Head from "next/head";

export interface HeadTagMeta {
  title?: string;
	description?: string;
	content?: string;
}

export interface HeadTagProps {
	meta: HeadTagMeta;
}

// Common layout for PC display
// Layout with common parts like headers and footers
const CommonHeadTag: React.FC<HeadTagProps> = (props: HeadTagProps) => {
	const {
		title = "NFT Market Place App",
		description = "NFT Market Place App",
		content = "NFT Market Place App",
	} = props.meta;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name={description} content={content} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default CommonHeadTag;
