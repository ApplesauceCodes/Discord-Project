const NoteInfo = (props: {title: string, content: string}) => {
    return (
        <>
            <header className="text-5xl">
                <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                  {props.title}
                </h2>
                {/* <h1>{props.title}</h1> */}
            </header>
            <article>
                <p>{props.content}</p>
            </article>
        </>
    )
}

export { NoteInfo }