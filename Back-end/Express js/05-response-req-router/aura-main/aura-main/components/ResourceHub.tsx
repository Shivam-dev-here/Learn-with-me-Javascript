
import React, { useState, useCallback } from 'react';
import { generateResources } from '../services/geminiService';
import { Resource } from '../types';
import { Spinner } from './icons/Spinner';

const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => (
    <a 
        href={resource.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-200"
    >
        <h3 className="text-lg font-bold text-sky-600 mb-2">{resource.title}</h3>
        <p className="text-slate-600 text-sm">{resource.description}</p>
        <p className="text-xs text-slate-400 mt-4 break-all">{resource.url}</p>
    </a>
);


const ResourceHub: React.FC = () => {
    const [topic, setTopic] = useState('');
    const [resources, setResources] = useState<Resource[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [searched, setSearched] = useState(false);

    const handleSearch = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (!topic.trim()) return;

        setIsLoading(true);
        setError(null);
        setSearched(true);
        setResources([]);

        try {
            const result = await generateResources(topic);
            if (result && Array.isArray(result)) {
                setResources(result);
            } else {
                setError("Sorry, I couldn't find resources for that topic. Please try another search.");
            }
        } catch (err) {
            setError("An error occurred while fetching resources. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }, [topic]);
    
    const suggestedTopics = ["Managing anxiety", "Feeling motivated", "Stress at school", "Mindfulness"];

    return (
        <div className="bg-slate-100 rounded-2xl shadow-lg p-8 w-full">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-2">Discover Resources</h2>
            <p className="text-center text-slate-500 mb-6">Find articles, tools, and support for your well-being.</p>

            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center gap-3 mb-6">
                <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="E.g., 'how to deal with stress'"
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
                />
                <button 
                    type="submit" 
                    className="w-full sm:w-auto bg-sky-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-600 transition-colors disabled:bg-slate-400 flex justify-center items-center"
                    disabled={isLoading}
                >
                    {isLoading ? <Spinner /> : 'Search'}
                </button>
            </form>
            
             <div className="text-center mb-8">
                <p className="text-sm text-slate-500 mb-2">Or try one of these:</p>
                <div className="flex flex-wrap justify-center gap-2">
                    {suggestedTopics.map(t => (
                        <button 
                            key={t}
                            onClick={() => setTopic(t)}
                            className="bg-sky-100 text-sky-700 text-xs font-semibold px-3 py-1 rounded-full hover:bg-sky-200 transition-colors"
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            {isLoading && (
                <div className="text-center p-8">
                    <p className="text-slate-600">Finding the best resources for you...</p>
                </div>
            )}

            {error && <p className="text-center text-red-500 bg-red-100 p-3 rounded-lg">{error}</p>}
            
            {!isLoading && !error && searched && resources.length === 0 && (
                <div className="text-center p-8 bg-white rounded-lg">
                    <h3 className="text-lg font-semibold text-slate-700">No resources found</h3>
                    <p className="text-slate-500">Try searching for a different topic.</p>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((res, index) => (
                    <ResourceCard key={index} resource={res} />
                ))}
            </div>
        </div>
    );
};

export default ResourceHub;
