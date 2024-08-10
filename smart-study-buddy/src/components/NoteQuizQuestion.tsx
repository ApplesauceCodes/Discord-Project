const NoteQuizQuestion = (props: {question: string}) => {
    return (
        <div>
            <h2>{props.question}</h2>
            <input type="text"/>
        </div>
    )
}

export { NoteQuizQuestion }