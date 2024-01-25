import Image from 'next/image'
import Link from 'next/link'

type Props = {
    result: Result
}

export default function Item({ result }: Props) {
    const itemTextCol = (
        <div className="flex flex-col justify-center">
            <h2>
                <Link href={`https://en.wikipedia.org/?curid=${result.pageid}`} target='_blank'
                    className="text-sm text-gray-800 font-bold underline md:text-lg">
                    {result.title}
                </Link>
            </h2>
            <p className='text-sm md:text-lg'>{result.extract}</p>
        </div>
    )

    const content = result?.thumbnail?.source
        ? (
            <article className="bg-gray-400 rounded-lg shadow-md p-4 hover:bg-gray-300 transition-colors duration-300 m-1 h-28">
                <div className="flex flex-row gap-4">
                    <div className="flex flex-col justify-center">
                        <Image
                            src={result.thumbnail.source}
                            alt={result.title}
                            width={result.thumbnail.width}
                            height={result.thumbnail.height}
                        />
                    </div>
                    {itemTextCol}
                </div>
            </article>

        )
        : (
            <article className="bg-gray-400 rounded-lg shadow-md p-4 hover:bg-gray-300 transition-colors duration-300 m-1 h-28">
                {itemTextCol}
            </article>
        )

    return content
}