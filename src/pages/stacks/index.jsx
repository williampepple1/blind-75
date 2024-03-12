import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllStacks } from '@/lib/getAllStacks'
import { formatDate } from '@/lib/formatDate'

function Stack({ stack }) {
  return (
    <stack className="md:grid md:grid-cols-4 md:items-baseline">
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
    </stack>
  )
}

export default function StacksIndex({ stacks }) {
  return (
    <>
      <Head>
        <title>Stacks - William Pepple</title>
        <meta
          name="description"
          content="Questions on Stacks."
        />
      </Head>
      <SimpleLayout
        title="Questions on Stacks"
        intro="Leetcode Questions and Solutions on Stacks"
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {stacks.map((stack) => (
              <Stack key={stack.slug} stack={stack} />
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
      stacks: (await getAllStacks()).map(({ component, ...meta }) => meta),
    },
  }
}
