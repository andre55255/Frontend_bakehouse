import NextLink from 'next/link';

interface IPropsLink {
    href: string,
    children: React.ReactNode
}

export default function Link({ href, children, ...props } : IPropsLink) : JSX.Element {
    return (
        <NextLink href={href}>
            <a {...props}>{children}</a>
        </NextLink>
    );
}