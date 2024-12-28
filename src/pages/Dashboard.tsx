import React from 'react';
import { Trophy, Target, Users, TrendingUp, Plus } from 'lucide-react';
import { ScoreEntry } from '../components/scores/ScoreEntry';
import type { Score } from '../types';

const stats = [
  { name: 'Total Shooters', value: '0', icon: Users },
  { name: 'Recent Games', value: '0', icon: Target },
  { name: 'Straights Today', value: '0', icon: Trophy },
  { name: 'Club Average', value: '0.0', icon: TrendingUp },
];

export default function Dashboard() {
  const [showScoreEntry, setShowScoreEntry] = React.useState(false);

  const handleScoreSubmit = (score: Omit<Score, 'score_id' | 'shooter_id' | 'date'>) => {
    // TODO: Implement score submission
    console.log('Score submitted:', score);
    setShowScoreEntry(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
        <button
          onClick={() => setShowScoreEntry(!showScoreEntry)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          New Score
        </button>
      </div>

      {showScoreEntry && (
        <div className="mb-8">
          <ScoreEntry onSubmit={handleScoreSubmit} />
        </div>
      )}
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Icon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {stat.name}
                      </dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">
                          {stat.value}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Recent Activity
          </h3>
          <div className="mt-6">
            <p className="text-gray-500 text-center py-8">
              No recent activity to display
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}