type Props = { eyebrow: string; title: string; description?: string; number?: string }

export default function SectionHeading({ eyebrow, title, description, number }: Props) {
  return (
    <div className="section-heading">
      <div className="section-heading__meta">
        <span className="eyebrow">{eyebrow}</span>
        {number && <span className="section-number">{number}</span>}
      </div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}