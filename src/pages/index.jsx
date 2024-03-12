import Head from 'next/head'
import { Container } from '@/components/Container'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { getAllStacks } from '@/lib/getAllStacks'
import { getAllStrings } from '@/lib/getAllStrings'
import Article from '@/question_components/Article'
import Stack from '@/question_components/Stack'
import Link from 'next/link'
import String from '@/question_components/String'
import { getAllBlooms } from '@/lib/getAllBlooms'
import Bloom from '@/question_components/Bloom'





export default function Home({ articles, stacks, strings, blooms }) {
  return (
    <>
      <Head>
        <title>
          Neetcode Blind 75 Questions
        </title>
        <meta
          name="description"
          content="Linux Shortcut commands"
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Neetcode Blind 75 Questions
          </h1>
          <p className="mt-6 mb-16 text-base text-zinc-600 dark:text-zinc-400">
           Solutions and explanations for Neetcode Blind 75 Algorithm Questions
          </p>
        </div>
        <p className="mt-8 mb-16 text-base text-zinc-600 dark:text-zinc-400">
           Click for more Questions  {"  "} <span><Link href={'/articles'} className='text-green-500'>Click</Link></span> 
          </p>
        <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <p className="mt-8 mb-16 text-base text-zinc-600 dark:text-zinc-400">
           Questions on Stack    {"  "} <span><Link href={'/stacks'} className='text-green-500'>Click for more </Link></span> 
          </p>
          <div className="flex flex-col gap-16">
            {stacks.map((stack) => (
              <Stack key={stack.slug} stack={stack} />
            ))}
          </div>
          <p className="mt-8 mb-16 text-base text-zinc-600 dark:text-zinc-400">
           Questions on Strings   {"  "} <span><Link href={'/strings'} className='text-green-500'>Click for more </Link></span> 
          </p>
          <div className="flex flex-col gap-16">
            {strings.map((string) => (
              <String key={string.slug} string={string} />
            ))}
          </div>
          <p className="mt-8 mb-16 text-base text-zinc-600 dark:text-zinc-400">
           Questions on Blooms   {"  "} <span><Link href={'/blooms'} className='text-green-500'>Click for more </Link></span> 
          </p>
          <div className="flex flex-col gap-16">
            {blooms.map((bloom) => (
              <Bloom key={bloom.slug} bloom={bloom} />
            ))}
          </div>
      
      
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 1)
        .map(({ component, ...meta }) => meta),
      stacks: (await getAllStacks())
        .slice(0, 1)
        .map(({ component, ...meta }) => meta),  
      strings: (await getAllStrings())
        .slice(0, 1)
        .map(({ component, ...meta }) => meta),  
      blooms: (await getAllBlooms())
        .slice(0, 1)
        .map(({ component, ...meta }) => meta),    
    },

  }
}
