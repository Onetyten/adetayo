// import { GitHubContributions } from "@msh-01/react-github-activity/dist/index";
import {GitHubCalendar} from 'react-github-calendar';


export default function GithubGraph() {
  return (
    <GitHubCalendar username="Onetyten"  blockSize={15}
      blockMargin={5}
      fontSize={14}
    
      tooltips={{
        activity: {
          text: (activity) => `${activity.count} contributions on ${activity.date}`
        }
      }}
      />
  )
}
