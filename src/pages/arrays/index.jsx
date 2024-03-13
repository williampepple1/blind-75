import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArrays } from '@/lib/getAllArrays'
import { formatDate } from '@/lib/formatDate'

function Array({ array }) {
  return (
    <array className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/arrays/${array.slug}`}>
          {array.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={array.date}
          className="md:hidden"
          decorate
        >
          {formatDate(array.date)}
        </Card.Eyebrow>
        <Card.Description>{array.description}</Card.Description>
        <Card.Cta>Read Question</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={array.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(array.date)}
      </Card.Eyebrow>
    </array>
  )
}

export default function ArraysIndex({ arrays }) {
  return (
    <>
      <Head>
        <title>Arrays - William Pepple</title>
        <meta
          name="description"
          content="Questions on Arrays."
        />
      </Head>
      <SimpleLayout
        title="Questions on Arrays"
        intro="Leetcode Questions and Solutions on Arrays"
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {arrays.map((array) => (
              <Array key={array.slug} array={array} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      arrays: (await getAllArrays()).map(({ component, ...meta }) => meta),
    },
  }
}
