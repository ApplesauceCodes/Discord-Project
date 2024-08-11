import { NoteInfo } from "./NoteInfo";
import { NoteQuiz } from "./NoteQuiz";

const NotePage = (props: { title: string; content: string; path: string }) => {
	return (
		<>
			<div className="relative flex min-h-screen flex-col justify-center align-middle content-center overflow-hidden bg-primary rounded-md border-[1px] border-secondary m-1 p-2">
				<NoteInfo {...props} />
				<hr className="border-secondary m-4" />
				<NoteQuiz />
			</div>
		</>
	);
};

export { NotePage };
