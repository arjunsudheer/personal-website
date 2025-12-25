import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import classNames from "classnames";
import { InfoCardData } from "../data/data";

const Pill = ({ text }: { text: string }) => (
    <div className='inline-flex items-center justify-center rounded-full px-4 py-2 bg-gray-300 dark:bg-slate-700 text-sm font-medium text-gray-900 dark:text-white shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out whitespace-nowrap truncate text-center w-full'>
        {text}
    </div>
);

const InfoCard = ({ title, description, topSkills, urls, imgSrc }: InfoCardData) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } });
        }
    }, [inView, controls]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial={{ opacity: 0, y: 30 }}
            whileHover={{ scale: 1.02, boxShadow: "0px 20px 30px rgba(0,0,0,0.15)" }}
            className="flex flex-col h-full w-full max-w-lg mx-auto cursor-pointer rounded-2xl bg-gray-100 dark:bg-slate-800 shadow-xl overflow-hidden transition-all duration-300 border border-transparent hover:border-blue-500"
        >
            <div className="pt-10 pb-8 px-6">
                <h3 className='text-2xl font-bold text-center dark:text-white'>{title}</h3>
            </div>

            {imgSrc && (
                <div className="w-full bg-gray-200 dark:bg-slate-700 flex items-center justify-center h-48 sm:h-64 overflow-hidden">
                    <img src={imgSrc} alt={title} className='w-full h-full object-contain p-2' />
                </div>
            )}

            <div className="p-8 flex flex-col grow">
                <div className="mb-8 grow">
                    <p className="text-center text-gray-700 dark:text-gray-300 leading-relaxed">
                        {description}
                    </p>
                </div>
                
                {topSkills && topSkills.length > 0 && (
                    <div className='mb-8'>
                        <div className='grid grid-cols-2 lg:grid-cols-3 gap-3'>
                            {topSkills.map((skill, idx) => (
                                <div key={idx} className={classNames({ "col-span-2": skill.length > 18, "col-span-1": skill.length <= 18 })}>
                                    <Pill text={skill} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                
                {urls && urls.length > 0 && (
                    <div className='mt-auto flex flex-wrap justify-center items-center gap-8'>
                        {urls.map((url_info, idx) => (
                            <a 
                                href={url_info.url} 
                                key={idx} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-blue-600 hover:text-blue-500 font-semibold underline decoration-2 underline-offset-4 transition-colors"
                            >
                                {url_info.name}
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default InfoCard;