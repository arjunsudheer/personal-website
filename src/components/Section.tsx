import InfoCard from './InfoCard';
import { InfoCardData } from '../data/data';

interface SectionProps {
    id: string;
    title: string;
    data: InfoCardData[];
    index: number;
}

const Section = ({ data, title, id, index }: SectionProps) => {
    const bgStyle = index % 2 === 0 
        ? "bg-white dark:bg-slate-900" 
        : "bg-slate-50 dark:bg-slate-800/50";

    return (
        <section id={id} className={`w-full min-h-screen flex flex-col py-20 px-4 transition-colors ${bgStyle}`}>
            <div className="w-[90%] md:w-[75%] mx-auto mb-12">
                <h2 className="text-4xl font-bold dark:text-white border-b-4 border-blue-500 pb-2 inline-block">
                    {title}
                </h2>
            </div>

            <div className="w-[90%] md:w-[75%] mx-auto grow flex items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch w-full">
                    {data.map((item, idx) => (
                        <InfoCard key={idx} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section;