
import React from 'react';

const StrategyCard: React.FC<{ title: string; description: string; children?: React.ReactNode }> = ({ title, description, children }) => (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
        <h3 className="text-xl font-bold text-sky-600 mb-3">{title}</h3>
        <p className="text-slate-600 text-sm mb-4">{description}</p>
        {children}
    </div>
);

const BoxBreathing: React.FC = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-32 h-32 border-4 border-sky-300 rounded-lg flex justify-center items-center relative animate-[spin_16s_linear_infinite]">
                 <div className="w-full h-full absolute animate-[breathe_16s_ease-in-out_infinite]"></div>
                 <style>{`
                    @keyframes breathe {
                        0%, 100% { transform: scale(0.8); }
                        25% { transform: scale(1); }
                        50% { transform: scale(0.8); }
                        75% { transform: scale(1); }
                    }
                 `}</style>
            </div>
            <div className="mt-4 text-center text-xs text-slate-500 grid grid-cols-2 gap-x-4 gap-y-1">
                <p className="font-semibold">Breathe In</p><p>4s</p>
                <p className="font-semibold">Hold</p><p>4s</p>
                <p className="font-semibold">Breathe Out</p><p>4s</p>
                <p className="font-semibold">Hold</p><p>4s</p>
            </div>
        </div>
    );
}

const GroundingTechnique: React.FC = () => {
    return (
        <ul className="space-y-3 text-sm">
            <li className="flex items-start"><strong className="mr-2 text-sky-500">5</strong><span>Acknowledge FIVE things you see around you.</span></li>
            <li className="flex items-start"><strong className="mr-2 text-sky-500">4</strong><span>Acknowledge FOUR things you can touch around you.</span></li>
            <li className="flex items-start"><strong className="mr-2 text-sky-500">3</strong><span>Acknowledge THREE things you can hear.</span></li>
            <li className="flex items-start"><strong className="mr-2 text-sky-500">2</strong><span>Acknowledge TWO things you can smell.</span></li>
            <li className="flex items-start"><strong className="mr-2 text-sky-500">1</strong><span>Acknowledge ONE thing you can taste.</span></li>
        </ul>
    );
};

const CopingStrategies: React.FC = () => {
    return (
        <div className="bg-slate-100 rounded-2xl shadow-lg p-8 w-full">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-2">Coping Toolkit</h2>
            <p className="text-center text-slate-500 mb-8">Simple techniques to find calm and stay present.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <StrategyCard title="Box Breathing" description="A simple technique to calm your nervous system. Follow the animation and text prompts.">
                    <BoxBreathing />
                </StrategyCard>
                <StrategyCard title="5-4-3-2-1 Grounding" description="Use your five senses to bring yourself back to the present moment.">
                    <GroundingTechnique />
                </StrategyCard>
                 <StrategyCard title="Mindful Doodling" description="Grab a pen and paper. Draw whatever comes to mind without judgment. Focus on the movement of your hand and the lines you create. There's no right or wrong way to do it.">
                </StrategyCard>
                <StrategyCard title="Positive Affirmation" description="Repeat a positive phrase to yourself. It can be something like 'I am calm and in control' or 'This feeling will pass.' Choose a phrase that resonates with you.">
                </StrategyCard>
            </div>
        </div>
    );
};

export default CopingStrategies;
