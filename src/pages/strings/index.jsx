import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllStrings } from '@/lib/getAllStrings'
import { formatDate } from '@/lib/formatDate'

function String({ string }) {
  return (
    <string className="md:grid md:grid-cols-4 md:items-baseline">
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
    </string>
  )
}

export default function StringsIndex({ strings }) {
  return (
    <>
      <Head>
        <title>Strings - William Pepple</title>
        <meta
          name="description"
          content="Questions on Strings."
        />
      </Head>
      <SimpleLayout
        title="Questions on Strings"
        intro="Leetcode Questions and Solutions on Strings"
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {strings.map((string) => (
              <String key={string.slug} string={string} />
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
      strings: (await getAllStrings()).map(({ component, ...meta }) => meta),
    },
  }
}
