import useFetchGitData from '../../../hooks/useFetchGitData';
import MonthlyGraph from './MonthlyGraph';



export default function CustomGithubGraph() {
    const username = "Onetyten";
    const {data,loading,error} = useFetchGitData(username)

    if (loading) return <div className="p-4">Loading contributions...</div>;
    if (error) return <div className="p-4 text-red-500">Error: {error}</div>;
    if (!data) return null;

    return (
        <div className="w-full p-6">
            <p className="text-gray-600 mb-6">{data.totalContributions} contributions in the last year</p>
            <MonthlyGraph contributions={data.contributions} />
        </div>
    );
}