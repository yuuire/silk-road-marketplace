import { useEffect, useState } from "preact/hooks";
import { repositories } from "../components/constants";
import { GitHubLogo, Website } from "../components/Icons";

interface Repository {
    icon: string;
    name: string;
    description: string;
    // language: string;
    // url: string;
    // stargazers_count: number;
}

export function Projects(props: { name?: string }) {
    const [projects, setProjects] = useState<Repository[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const projectsData = await Promise.all(
                    repositories.map(async (repo) => {
                        const response = await fetch(`https://api.github.com/repos/${repo}`);
                        const data = await response.json();
                        
                        return {
                            icon: data.owner?.avatar_url || "https://github.com/example.png",
                            name: data.full_name || "???",
                            description: data.description || "",
                            // language: data.language || "",
                            // url: data.homepage,
                            // stargazers_count: data.stargazers_count || "",
                        };
                    })
                );

                setProjects(projectsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <>
            <h1 class="text-xl font-medium mb-5">browsing projects</h1>
			<div class="flex flex-col gap-5">
                {projects.map((project, index) => (
                    <Project key={index} data={project} />
                ))}
			</div>
        </>
    )
}

interface Props {
    data: Repository;
}

function Project({ data }: Props) {
    return (
        <>
            <div class="flex items-stretch gap-10 bg-zinc-50 rounded-lg border-2 border-neutral-200 overflow-hidden">
                <img class="w-64" src={data.icon} alt="icon"/>
                <div class="flex flex-col justify-center">
                    <h1 class="text-2xl text-brand font-medium mb-5">
                    <a href={"https://github.com/" + data.name}>{data.name}</a>    
                    </h1>
                    <p>{data.description}</p>
                </div>
                <div class="flex flex-col items-center justify-center ml-auto px-12 bg-zinc-200">
                    <a href={"https://github.com/" + data.name}><GitHubLogo /></a>
                </div>
            </div>
        </>
    );
}
