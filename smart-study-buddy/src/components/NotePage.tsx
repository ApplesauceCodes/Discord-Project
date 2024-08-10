import { NoteInfo } from "./NoteInfo";
import { NoteQuiz } from "./NoteQuiz";

const NotePage = (props: {title: string, content: string}) => {
    return (
        <div>
            <NoteInfo {...props} />
            <hr/>
            <NoteQuiz/>
        </div>
    )
}

export { NotePage }