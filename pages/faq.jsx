import FAQScreen from '../src/screens/FAQScreen';

export default FAQScreen; 

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
