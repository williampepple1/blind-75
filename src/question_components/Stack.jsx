import { Card } from '@/components/Card'
import { formatDate } from '@/lib/formatDate'

export default function Stack({ stack }) {
    return (
      <article className="md:grid md:grid-cols-4 md:items-baseline">
        <Card className="md:col-span-3">
          <Card.Title href={`/stacks/${stack.slug}`}>
            {stack.title}
          </Card.Title>
          <Card.Eyebrow
            as="time"
            dateTime={stack.date}
            className="md:hidden"
            decorate
          >
            {formatDate(stack.date)}
          </Card.Eyebrow>
          <Card.Description>{stack.description}</Card.Description>
          <Card.Cta>Read Question</Card.Cta>
        </Card>
        <Card.Eyebrow
          as="time"
          dateTime={stack.date}
          className="mt-1 hidden md:block"
        >
          {formatDate(stack.date)}
        </Card.Eyebrow>
      </article>
    )
  }
  
 