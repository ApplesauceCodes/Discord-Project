import { NoteInfo } from "./NoteInfo";
import { NoteQuiz } from "./NoteQuiz";

const NotePage = (props: {title: string, content: string}) => {
    return (
        <>
            <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-primary rounded-md border-[1px] border-secondary m-1 p-2">
                <NoteInfo {...props} />
                <hr/>
                <NoteQuiz/>
            </div>
        </>
    )
}

export { NotePage }