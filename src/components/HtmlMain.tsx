type Props = {
  html: string;
};

export function HtmlMain({ html }: Props) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
