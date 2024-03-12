import { Card } from '@/components/Card'
import { formatDate } from '@/lib/formatDate'

export default function Bloom({ bloom }) {
    return (
      <article className="md:grid md:grid-cols-4 md:items-baseline">
        <Card className="md:col-span-3">
          <Card.Title href={`/blooms/${bloom.slug}`}>
            {bloom.title}
          </Card.Title>
          <Card.Eyebrow
            as="time"
            dateTime={bloom.date}
            className="md:hidden"
            decorate
          >
            {formatDate(bloom.date)}
          </Card.Eyebrow>
          <Card.Description>{bloom.description}</Card.Description>
          <Card.Cta>Read Question</Card.Cta>
        </Card>
        <Card.Eyebrow
          as="time"
          dateTime={bloom.date}
          className="mt-1 hidden md:block"
        >
          {formatDate(bloom.date)}
        </Card.Eyebrow>
      </article>
    )
  }
  
 