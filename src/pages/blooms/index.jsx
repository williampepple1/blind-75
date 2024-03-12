import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllBlooms } from '@/lib/getAllBlooms'
import { formatDate } from '@/lib/formatDate'

function Bloom({ bloom }) {
  return (
    <bloom className="md:grid md:grid-cols-4 md:items-baseline">
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
    </bloom>
  )
}

export default function BloomsIndex({ blooms }) {
  return (
    <>
      <Head>
        <title>Blooms - William Pepple</title>
        <meta
          name="description"
          content="Questions on Blooms."
        />
      </Head>
      <SimpleLayout
        title="Questions on Blooms"
        intro="Leetcode Questions and Solutions on Blooms"
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {blooms.map((bloom) => (
              <Bloom key={bloom.slug} bloom={bloom} />
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
      blooms: (await getAllBlooms()).map(({ component, ...meta }) => meta),
    },
  }
}
