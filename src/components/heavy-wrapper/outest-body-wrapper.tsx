const OutestBodyWrapper = ({children}: { children: React.ReactNode }) => {
    return (
        <html lang="id">
        <body>
        {children}
        </body>
        </html>
    )
}

export default OutestBodyWrapper;