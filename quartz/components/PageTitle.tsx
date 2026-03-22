import { joinSegments, pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const imgSrc = joinSegments(baseDir, "static/datajournal.svg")
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir} style="display:flex; align-items: center; margin: 0px"><img src={imgSrc} alt="Logo" style="height: 1em; padding-right: 0.25em"></img>{title}</a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
