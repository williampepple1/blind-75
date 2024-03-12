import { Card } from '@/components/Card'
import { formatDate } from '@/lib/formatDate'

export default function String({ string }) {
    return (
      <article className="md:grid md:grid-cols-4 md:items-baseline">
        <Card className="md:col-span-3">
          <Card.Title href={`/strings/${string.slug}`}>
            {string.title}
          </Card.Title>
          <Card.Eyebrow
            as="time"
            dateTime={string.date}
            className="md:hidden"
            decorate
          >
            {formatDate(string.date)}
          </Card.Eyebrow>
          <Card.Description>{string.description}</Card.Description>
          <Card.Cta>Read Question</Card.Cta>
        </Card>
        <Card.Eyebrow
          as="time"
          dateTime={string.date}
          className="mt-1 hidden md:block"
        >
          {formatDate(string.date)}
        </Card.Eyebrow>
      </article>
    )
  }
  
 