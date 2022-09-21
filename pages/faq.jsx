import Link from "../src/components/Link/Link";
import Head from 'next/head';

export async function getStaticProps(){
    const url = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faq = await fetch(url)
       .then(response => {
        return response.json();
       }).then(response => {
        return response;
       })

    return {
        props: {
            faq
        }
    }
}

export default function FAQPage({faq}){

    return(
        <div>
            <Head>
                <title>Home - Alura Cases</title>
            </Head>
            <h1>Alura Cases - FAQ</h1>
            <Link href={'/'}>
                Ir para Home
            </Link>
            {
            faq.map(({ answer, question }) => (
                <li key={question}>
                    <article>
                        <h2>{question}</h2>
                        <p>{answer}</p>
                    </article>
                </li>
            ))
        }
        </div>
        
    )
}