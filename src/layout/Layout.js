

export default function Layout({ children }) {

    return (
        <>
            <div>HEADER</div>
            <main>{children}</main>
            <div>FOOTER</div>
        </>
    )
} 