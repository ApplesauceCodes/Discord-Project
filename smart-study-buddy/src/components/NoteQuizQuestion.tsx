
/*

look into:
https://ui.shadcn.com/docs/components/form

*/

const NoteQuizQuestion = (props: {question: string}) => {
    return (
        <>
            <h2>{props.question}</h2>
            <input type="text"/>
        </>
    )
}

export { NoteQuizQuestion }