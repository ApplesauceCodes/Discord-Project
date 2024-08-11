import { NoteQuizQuestion } from "./NoteQuizQuestion";

const NoteQuiz = () => {
    return (
        <>
            <section className="relative flex flex-col content-center justify-center overflow-hidden bg-primary p-8 m-2 mx-auto max-w-screen-md w-screen h-auto">
                <NoteQuizQuestion question="Test question 1" />
                <NoteQuizQuestion question="Test question 2" />
            </section>
        </>
    )
}

export { NoteQuiz }