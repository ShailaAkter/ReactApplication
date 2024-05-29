import { Helmet } from "react-helmet"
import cn from "../../utils/cn"


const ContainerBox = ({children, title, description, keywords, author}) => 
{
  return (
    <div 
    className={cn('w-full max-w-[1400px] z-10 px-[20px] mx-auto')}>
      <Helmet>
        <meta name="description" content={description}/>
        <meta name="kyewords" content={keywords}/>
        <meta name="author" content={author}/>
        <title>{title}</title>
      </Helmet>

        {children}
    </div>
  )
}

ContainerBox.defaultProps = 
{
  title: "Shop Now From TIMEZEN",
  description: "TIMEZEN - A Watch store which you can rely on. Buy from our shop or order online.",
  keywords: "watch, wrist watch, accessories, mens watch, gents watch",
  author: "CodeArtByAmbivert"
};


export default ContainerBox