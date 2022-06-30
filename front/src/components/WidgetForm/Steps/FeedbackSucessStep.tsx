import { CloseButton } from "../../CloseButton";
import sucessImageUrl from '../../../assets/sucesso.svg'


interface FeedbackSucessStepProps {
    onFeedbackRestartRequested: () => void;
}
export function FeedbackSucessStep({onFeedbackRestartRequested}:FeedbackSucessStepProps) {
    return (
        <>
            <header>
                <CloseButton />
            </header>

            <div className="flex flex-col items-center py-10 w-[304px]">
                <img src={sucessImageUrl} alt="Emoji Checked" />
                <span>Agradecemos o feedback!</span>


                <button
                onClick={onFeedbackRestartRequested}
                className="py-2 px-4 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                >Quero enviar outro!</button>
            </div>
        </>
)
}