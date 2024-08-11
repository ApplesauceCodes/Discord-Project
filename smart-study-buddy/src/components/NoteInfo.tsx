// "use client";

// import { motion } from "framer-motion";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "./shadcn/ui/breadcrumb.tsx";

// const draw = {
// 	hidden: { pathLength: 0, opacity: 0 },
// 	visible: () => {
// 		const delay = 0.5;
// 		return {
// 			pathLength: 1,
// 			opacity: 1,
// 			transition: {
// 				pathLength: { delay, type: "spring", duration: 3, bounce: 0 },
// 				opacity: { delay, duration: 1 },
// 			},
// 		};
// 	},
// };

const NoteInfo = (props: { title: string; content: string; path: string }) => {
	return (
		<section className="relative flex flex-col content-center justify-center overflow-hidden bg-primary rounded-md border-[1px] border-secondary p-8 m-2 mx-auto max-w-screen-md w-screen h-auto shadow-secondary shadow-md">

			{/* todo make this functional */}
			<Breadcrumb className="text-light">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Notes</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink href="/components">
							Topic name
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>Note Title</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<header className="my-8 self-center w-fit fill-textmedium">
				<h1 className="text-5xl font-semibold tracking-tight text-medium font-scribe">
					{props.title}
				</h1>
				{/* <motion.svg
					className={"w-[500px] h-[5px]"}
					initial="hidden"
					animate="visible"
				>
					<motion.line
						x1={80}
						y1={2}
						x2={500-80}
						y2={2}
						stroke="grey"
						strokeWidth={2}
						variants={draw}
						custom={0.5}
					/>
				</motion.svg> */}
			</header>

			<article className="text-xl font-normal mb-4 text-left text-medium">
				<p>{props.content}</p>
			</article>
		</section>
	);
};

export { NoteInfo };
