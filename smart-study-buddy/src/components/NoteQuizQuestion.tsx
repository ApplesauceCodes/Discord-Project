const NoteQuizQuestion = (props: {question: string}) => {
    return (
        <>
            <h2>{props.question}</h2>
            <input type="text"/>
        </>
    )
}

export { NoteQuizQuestion }