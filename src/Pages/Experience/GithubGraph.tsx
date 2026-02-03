import { GitHubContributions } from "@msh-01/react-github-activity/dist/index";


export default function GithubGraph() {
    const token = import.meta.env.VITE_GITHUB_KEY
    const year = new Date().getFullYear
  return (
    <div className="w-full">
        <GitHubContributions username="Onetyten" className="w-full min-w-full" months={12} token = {token} showStats showLabels/>
    </div>
  )
}
