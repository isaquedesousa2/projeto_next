import NextLink from 'next/link'
import LinkEstilizado from '../LinkEstilizado/LinkEstilizado'

export default function Link({ children, href, ...props}){
    return(
        <NextLink href={href}>
            <LinkEstilizado {...props}>
                {children}
            </LinkEstilizado>
        </NextLink>
    )
}