const NoteInfo = (props: {title: string, content: string}) => {
    return (
        <div>
            <header>
                <h1>{props.title}</h1>
            </header>
            <article>
                <p>{props.content}</p>
            </article>
        </div>
    )
}

export { NoteInfo }