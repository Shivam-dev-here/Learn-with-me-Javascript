
import React, { useState } from 'react';

interface MoodTrackerProps {
  onMoodSelect: (mood: string) => void;
}

const moods = [
  { emoji: '😊', label: 'Happy' },
  { emoji: '🙂', label: 'Okay' },
  { emoji: '😐', label: 'Meh' },
  { emoji: '😕', label: 'Sad' },
  { emoji: '😔', label: 'Awful' },
];

const MoodTracker: React.FC<MoodTrackerProps> = ({ onMoodSelect }) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (moodLabel: string) => {
    setSelected(moodLabel);
    onMoodSelect(moodLabel);
    setTimeout(() => setSelected(null), 2000); // Reset after 2 seconds
  };

  return (
    <div className="bg-white rounded-xl p-4 mb-6 shadow-sm border border-slate-200">
      <h3 className="text-center text-sm font-semibold text-slate-600 mb-3">How are you feeling right now?</h3>
      <div className="flex justify-around">
        {moods.map(mood => (
          <button
            key={mood.label}
            onClick={() => handleSelect(mood.label)}
            className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-200 ${
              selected === mood.label ? 'bg-sky-100 scale-110' : 'hover:bg-slate-100'
            }`}
            disabled={!!selected}
          >
            <span className="text-3xl">{mood.emoji}</span>
            <span className="text-xs text-slate-500">{mood.label}</span>
          </button>
        ))}
      </div>
      {selected && <p className="text-center text-xs text-sky-600 mt-3">Thanks for sharing!</p>}
    </div>
  );
};

export default MoodTracker;
